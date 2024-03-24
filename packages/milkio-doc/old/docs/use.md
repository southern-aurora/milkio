---
title: Use
---

# Use

Use 位于 `/src/use` 目录下。您可以通过 Use 将一些常用功能提供给 API 使用。这个目录本身并没有任何"魔法"之处。

## 生命周期

每个 `use` 都是单例且惰性加载的。只有在首次使用时，它才会执行，并且仅执行一次。之后的每次调用所得到的内容都将是首次调用时返回的。

## 编写

我们约定俗成，每个功能所导出的变量名都以 `use` 开头。下面以编写一个加减计算器作为例子。

```ts
import { defineUse } from "milkio";

export const useCalculator = defineUse(async () => {
  return {
    add(a, b) {
      return a + b;
    },
    reduce(a, b) {
      return a - b;
    },
    // ...
  };
});
```

在其他位置，我们可以随时调用它。

```ts
const calculator = await useCalculator();

calculator.add(1, 3); // echo: 4
calculator.reduce(1, 3); // echo: -2
```
