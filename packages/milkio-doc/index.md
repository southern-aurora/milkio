---
title: Introduction
---

<I18N>

# 介绍

# Introduction

✨ 为人类创造的框架：以及在 Serverless 中取得卓越性能！

✨ Human-Centric Framework: And Achieving Outstanding Performance in the Serverless!

> milkio 的 1.0 版本尚未发布，可能会有 API 的变更。建议不在生产环境中使用。

> The 1.0 version of milkio has not been released yet, and there is a possibility of API changes. Not recommended for use in production.

## milkio 是如何诞生的？

## How was milkio born?

在创造 milkio (龙包，取自中国语中 [小笼包](https://en.wikipedia.org/wiki/Xiaolongbao) 的谐音) 之前，我曾经尝试了许多框架，但没有一个框架能让我在开发过程中感受到足够的舒适。

Before creating milkio (龙包, a homonym for "[小笼包](https://en.wikipedia.org/wiki/Xiaolongbao)" in Chinese), I had tried many frameworks, but I didn't find one that made me feel comfortable enough during development.

最终，我决定自己创造了一个框架。她通过许多巧妙的设计，让您在编码过程中减轻心智负担、释放大脑，并同时兼顾性能的需求。

Finally, I decided to create a framework myself. She reduces the mental burden and frees the brain through many clever designs, while also taking into account performance.

恰逢此时，Bun 框架的 1.0 版本发布了，我决定使用它来编写这个新框架，即 milkio。

At this time, Bun's `1.0` version was released. I decided to use her to write this new framework, which is milkio.

## 设计哲学

## Design philosophy

我崇尚 Go 语言之父 Rob Pike ["大道至简"](https://www.youtube.com/watch?v=rFejpH_tAHM) 的理念。

I admire Rob Pike, the father of Go, ["Simplicity is Complicated"](https://www.youtube.com/watch?v=rFejpH_tAHM).

学习曲线是我在设计 milkio 时最关注的方面。我希望 milkio 能尽可能地简单，以至于即使是没有后端经验的前端开发者，也能在短短一天内掌握 milkio 并开始编写后端代码。

The learning curve was the most important aspect I focused on when designing milkio. I hope that milkio can be as simple as possible, so that even front-end developers without backend experience can learn it within a day and start writing their backend code.

因此，我不打算使用`Decorator`或`Annotation`等语法糖，而是让开发者以最简单、最直观的方式来编写后端代码。

Therefore, I don't intend to use sugars such as `Decorator` or `Annotation`, but let developers use the simplest and most intuitive way to write backend code.

我也希望尽可能地简化概念。milkio 摒弃了诸如 DDD、DI、Router、Controller、Service、Entity、DAO 等复杂的概念，而是通过一种巧妙的方式来简化开发者的学习曲线。

I also hope to simplify the concept as much as possible. milkio abandons complex concepts such as `DDD`, `DI`, `Router`, `Controller`, `Service`, `Entity`, `DAO`, etc., but in a clever way, simplifies the developer's learning curve.

milkio 并非那种在多人协作时会变得混乱不堪的轻量框架。它具有良好的工程化支持，并在设计过程中特别注重多人协作的场景。

Milkio is not the kind of framework that, although lightweight, once multiple people collaborate, the code will become a mess. milkio has good engineering support, and scenarios where multiple people collaborate are also the focus of milkio's design.

## 为什么要使用 milkio？

## Why use milkio?

milkio 的目标是在确保高性能的同时，解决传统后端开发过程中的痛点，让您在编码时感受到舒适而非痛苦。它能解放您的大脑，减轻心智负担，让您专注于业务。以下是一些实际场景的示例，如果您觉得这些情况让您感到痛苦，不妨尝试一下 milkio。

milkio aims to ensure high performance while solving the pain points in the traditional backend development process, so that you can feel comfortable enough during the coding process. Free your brain, reduce mental burden, and allow you to focus on your business. Next, let's take a look at some actual scenarios. If you feel pain in these points, try milkio.

### 对接 API

### Connect to API

在传统的后端工程中，对接 API 阶段常常是一件令人痛苦的事情。

In traditional backend engineering, the most painful place, I think, is the API docking phase.

假设我们要编写一个简单的新增数据接口，让我们看看可能会遇到哪些麻烦：

Suppose we want to write a simple interface for adding data to see what problems we will encounter:

#### 第一个麻烦：序列化

#### The first problem: Serialization

在前端，我们会将收集到的用户填写的新增数据序列化为 JSON 格式，然后通过发送给后端的新增接口。

In the front end, we first serialize the newly added data filled in by the user into `JSON` and send it to the newly added interface of the back end.

此时我们遇到了第一个问题：`JSON` 所支持的数据类型有限。

At this point we encountered the first problem: the types supported by `JSON` are limited.

如果用户填入的数据包含 `Date`，那么我们需要手动将时间转换为字符串或时间戳，然后再在后端手动还原它们。

If the data filled in by the user contains `Date`, then we need to manually convert the time to a string or timestamp, and then manually restore them on the back end.

或许您还会用到 `bigint`、`Set`、`Map`、`URL` 等类型，对于这些类型，您需要手动进行转换操作。

Perhaps you will also use `bigint`, `Set`, `Map`, `URL`, and these types all need to be converted manually.

在 milkio 中，您无需手动处理任何类型，甚至不需要编写`JSON.stringify`，因为 milkio 会自动处理这些操作。

In milkio, you don't need to manually process any types, or even write `JSON.stringify`, milkio will automatically help you.

#### 第二个麻烦：参数校验与类型安全

#### The second problem: parameter verification and type safety

经过解决前面提到的问题，我们面临着第二个挑战：我们无法确定用户填写的数据是否符合我们的预期。

After we spent energy dealing with these problems, we encountered the second problem: we don't know if the data filled in by the user meets our expectations.

考虑到用户输入的不可靠性，我们需要面对以下问题：某些参数是可选的，某些参数是必填的；有些数字的取值范围有限，某些字符串受到最大长度限制的限制。

User input is untrustworthy. Some parameters are optional, some are required, some numbers have limited ranges, and some strings have maximum lengths.

为了确保我们最终处理的数据是可靠的，我们需要继续投入精力来验证用户的输入。这将包括进行输入校验和数据验证的工作。

We need to continue to spend energy to verify the user's input to ensure that the data finally processed is reliable.

在 milkio 中，所有的参数都具备类型安全性，这意味着我们可以确保参数的正确类型。此外，我们还可以利用泛型来限制参数的可选性，甚至可以限制数字的取值范围，或者验证一个字符串是否符合电子邮箱的格式要求。这一设计使得数据的处理更加可靠和安全。

In milkio, all parameters are type-safe. At the same time, you can also use generics to restrict whether parameters are optional, or even restrict the range of numbers, and whether a string is an email.

#### 第三个麻烦：TypeScript 类型

#### The third problem: TypeScript type

当我们完成所有的处理后，无奈地遭遇到了第三个困难：

When we have dealt with all this, we have found the third problem:

作为前端开发者，后端仅提供了一份 API 文档，而我们需要手动将它转换为 TypeScript 类型定义文件，即使后端代码可能已经使用 TypeScript 编写。

The backend gives us only a document, as a front-end developer, we need to manually convert this document into TypeScript types. Even if these backends may be written in TypeScript.

如果未来后端接口发生变更，我们面临着手动同步修改 TypeScript 类型定义的任务。这意味着后端人员需要手动通知前端开发者，并且前端开发者不得不不情愿地去手动修改这些类型定义。这一过程是相当繁琐的。

And if the backend interface changes in the future, we also need to manually synchronize and modify the TypeScript type. The backend notifies the front-end developer manually, and then the reluctant front-end developer manually modifies it.

在 milkio 中，我们可以为前端开发者构建一个 npm 包，使他们可以直接使用该包与我们进行通信。类似于下面的方式：

In milkio, you can build an npm package for the front end, so that the front end developer can directly use your package to communicate with you, just like:

```ts
const result = await client.execute("hello/world", { name: "alice" });
```

```ts
const result = await client.execute("hello/world", { name: "alice" });
```

我们的包可以进行灵活的定制，这意味着您可以在 Bun、Node.js、浏览器甚至是 React Native 和各种小程序中使用它。您还可以在包中编写自定义的业务逻辑，例如在 Token 失效后自动刷新 Token。这为您提供了更大的自由度，以适应不同平台和需求。

The package can be customized freely, which means that you can use it in Bun or NodeJs, browser, or even React Native or various Small Programs. You can even write your business logic in the package, for example, automatically refresh the token when the token expires.

#### 第四个麻烦：自动化测试

#### The fourth problem: automated testing

完成所有的步骤后，我们兴高采烈地运行代码，但却遭遇了一个报错！

After all this is done, run our code, ha! Error!

是的，通常情况下后端可能没有进行自动化测试，因此我们需要手动调试接口来验证我们的代码是否正确。这就需要我们花费更多的时间和精力来确保代码的准确性。

Yes, usually there is no automated testing on the back end, we need to manually debug the interface to verify that our code is correct.

确实，除了开发者不愿意编写测试之外，缺乏自动化测试的原因还在于，除非在框架设计的早期就注重测试，否则很难将这些操作自动化起来。测试在框架设计和开发过程中的重要性无法被忽视，它不仅可以提高代码的质量和稳定性，还可以减少手动调试的工作量和错误率。因此，在框架设计之初就重视测试是至关重要的。

And the reason for not having automated testing is that developers are unwilling to write tests, and also, unless testing is valued at the beginning of the framework design, otherwise, these operations are difficult to automate.

milkio 在设计之初就注重自动化测试，尽管非强制要求，但您可以便捷地为每个接口编写一个测试文件。

milkio considered automated testing at the beginning of the design. Although it is not necessary, you can easily write a test file for each interface.

同时，我们建议不使用诸如 Postman 等工具来调试您的 API 接口，而是通过运行您编写的测试文件来进行调试。

At the same time, we recommend not using tools such as Postman to debug your API interface, but to debug by running the test file you wrote.

### HTTP 的复杂性与路由

### The complexity of HTTP and routing

HTTP 功能很强大，同时又很复杂。

HTTP is powerful and complex.

例如，我们需要考虑接口应该采用 `GET`、`POST`、`PUT`、`PATCH` 还是 `DELETE` 方法。

For example, we need to consider whether an interface should use `GET` or `POST`, or `PUT`, `PATCH`, `DELETE`.

如果接口是 `GET`，则我们的参数无法直接序列化为 `JSON` 放在请求体中。相反，我们需要将参数转换为 URL Parameters 的形式，即将其拼接在 URL 中，例如 `foo?bar=baz&qux=fred`。但这种方式相比于使用 `JSON` 是不如人意的：URL Parameters 甚至无法区分数字和字符串等其他类型，也不支持数组和对象的深层嵌套，而且还存在最大长度限制。

If the interface is `GET`, then our parameters cannot be directly serialized into `JSON` and placed in the request body, but need to be converted into URL Parameters, that is, the form of `foo?bar=baz&qux=fred` is spliced ​​in the URL, which is worse than `JSON`: URL Parameters cannot distinguish between numbers and strings and other types, and do not support arrays, object deep nesting, and maximum length restrictions.

考虑到 HTTP 的复杂性，许多传统框架都提供了路由功能，通过编写路由规则来确定用户输入的 URL 应该映射到哪个控制器。这样可以更好地管理和处理请求。

Considering the complexity of HTTP, many traditional frameworks provide routing functionality, which determines which controller should handle the URL input by writing routing rules. This allows for better management and handling of requests.

然而，许多 HTTP 的设计原则和功能确实源自于早期，那个时代前后端的职责还未明确分离，HTML 页面是由后端动态生成的。这就导致了一些在现在前后端分离的情况下并不必要的功能，例如动态路由、路由参数、重定向等，以及各种请求方法和状态码。

However, many design principles and features of HTTP do originate from the early days when the responsibilities between front-end and back-end were not clearly separated and HTML pages were dynamically generated by the back-end. This has resulted in some unnecessary features in the context of modern front-end and back-end separation, such as dynamic routing, route parameters, redirects, as well as various request methods and status codes.

对于现在的前后端分离架构，我们确实不再需要这些功能，我们只需要提供 API 接口供前端调用即可，因此可以简化和精简我们的设计和实现。

But many of HTTP's designs come from the previous era: there was no division of labor between the front end and the back end at that time, and the HTML page was spliced ​​by the back end. So it has functions such as dynamic routing, routing parameters, redirection, various methods and status codes. For us who have already separated the front and back ends and only need to provide APIs for the front end to call, it is not necessary.

同时，路由的存在有时会带来困扰：对我而言，我经常会写好了接口，但因为忘记添加路由而导致刷新页面时无法找到对应的内容，直到最后才想起需要添加路由。这会带来一些不必要的消耗和延迟。

Moreover, the existence of routing sometimes makes us painful: I often write the interface well, but because I forgot to add the route, I can't find the page after refreshing for a long time, and finally remember to add the route.

milkio 遵循约定大于配置的原则，巧妙地隐藏了 HTTP 的复杂性。在 milkio 中，您可以自由地组织文件目录，在`/src/app`下创建名为`api.ts`的文件，其中的每个函数都会自动映射为一个接口。这样做并不意味着您失去了对 HTTP 的控制，您仍然可以自由定义接口的 HTTP 方法、状态码和返回值。这种灵活性使得您能够更加精确地掌控 API 的行为和功能。

milkio follows the principle of convention over configuration, and hides the complexity of HTTP very well. You can freely organize directories in `/src/app`, and all files named `api.ts` will automatically map each function in it to an interface. Of course, this does not mean that you lose control of HTTP, you can still freely define the HTTP method, status code, and return value of the interface.

### 更多内容？

### More?

我相信您已感受到了 milkio 的独特魅力。除了前文所述的一般描述，milkio 在许多其他细节上也与众不同。请继续阅读文档，您将会发现更多令人惊喜之处。

I believe you have already felt the difference of milkio. In addition to the above, Milkio is also in many other details. Continue reading the documentation, you will find more surprises.

</I18N>
