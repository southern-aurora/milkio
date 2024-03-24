---
title: Install
---

# 安装

使用 milkio 开始一个新的工程。

## 先决条件

### Visual Studio Extension

milkio 对您开发体验的改善，主要依赖于我们的 Visual Studio Extension，这使您可以通过点击按钮来快速运行 API 测试、启动 HTTP 服务器，以及在修改完成代码后自动执行构建和重启您的服务器。

您可以前往 [此处安装](https://marketplace.visualstudio.com/items?itemName=akirarika.milkio) 它。如果您没有 Visual Studio Code，可以前往 [此处下载](https://code.visualstudio.com/) Visual Studio Code。

### Bun

尽管 milkio 支持不同的运行时，但是在开发阶段，您仍然需要在您的计算机之上安装 Bun。因为 milkio 的构建阶段，依赖于 Bun 的实时运行 TypeScript 的能力和通过其 $ Shell 来跨平台执行命令的能力。您可以在 [此处安装](https://bun.sh/docs/installation) Bun。

考虑到 Bun 尚未完全支持 Windows 系统，如果您使用的是 Windows 系统，我建议您使用 [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) 来进行开发。

不用担心 WSL2 会影响您的开发体验，您可以安装 [WSL Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)，使您像是直接在本机中开发一样方便。

milkio 被设计为支持不同的 JavaScript 运行时，这包括 Bun、Node.js 甚至是运行在 Cloudflare Worker、Vercel (Edge)、Tencent Cloud Serverless 等这些边缘之上。

我们推荐您使用 Bun 作为您的运行时，它是一个极速的 JavaScript 运行时，与 Node.js 兼容。除非您所处的环境对运行时受限，或者您必须用一些强依赖于 Node.js 的专有代码，否则我们推荐您试试 Bun，它真的快到不可思议。

## 快速开始

想要开始使用 milkio，只需要运行下面的命令即可。

```bash
# 创建一个新的 milkio 工程
bun create southern-aurora/create-milkio milkio-app
# 进入工程目录
cd ./milkio-app
# 安装工程的依赖项
bun i
```

