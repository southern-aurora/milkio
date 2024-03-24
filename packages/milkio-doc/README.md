<I18N>

# 贡献

# Contribution

欢迎来到 milkio Docs 仓库，这里是 milkio 的文档站点的源代码。

Welcome to the milkio Docs repository, this is the source code of the milkio documentation site.

如果您想要查看 milkio 的文档，请访问 [https://southern-aurora.github.io/bao-docs/](https://southern-aurora.github.io/bao-docs/)。

If you want to view the documentation of milkio, please visit [https://southern-aurora.github.io/bao-docs/](https://southern-aurora.github.io/bao-docs/).

## 如何贡献

## How to contribute

milkio Docs 使用 [VitePress](https://vitepress.dev/) 作为文档站点的框架，使用 Markdown 作为文档的书写语言。

milkio Docs uses [VitePress](https://vitepress.dev/) as the framework for the documentation site and Markdown as the language for writing documentation.

但是它有些特殊：您可能注意到了，在文档的 `.md` 源文件中，其中每行都是按照中文、英文、中文、英文……的顺序进行书写的。包括标题也是，即便有些标题在中文语言中，是写作英文的。

But it has some special features: you may notice that in the `.md` source file of the document, each line is written in Chinese, English, Chinese, English... order. Including the title, even if some titles are written in English in Chinese.

是的，这是因为 milkio Docs 的文档是双语的，我们会在每一行的后面添加英文翻译。这么做，有助于文档的编写者同时书写多种语言的文档，而不需要为每一种语言的文档，都创建一个新的页面。我们编写的 VitePress 组件会根据行号是否是偶数，自动的将中文和英文的文档分离开来。

Yes, this is because the documentation of milkio Docs is bilingual, and we will add English translation at the end of each line. This makes it easier for the documentation writer to write documents in multiple languages at the same time without having to create a new page for each language. The VitePress component we wrote will automatically separate the Chinese and English documents according to whether the line number is even.

暂时的，milkio Docs 官方只维护中文和英文两种语言的文档。我们希望官方的文档尽量保证及时和准确，而我们的团队成员只能够阅读和书写中文（母语）与英文两种语言。我们非常欢迎社区的开发者们，建立并维护自己的其他语言的 milkio Docs 文档站点，如果您创建了一个新的站点，欢迎通过 Issue 告诉我们，我们会在官方文档中为您的站点添加链接。

For the time being, milkio Docs officially only maintains documentation in two languages: Chinese and English. We hope that the official documentation can be timely and accurate, and our team members can only read and write in Chinese (mother tongue) and English. We welcome developers in the community to build and maintain their own milkio Docs documentation sites in other languages. If you create a new site, please let us know via Issue and we will add a link to your site in the official documentation.

如果您想要为 milkio Docs 贡献文档，您可以直接在 GitHub 上编辑文档，然后提交 Pull Request。

If you want to contribute documentation to milkio Docs, you can edit the documentation directly on GitHub and then submit a Pull Request.

如果您想要在预览文档，您可以使用以下命令：

If you want to preview the documentation, you can use the following command:

```bash
co dev # 本地预览文档
```

```bash
co dev # Preview documentation locally
```

</I18N>
