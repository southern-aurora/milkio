---
title: Middleware
---

# Middleware

Middleware 是一种全局的、在执行 API 之前或之后，执行任意逻辑的方式。

通常，用于配合 [Meta](/old/docs/meta.md) 来检查和过滤发送给 API 的请求和响应，或用于设置 [Context](/old/docs/context.md)。

## 编写

Middleware 没有自己专属的目录，而是存放在 `/src/bootstrap` 目录中。我们通常建议，所有的 Middleware 都以 `middleware-*.ts` 的形式命名，以便于区分。

```ts
// file: /src/bootstrap/middleware-your-example.ts

import { reject, useMeta, useMiddleware } from "milkio";

export default function () {
  const middleware = useMiddleware(0);

  middleware.onAfterHTTPRequest(async (headers, detail) => {
    console.log("hello world");
  });
}
```

## 钩子

可以通过 Middleware 的钩子来注册中间件。

### middleware.onAfterHTTPRequest

在 HTTP 请求到达时执行，此时，尚未将 HTTP 请求中的 Body 解析为递交给 API Action 的 Params。

如果请求非来自 HTTP，此钩子不会被执行。

参数：`contextHeaders`, `contextDetail`

### middleware.onBeforeExecute

在您的 API Action 执行之前执行。此时，已经将 HTTP 请求中的 Body 解析为递交给 API Action 的 Params。

参数：`context`

### middleware.onAfterExecute

在您的 API Action 执行之后执行。此时，已有 API Action 的执行结果，为第二个参数。

参数：`context`, `response`

### middleware.onBeforeHTTPResponse

在 HTTP 请求发送响应之前执行。此时，已将 API Action 的执行结果，转换为 HTTP 响应的实际 Body。

如果请求非来自 HTTP，此钩子不会被执行。

参数：`response`, `detail`

## 优先级指数

Middleware 的优先级指数，用于决定 Middleware 的执行顺序。优先级指数越大，则离实际运行 API Action 越近。

```ts
const middleware = useMiddleware(your_priority_index);
```

可能上面的表述不是很好理解，看下面的例子，您就会很直观的明白：

```ts
// output: // [!code focus:5]
// onBeforeExecute 1
// onBeforeExecute 2
// onAfterExecute 2
// onAfterExecute 1

// file: /src/bootstrap/middleware-your-example.ts

import { reject, useMeta, useMiddleware } from "milkio";

export default function () {
  const middleware1 = useMiddleware(1);
  middleware1.onBeforeExecute(async () => {
    console.log("onBeforeExecute 1");
  });
  middleware1.onAfterExecute(async () => {
    console.log("onAfterExecute 1");
  });

  const middleware2 = useMiddleware(2);
  middleware2.onBeforeExecute(async () => {
    console.log("onBeforeExecute 2");
  });
  middleware2.onAfterExecute(async () => {
    console.log("onAfterExecute 2");
  });
}
```
