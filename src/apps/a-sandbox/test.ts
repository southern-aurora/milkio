import type typia from "typia"
import { defineApi, defineApiTest } from "milkio"

/**
 * This is an API that greets you!
 * 🌟 These ~~comments~~ will be presented by the **Cookbook**
 */
export const api = defineApi({
  meta: {
    // 
  },
  async action(
    params: {
      by?: string & typia.tags.MinLength<2> & typia.tags.MaxLength<16>;
    },
    context
  ) {
    const message = `hello world! (by ${params.by})`

    return {
      youSay: message
    }
  }
})

export const test = defineApiTest(api, [
  {
    name: "Basic",
    handler: async (test) => {
      const result = await test.execute({
        by: "milkio"
      })

      if (!result.success) return test.reject(`The result was not success`)
      if (result.data.youSay !== "hello world! (by milkio)") return test.reject(`"youSay" is inconsistent with expectations.`)
    }
  }
])
