# Vue CLI 源码解读

## 前言

最近在工作中涉及到脚手架的搭建，通常情况下是对 `Vue CLI` 做深度定制。

由于我之前基本没接触过 `Vue CLI` 相关的代码，为了提高工作效率，又快又好地完成需求，决定阅读一下源码，深入学习一下相关内容。

源码解读相关的内容，我都写在了代码注释当中，放在了 GitHub：[wjq990112/Learning-Vue-CLI](https://github.com/wjq990112/Learning-Vue-CLI)，欢迎阅读，求个 `Star`。

## 开始之前

首先个人认为是对原理不了解才会去阅读源码，而不是对原理有了一定了解还去花时间阅读，这样阅读源码带来的收益就不够高了。

阅读源码最重要的还是梳理好思路，有目的性地阅读，而不是盲目地一行一行阅读。

`Vue CLI` 是命令行工具，自然会有各种各样的命令，要了解这其中的原理，体会作者的思想，肯定是在最常用的几条命令中囊括的最多，那么我们应该重点阅读这其中最常用的几条命令相关的源码。

关于 `Vue CLI`，我们或许应该更多地了解项目创建的过程、插件机制、打包编译配置注入机制等等。

阅读源码的同时还应该尝试运行调试，在源码当中添加一些代码，查看自己插入的代码是如何被运行的。

首先声明，正是因为不懂，才会选择去阅读源码的，所以文中可能会存在一些错误，还请大佬们在评论区及时指出。

还有一些前置的知识可能需要去了解，主要是一些跟控制台输入输出以及交互的包，我也在代码注释中标记了出来。

## 目录结构

太长了，详情请看这里：[FILETREE.md](https://github.com/wjq990112/Learning-Vue-CLI/FILETREE.md)。

最主要最显眼的部分是 `packages/@vue` 文件夹，这个部分就是 `Vue CLI` 的核心源代码了。

## 入口

`packages/@vue/cli/bin/vue.js`，这文件是整个 `CLI` 的入口文件，其中包括了所有的命令，对对应的命令进行分发。

## Create

当我们执行 `vue create <project-name>` 的时候，到底发生了什么？

想了解这一点就必须从入口出发，找到对这条命令进行分发的代码：

```js
// create 命令(创建项目)
program
  .command("create <app-name>")
  .description("create a new project powered by vue-cli-service")
  .option(
    "-p, --preset <presetName>",
    "Skip prompts and use saved or remote preset"
  )
  .option("-d, --default", "Skip prompts and use default preset")
  .option(
    "-i, --inlinePreset <json>",
    "Skip prompts and use inline JSON string as preset"
  )
  .option(
    "-m, --packageManager <command>",
    "Use specified npm client when installing dependencies"
  )
  .option(
    "-r, --registry <url>",
    "Use specified npm registry when installing dependencies (only for npm)"
  )
  .option(
    "-g, --git [message]",
    "Force git initialization with initial commit message"
  )
  .option("-n, --no-git", "Skip git initialization")
  .option("-f, --force", "Overwrite target directory if it exists")
  .option("--merge", "Merge target directory if it exists")
  .option("-c, --clone", "Use git clone when fetching remote preset")
  .option("-x, --proxy <proxyUrl>", "Use specified proxy when creating project")
  .option("-b, --bare", "Scaffold project without beginner instructions")
  .option("--skipGetStarted", 'Skip displaying "Get started" instructions')
  .action((name, cmd) => {
    console.log(name);
    const options = cleanArgs(cmd);

    // 命令行参数超过一个时输出提示
    if (minimist(process.argv.slice(3))._.length > 1) {
      console.log(
        chalk.yellow(
          "\n Info: You provided more than one argument. The first one will be used as the app's name, the rest are ignored."
        )
      );
    }
    // 默认初始化 git
    // --git makes commander to default git to true
    if (process.argv.includes("-g") || process.argv.includes("--git")) {
      options.forceGit = true;
    }
    // 查看默认/用户自定义选项
    console.log(chalk.yellow("create options: "), options);
    // 调用 ../lib/create 创建项目
    require("../lib/create")(name, options);
  });
```

当我们执行 `vue create <project-name>` 这条命令之后，会对命令行输入的参数进行处理，去除多余的参数，然后将`项目名`和`参数`传入从 `create.js` 这个文件引入的一个函数。
