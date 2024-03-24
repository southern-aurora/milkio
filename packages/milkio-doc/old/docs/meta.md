---
title: Meta
---

# Meta

Meta 定义了一个 API 的元数据，通常与 [中间件](/old/docs/middleware.md) 配合使用。

## 编写

Meta 类型的定义位于 `/src/meta.ts` 文件中，您可以根据需要自由扩展它。

假设您要编写一个功能，该功能允许 API 自行定义哪些 HTTP 方法可以被允许调用。您可以按以下方式编写 Meta 类型的定义：

```ts
// file: /src/meta.ts
export type Meta = {
  allowMethods: Array<"GET" | "POST" | "PUT" | "DELETE">;
};
```

请继续参考以下示例，展示了如何编写一个 API，并且利用 Meta 来使其只允许 POST 方法：

```ts
// file: /src/app/your-example/api.ts
import { defineApi } from "milkio";

export const test = defineApi({
  meta: {
    allowMethods: ["POST"],
  },
  action(
    params: {
      name: string;
    },
    context
  ) {
    return `hello ${params.name}`;
  },
});
```

此处，我们已经通过声明 Meta 来使 API 声明自己所允许的 HTTP 方法是什么了。继续编写一个 Middleware，使其在请求到达 API 之前，检查请求方法是否被允许：

```ts
// file: /src/bootstrap/middleware-allow-methods.ts

import { reject, useMeta, useMiddleware } from "milkio";

export default function () {
  const middleware = useMiddleware(0);

  middleware.onAfterHTTPRequest(async (headers, detail) => {
    const meta = await useMeta(detail.path);
    const allowMethods: Array<string> = meta.allowMethods;

    if (!allowMethods.includes(detail.request.method)) {
      throw reject("NOT_ALLOW_METHOD", undefined);
    }
  });
}
```
