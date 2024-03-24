import { configMilkio } from "./src/config/milkio"
import { createMilkioApp, defineHttpHandler, envToNumber, executeApiTests } from "milkio"
import { httpIOConsoleLog } from "./src/middlewares/http-io-console-log"
import { helloWorld } from "./src/bootstraps/hello-world"
import { useDrizzle } from "./src/uses/drizzle"
import { env, exit } from "node:process"

export const milkio = await createMilkioApp({
  bootstraps: () => [helloWorld()],
  middlewares: () => [httpIOConsoleLog()]
})

console.log("RUN_MODE --", configMilkio.runMode)

switch (configMilkio.runMode) {
  default: {
    // start http server
    const httpHandler = defineHttpHandler(milkio)
    // if you are using Bun
    Bun.serve({
      port: envToNumber(env.PORT, 9000),
      fetch(request) {
        return httpHandler({ request })
      }
    })
    break;
  }
  case "API_TEST": {
    // decide whether to enter api test mode based on environment
    await executeApiTests(milkio, configMilkio.apiTestPath)
    exit(0)
  }
  case "DATABASE_MIGRATE": {
    // (optional) migrate the database structure to the production environment
    const drizzle = await useDrizzle()
    const { migrate } = await import("drizzle-orm/mysql2/migrator")
    await migrate(drizzle, { migrationsFolder: "drizzle" })
    exit(0)
  }
}
