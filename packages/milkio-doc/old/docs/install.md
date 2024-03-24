---
title: Install
---

# 安装

使用 milkio 开始一个新的工程。

## 先决条件

### Bun

首先，您需要安装 Bun。Bun 是一个极速的 JavaScript 运行时，与 Node.js 兼容。您可以在[此处](https://bun.sh/docs/installation)找到安装方法。

考虑到 Bun 尚未完全支持 Windows 系统，如果您使用的是 Windows 系统，我建议您使用[WSL2](https://learn.microsoft.com/en-us/windows/wsl/install)来进行开发。

您可以通过安装 Visual Studio Code 的[WSL 插件](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)，直接打开 WSL2 中的目录，并在其中进行开发。

## 快速开始

想要开始使用 milkio，只需要运行下面的命令即可。

```bash
bun create southern-aurora/create-milkio milkio
```

在你的 milkio 创建成功后进入目录，执行 `co i` 命令以安装所需的依赖项。安装完成后，您可以运行 `co dev` 命令启动开发服务器。

一旦开发服务器成功启动，您便可以访问服务了，默认端口为 `9000`。可以尝试使用下面的命令来快速访问默认生成的示例接口：

```bash
curl --location --request POST 'http://localhost:9000/hello-world/say' --header 'Content-Type: application/json' --data-raw '{"by":"milkio"}'
```

您将会得到如下的响应：

```json
{
  "success": true,
  "data": {
    "youSay": "hello world! (by milkio)"
  }
}
```

刚刚访问的接口所对应的文件位于 `/src/app/hello-world/api.ts`，您可以随意编辑它。
