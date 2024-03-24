# Router 路由

路由，用于根据路径决定所具体执行的 API。

在 [Install](/old/docs/install.md) 章节中，您可能已经体验到了路由的"魔法"。在 milkio 中，您几乎不需要亲自编写路由的代码。milkio 会自动查找位于/src/app 目录下名为 api.ts 的文件，并为您自动生成路由。

假设您编写了一个[API](/old/docs/api.md)文件，在该文件中包含一个名为`helloWorld`的方法，其路径为：

```
/src/app/foo/bar/api.ts
```

此时，只需访问 `http://localhost:9000/foo/bar/hello-world`，即可执行该 API。

## 补充路由逻辑

在几乎所有情况下，您应该使用 milkio 为您自动生成的路由。只有在特殊情况下，您才需要自定义您的路由。此时，您可以编辑 `/src/router.ts` 文件。其内容类似如下这样：

```ts
import type apiValidator from "../generated/products/api-validator";

export const routerHandler = async (path: string, fullurl: URL): Promise<false | keyof (typeof apiValidator)["params"]> => {
  // ...
  return false;
};
```

您可以编辑此方法的内容，以补充 milkio 自动生成的路由之外的期望路由匹配逻辑。您可以通过`return`返回一个已存在的 API 地址，它将被调用。如果您返回`false`，将返回一个 "NOT_FOUND" 的失败信息。

同时，此方法接受两个参数：`path` 和 `fullurl`。`path` 表示请求路径的后缀（删除了域名和 [忽略的路径层级](/old/docs/config-framework.md#ignorepathlevel)），出于性能考虑，如果 URL 中包含参数，这些参数不会被删除，仍然保留在 `path` 中，例如 `foo/bar?hello=world`。`fullurl` 是完整的 URL 对象，[忽略的路径层级](/old/docs/config-framework.md#ignorepathlevel) 不会被删除。

请注意，此方法的优先级永远低于 milkio 自动生成的路由，这意味着您无法禁止某个 API 的访问。这样设计的目的是为了确保您尽量只在此处编写路由匹配规则。如果您需要对某个 API 进行授权才能访问，请使用 [中间件](/old/docs/middleware.md) 功能。如果您需要禁止直接调用某个 API 本身，而通过此处编写的匹配规则仍然可以间接访问该 API，请在 API 本身的代码中编写判断逻辑，并在适当的位置使其失败并返回 "NOT_FOUND"。

```ts
throw reject("NOT_FOUND", undefined);
```
