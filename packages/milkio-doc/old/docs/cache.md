---
title: Cache
---

# Cache

缓存可以临时存储某些数据，并在适当的时候自动失效。巧妙地运用缓存能够显著提升您的应用性能。

## 配置

目前，milkio 提供支持使用 Redis 作为数据缓存的功能。您可以通过在环境变量或者`/.env`文件中添加`REDIS_URL`来指定 milkio 要使用的 Redis 服务。

## 编写

您可以使用 `defineCache` 方法来定义一个缓存。比如，您可以缓存一个布尔值，用于表示是否开启了维护模式。

```ts
import { defineCache } from "milkio";

const cache = defineCache<boolean>("enable-maintenance-mode");

await cache.set(true, 100);
console.log(await cache.get());
// echo: true
```

## 命名空间缓存

有时候，我们需要存储集合数据的场景，比如为每个用户的个人信息创建缓存。这样可以方便地以用户为单位进行数据缓存，提高读取效率。

```ts
import { defineNamespaceCache } from "milkio";

const cache = defineNamespaceCache<UserInfo>("user-info");
type UserInfo = {
  age: number;
  email: string;
};

await cache.set("alice", { age: 18, email: "alice@gmail.com" }, 100);
console.log(await cache.get("alice"));
// echo: { age: 18, email: 'alice@gmail.com' }

await cache.del();
console.log(await cache.get());
// echo: undefined
```
