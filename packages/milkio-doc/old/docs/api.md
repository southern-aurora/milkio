---
title: API
---

# API

API 是实际业务逻辑的入口。

尽管 API 通常运行在 HTTP 环境中，但它被设计为尽可能通用的方式。它也可以通过其他方式运行，比如通过命令行执行，或者作为其他微服务的调用，甚至可以由其他 JavaScript 脚本调用等等。

## 编写

`/src/app` 是一个"魔法"目录，其下的所有名为 `api.ts` 的文件将自动加载为[路由](/old/docs/router.md)。您可以根据需要在这里创建任意的目录结构，以组织您的 API。

除了名为 `api.ts` 的文件外，其他文件都属于私有文件，不会被自动加载。您可以在 `api.ts` 中使用 `import` 来引入其他文件，以实现代码的拆分和组织。

```ts
import { defineApi, reject } from "milkio";

export const foo = defineApi({
  meta: {
    //
  },
  action(
    params: {
      by?: string;
    },
    context
  ) {
    const message = "hello world, by: " + params.by;

    return {
      say: message,
    };
  },
});
```

## meta

`meta` 是 API 的元数据。详细信息请参阅[元数据](/old/docs/meta.md)章节。

## action

`action` 是 API 所执行的具体逻辑，它是一个函数，接收 `data` 和 `context` 两个参数。

### params 参数

`params` 参数是该 API 可接受的参数。当有请求访问该 API 时，milkio 会自动对请求的数据格式进行校验。如果校验失败，milkio 将返回错误码 `TYPE_SAFE_ERROR` 表示请求失败。

您还可以利用 [Typia](https://typia.io/docs/validators/tags/) 实现更为复杂的校验功能。

```ts
import { defineApi, reject } from "milkio";

export const foo = defineApi({
  meta: {
    //
  },
  action(
    // check your params // [!code focus:6]
    params: {
      id: string & typia.tags.Format<"uuid">;
      email: string & typia.tags.Format<"email">;
      age: number & typia.tags.Type<"uint32"> & typia.tags.ExclusiveMinimum<19> & typia.tags.Maximum<100>;
    },
    context
  ) {
    const message = "hello world, your email: " + params.email;

    return {
      say: message,
    };
  },
});
```

### context 参数

`context` 参数是一个对象，其中包含了当前请求的上下文信息。

有关更多关于 `context` 的详细信息，您可以参阅 [Context](/old/docs/context.md) 章节。
