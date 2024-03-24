---
title: Config
---

# Config

在实际开发中，我们经常需要存储各种配置信息，比如与数据库的连接信息、各种秘钥等。而配置信息的获取渠道也是多样的，可能是硬编码在代码中，可能是通过`.env.localhost`文件进行配置，也可能是通过环境变量传递。

## 编写

我们约定俗成，将配置写在 `/src/config` 目录中，此目录没有"魔法"。

我们约定俗成，配置文件应该导出一个以 `config` 开头的对象，如下所示：

```ts
// file: /src/config/example.ts

export const configExample = {
  hello: "world",
};
```

在任何其他位置，我们都可以直接导入此对象来读取配置。

## 读取环境变量

环境变量是一种常见的配置方式，然而环境变量并不具备具体的类型，所以我们所获取到的环境变量皆为字符串。

milkio 提供了若干方法，可帮助您将环境变量字符串转换为相应的类型。其中第二个参数用于指定在环境变量不存在时所采用的默认值。

```ts
// file: /src/config/example.ts

import { env } from "node:process";
import { envToBoolean, envToNumber, envToString } from "milkio";

export const configExample = {
  fooNumber: envToNumber(env.FOO, 9000),
  barBoolean: envToBoolean(env.BAR, false),
  BazString: envToString(env.BAZ, "hello-world"),
};
```

## 指定模式

Bun 内置了[环境变量](https://bun.sh/docs/runtime/env#setting-environment-variables)功能。在默认情况下，Bun 会读取 `.env` 文件。假设您在不同的环境中使用不同的环境变量，例如，在本地开发时使用一组环境变量，而在部署时使用另一组，您可以通过指定模式来实现在部署时使用不同的文件名。

例如，如果您想要使用 `.env.production` 文件，您可以通过将环境变量 `MODE` 的值设置为 `.env.production` 来实现。

此外，您还可以在执行命令时指定 `--mode=.env.production` 来实现相同的效果。

注意：如果您使用 [Prisma](https://www.prisma.io/)，由于 Prisma 不支持更改 `.env` 文件的名称，因此您可能需要额外为 Prisma 设置环境变量。

## 读取 .env 文件

在 `v1.0.12` 之后版本的 Bun，已经实现了[自动读取环境变量的功能](https://bun.sh/docs/runtime/env#manually-specifying-env-files)。

如果您正在使用旧版本的 Bun，同时又希望自动读取项目根目录下的 `.env` 文件，并将其注入到 `process.env` 中，您可以在 `/index.ts` 的顶部添加以下代码：

```ts
import "milkio/load-env-file";
```

在 milkio 的 `.env` 文件中，不会对内容进行任何形式的转义，因此，您始终不需要为 `.env` 文件中的内容添加引号。
