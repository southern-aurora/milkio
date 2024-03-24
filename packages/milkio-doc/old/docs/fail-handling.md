---
title: Fail Handling
---

# Fail Handling

在我们编写后端应用的过程中，通常会遇到两种失败情况。一种是由于意外错误引起的失败，例如网络问题或堆栈溢出。另一种是与业务相关的失败，比如用户不存在或订单已支付。

在 milkio 中，无论哪种失败情况，我们都应该通过抛出异常的方式，来中断当前请求，而不是通过 `return` 来阻止后续代码的执行。

而对于后者，即业务相关的失败情况，我们可以使用 `reject` 方法来主动抛出异常，以向客户端提供明确的失败响应。例如，当数据不存在时：

```ts
throw reject("NOT_FOUND", undefined);
```

通过这种方式，我们能够更精准地告知客户端请求失败的原因，从而使系统更加健壮和可靠。对于调用者，将得到这样的响应：

```json
{
  "success": false,
  "fail": {
    "code": "NOT_FOUND",
    "message": "Not Found",
    "data": null
  }
}
```

这样，调用者可以通过 `code.success` 简单地了解本次请求是否成功，并通过 `fail.code` 判断失败的具体类型。这种设计方式有助于提供清晰的请求状态信息，以便调用者能够更好地处理和响应失败情况。

## Fail Code

在 `/src/fail-code.ts` 中，我们定义了所有可选的失败码。

其中，每个键都代表一个特定的失败码，对应的值是一个方法。这个方法需要返回一个字符串，用于说明失败的具体原因。通过这种设计，我们可以清晰地组织和管理不同的失败码，并为每个失败码提供详细的描述功能。

```ts
// file: /src/fail-code.ts

import type { MilkioFailCode } from "milkio";

export const failCode = {
  "NETWORK_ERROR": () => "Network Error",
  "INTERNAL_SERVER_ERROR": () => "Internal Server Error",
  "NOT_FOUND": () => "Not Found",
  "NOT_ALLOW_METHOD": () => "Not Allow Method",
  "TYPE_SAFE_ERROR": (p: { path: string; expected: string; value: string }) =>
    `Parameter Error: The current value is '${p.value}', which does not meet '${p.expected}' requirements`,
  "BUSINESS_FAIL": (message: string) => `${message}`,
  // You can add your own mistakes here
  // ...
} satisfies MilkioFailCode;
```

## 参数

在调用 `reject` 方法时，您可以通过传入的参数来改变最终向客户端响应的消息信息。这样，您可以根据需要灵活地定制错误消息。

```ts
throw reject("access-exceeded", { path: "/foo/bar", counter: 64 });
```

需要注意的是，该方法**只允许**传递一个参数。如果您有多个参数需要返回，请尝试像上面的例子一样，通过返回一个对象来实现。这样，您可以将多个参数封装在一个对象中，以便进行传递和处理。

```ts
// file: /src/fail-code.ts
export const failCode = {
  "access-exceeded": (p: { path: string; counter: number }) =>
    `You are visiting too frequently. This path "${p.path}" is only allowed to be accessed ${p.counter} times.`,
} satisfies MilkioFailCode;
```

同时，这些参数也会被返回给客户端，以便客户端能够获取并进一步处理它们。最终，客户端会收到类似下方的响应，包括了拼接好的 `message` 和 `data`：

```ts
{
  "success": false,
  "fail": {
    "code": "access-exceeded",
    "message": "You are visiting too frequently. This path \"/foo/bar\" is only allowed to be accessed 64 times.",
    "data": { path: "/foo/bar", counter: 64 }
  }
}
```
