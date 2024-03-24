---
title: Config Framework
---

# Config Framework

在[配置](/old/docs/config.md)章节中，我们介绍了如何编写配置文件。实际上，milkio 本身也提供了一些内置配置项。您可以通过导入 `configMilkio` 来读取这些配置项。

```ts
import { configMilkio } from "milkio";

console.log(configMilkio.port);
```

## port

类型: `number`

环境变量: `PORT`

默认值: `9000`

启动 HTTP 服务所使用的端口。

## debug

类型: `boolean`

环境变量: `DEBUG`

默认值: `false`

是否启用调试模式。开发时建议开启，生产环境请务必关闭。

## ignorePathLevel

类型: `number`

环境变量: `IGNORE_PATH_LEVEL`

默认值: `0`

忽略路径的层级数。在使用一些 Serverless 服务来部署您的应用时，可能会有一些额外的路径，导致您本地开发时，某个 API 可能是：

```
http://localhost/your-path/your-action
```

而在部署之后，可能路径就变为了下面这样：

```
https://a-serverless-service.com/your-id/your-project-name/production/your-path/your-action
```

这时候，您就可以通过在 Serverless 服务中，设置 `ignorePathLevel` 来忽略这些额外的路径，使您的应用正常工作。

## corsAllowMethods

类型: `string`

环境变量: `CORS_ALLOW_METHODS`

默认值: `*`

在浏览器中，浏览器可能会向您的应用发送一些预检请求，您可以通过设置此值来避免跨域错误。参见 [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/old/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)。

## corsAllowHeaders

类型: `string`

环境变量: `CORS_ALLOW_HEADERS`

默认值: `*`

在浏览器中，浏览器可能会向您的应用发送一些预检请求，您可以通过设置此值来避免跨域错误。参见 [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/old/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)。

## corsAllowOrigin

类型: `string`

环境变量: `CORS_ALLOW_ORIGIN`

默认值: `*`

在浏览器中，浏览器可能会向您的应用发送一些预检请求，您可以通过设置此值来避免跨域错误。参见 [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/old/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)。

## cacheType

类型: `string`

环境变量: `CACHE_TYPE`

默认值: `redis`

缓存类型。目前只支持 `redis` 类型。

## redisUrl

类型: `string`

环境变量: `REDIS_URL`

默认值: `redis://:123456@your-not-redis-url:6379`

Redis 连接地址。
