import { argv } from "bun"
import { cwd, env } from "node:process"
import { envToBoolean, envToNumber, envToString } from "milkio"

export const configMilkio = {
  cwd: cwd(),
  debug: envToBoolean(env.MILKIO_DEBUG, false),
  runMode: envToString(env.MILKIO_RUN_MODE, argv.length >= 3 && argv[2].startsWith("--run-mode:") ? process.argv[2].split("--run-mode:")[1] : "DEFAULT"),

  // api test
  apiTestPath: envToString(env.MILKIO_API_TEST_PATH, ""),

  // http server
  ignorePathLevel: envToNumber(env.MILKIO_IGNORE_PATH_LEVEL, 0),
  corsAllowMethods: envToString(env.MILKIO_CORS_ALLOW_METHODS, "*"),
  corsAllowHeaders: envToString(env.MILKIO_CORS_ALLOW_HEADERS, "*"),
  corsAllowOrigin: envToString(env.MILKIO_CORS_ALLOW_ORIGIN, "*")
}
