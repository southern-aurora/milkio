---
title: Logger
---

# Logger

日志在应用线上问题排查中扮演着重要的角色。虽然我们可以使用 `console` 打印日志，但我们的日志需求可能更加多样化。例如，在本地调试时，我们希望将日志直接输出在终端中，以方便我们查看；而在生产环境中，为了节省性能，我们不希望将日志直接打印在终端，而是将其保存到文件中，或者发送到专业的日志系统中。

milkio 提供了一个强大的日志记录器，可以满足您的需求。milkio 本身的日志也是通过这个日志记录器写入的。

## 使用

我们可以随时使用`useLogger`方法创建一个日志记录器，需要提供一个`executeId`参数。

```ts
const logger = useLogger(context.executeId);
```

我们可以使用该日志记录器写入不同级别的日志。与`console`类似，它的用法几乎一样。唯一的区别是，日志的第一个参数必须是一个描述日志信息的字符串，也称为"日志描述"。从第二个参数开始，您可以传递任意类型的参数，它们被称为"日志参数"。

```ts
logger.debug("Your Message", { hello: "world" });
```

### executeId

使用日志记录器时，您需要传入`executeId`参数。该参数来自您的 API 的`context`对象，并且是唯一的。对于每个请求，`executeId`都是不同的。milkio 的日志记录器通过它们来区分不同的请求。

在高并发的场景中，不同的用户会在同一时间向您发送请求。这意味着不同用户请求的日志可能会交错出现。当出现问题时，我们往往无法确定一条日志属于哪个请求，这给我们在生产环境中的故障排查带来了很大困扰。因此，我们强烈建议您传入`executeId`。但在某些特殊情况下，您可能无法获取到`executeId`。这种情况下，您可以传入`global`，日志记录器将向所有并发请求同时写入该日志。

```ts
const logger = useLogger("global");
```

## 完整例子

```ts{8-12}
// file: /src/app/api.ts

import { useLogger, defineApi } from "milkio";

export const helloWorld = defineApi({
  meta: {},
  action(params: {}, context) {
    const logger = useLogger(context.executeId);
    logger.debug("Hello world!");
    logger.log("Hello world!");
    logger.warn("Hello world!");
    logger.error("Hello world!");
  },
});
```

## 日志标签

除了打印日志之外，您还可以为一个请求打上日志标签。通过 `loggerPushTags` 方法，可以为某个请求添加若干自定义标签。

```ts
import { loggerPushTags } from "milkio";

loggerPushTags(executeId, { userInfo: ..., permissions: ... });
```

在以往的日志中，我们常常直接将请求的用户信息、权限等数据输出到日志中，这样会掩盖了关键信息。合理地使用标签有助于使您的日志更加清晰易读，只保留关键信息。

## 原有日志标签

milkio 会为您的每个请求打上多个日志标签。通常，以下标签会被使用：

|               Key | Value                           |
| ----------------: | ------------------------------- |
|            `from` | 来源 "http-server" \| "execute" |
|       `executeId` | 执行此请求的唯一 id             |
|          `method` | 请求方式                        |
|              `ip` | 请求发起者的 IP 地址            |
|             `url` | 请求地址                        |
|          `params` | 请求的参数 (Object)             |
|            `body` | 最终响应的数据 (Raw String)     |
|          `timein` | 接收到请求的时间 (Number)       |
|         `timeout` | 请求响应的时间 (Number)         |
|  `requestHeaders` | 请求头 (Object)                 |
| `responseHeaders` | 响应头 (Object)                 |

注意，您不能假设这些日志标签始终存在。例如，在某些极端情况下，请求被直接终止时，可能不会添加`body`、`params`、`responseHeaders`等内容。此外，当通过编写 `execute` 代码而不是发送 HTTP 请求的方式进行调用时，像 `ip` 等数据将不存在，并且可能会获得其他一些值。

## 自定义日志记录器

您可以根据需要自由修改 `/src/logger.ts` 来自定义日志记录器的行为。默认情况下，根据代码编写，您的日志记录器会直接在控制台中显示日志。

```ts
// file: /src/logger.ts

import { type LoggerOptions, type ExecuteId } from "milkio";

export const loggerOptions = {
  onSubmit: (tags, logs) => {
    console.log(`🥛 milkio Responsed! by :`, tags.url);
    console.log(JSON.stringify(tags));
  },
  onInsert: (options) => {
    console[options.loggerLevel](options.description, ...options.params);

    return true;
  },
} satisfies LoggerOptions;
```

### onSubmit

`onSubmit` 方法会在一个请求即将结束时被调用，它可以是一个异步方法或返回一个`Promise`。您可以在此阶段将与该请求相关的日志持久化保存。

在这个方法中，您不仅可以获取该请求中记录的所有历史日志，还可以获取该请求上打过的所有标签。

### onInsert

`onInsert` 方法是用于在每次记录日志时被调用的，它必须是一个同步方法。您需要返回 `true` 或 `false`。当您返回 `false` 时，该日志将被丢弃。举个例子，您可以通过返回 `false` 来实现在生产环境中不记录 `debug` 级别日志的功能。

请不要在此方法中进行日志的持久化保存（例如将日志写入文件或发送到各种日志系统中）。由于每次请求都可能需要写入大量日志，这将导致频繁的 IO 操作，从而降低性能。
