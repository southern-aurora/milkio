---
title: Context
---

# Context

context 是一个包含当前请求上下文信息的对象。

此外，context 也可以看作是一个"全局变量"。您可以编写一个[中间件](/old/docs/middleware.md)，在其中读取用户信息，并将其附加到 `context.user` 中。在 API 中，您可以直接通过 `context.user` 来获取当前用户的信息。

## 编写

context 的类型定义位于 `/src/context.ts` 文件中，您可以像下面这样自由扩展它。

但是，请注意，扩展 context 的类型并不意味着数据实际上存在于 context 中。除了 context 的默认属性之外，您需要自己编写代码将数据附加到 context 上。

```ts
// file: /src/context.ts
import type { MilkioContext } from "milkio";

export type Context = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  // ...
} & MilkioContext;
```

## 细节

### 必要属性

在所有情况下，context 都包含以下属性：

- `context.executeId`：当前请求的唯一标识符。

- `context.headers`：当前请求的头部信息。

- `context.path`: 当前请求的路径。(不包括前缀、URL Paramters)

### 非必要属性

除此之外，还有 `context.detail` 属性。它是一个对象，其中包含了一些在当前环境中可能不存在的信息。

虽然 API 通常在 HTTP 环境中运行，但它被设计为尽可能通用的方式。它也可以在其他环境中运行，例如通过命令行、作为微服务的一部分，甚至由其他 JavaScript 脚本调用等。

例如，当 API 在 HTTP 环境中运行时，`context.detail` 包含以下属性：

- `context.detail.request`：当前请求对象。

- `context.detail.response`：当前响应对象。

- `context.detail.ip`：当前请求的 ip 地址。

- `context.detail.fullurl`：当前请求的真实 URL 对象。
