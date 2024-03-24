---
title: Quick Start
---

# 快速开始

快速了解如何使用 milkio 进行开发。

## 启动 HTTP 服务器

在 [安装](/docs/install) 章节中，您已经成功安装了 milkio 和配置好了所需的环境。您使用 VSCode 打开您的 milkio 工程目录，并点击 VSCode 左下角的 `milkio` 按钮并选择 `Run HTTP Server` 来启动您的工程。

::: tip

您也可以使用快捷键 (⌘ + ⇧ + L) 或 (alt + L) 唤起此面板。

:::

如果您找不到 milkio 按钮，请确认您正确打开了 milkio 工程的根目录，我们通过检查 `package.json` 中是否存在 "milkio" 依赖项来判断是否为 milkio 工程。

如果您正在使用工作区功能，请打开任意一个位于 milkio 工程中的文件。

## 访问您的 API

在您的 `/src/apps/hello-world/say.ts` 中，是一个示例 API。您可以使用 curl 来快速访问它。

```bash
curl --location --request POST 'http://localhost:9000/hello-world/say' --header 'Content-Type: application/json' --data-raw '{"by":"milkio"}'
```

您将会得到如下的响应：

```json
{
  "success": true,
  "data": { "youSay": "hello world! (by milkio)" }
}
```

## 测试您的 API

milkio 内置了 API 测试的功能。由于开发周期紧张，您可能没有时间编写完善的单元测试。API 测试功能为您提供了一种介于编写单元测试和单纯依靠调试的中间态，较好的平衡了效率和质量。

我们推荐您边编写代码，边通过 API 测试功能来调试您的 API，在调试完成后将代码保留归档为一个测试用例。将下面的代码粘贴在您的 `/src/apps/hello-world/say.ts` 文件的末尾处来体验 API 测试功能。

```ts
// 在文件 /src/apps/hello-world/say.ts 的末尾处粘贴
export const test = defineApiTest(api, [
  {
    name: "Basic",
    handler: async (test) => {
      const result = await test.execute({
        by: "milkio",
      });

      if (!result.success) return test.reject(`The result was not success`);
      if (result.data.youSay !== "hello world! (by milkio)") return test.reject(`"youSay" is inconsistent with expectations.`);
    },
  },
]);
```

当您粘贴后，您的 VSCode 右上方应该出现了烧瓶图案的测试按钮，点击它，就可以实时执行您的测试用例。

::: tip

您也可以使用快捷键 (⌘ + ⇧ + R) 或 (alt + R) 来执行您的测试。

仅当您 VSCode 打开了包含测试用例的代码时，您才可以看到烧瓶按钮和使用快捷键。

:::
