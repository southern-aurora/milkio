---
title: Generation Phase
---

# 生成阶段

milkio 在正式启动前，会进入生成阶段。

生成阶段是完成您创建一个文件后，无需编写路由代码就可以直接访问的"魔法"的来源。当您创建了新的 [API 文件](/old/docs/api.md)，或修改了 [API 文件](/old/docs/api.md) 的内容时，milkio 会自动重新运行，并重新生成。

而当您修改了之外的代码逻辑，例如 [Use](/old/docs/use.md) 时，milkio 会通过热更新的方式，使您不需要再等待重新运行，即可直接看到新的代码效果。

## 细节

总而言之，生成阶段会完成以下几件事：

- 递归扫描您的 `/src/app` 目录，并将您的 API 的路由，生成在 `/generated/api-schema.ts` 文件中。每次有新的请求时，会尝试从这个文件中匹配所对应的 API 并执行。

- 单层扫描您的 `/src/bootstrap` 目录，并将您的 Bootstrap 的概要，生成在 `/generated/bootstrap-schema.ts` 文件中。每次 milkio 启动时，会尝试执行您所有的 Bootstrap 中的代码。

- 将您所有的的 API 的所有的 params 的校验代码，生成在 `/generated/products/api-validator.ts` 文件中。由它来保障，您的 API 参数的类型安全与数据校验。
