# Vue CLI 源码解读

## 前言

最近在工作中涉及到脚手架的搭建，通常情况下是对 `Vue CLI` 做深度定制。

由于我之前基本没接触过 `Vue CLI` 相关的代码，为了提高工作效率，又快又好地完成需求，决定阅读一下源码，深入学习一下相关内容。

源码解读相关的内容，我都写在了代码注释当中，放在了 GitHub：[wjq990112/Learning-Vue-CLI](https://github.com/wjq990112/Learning-Vue-CLI)，欢迎阅读，求个 `Star`。

> **如果观众老爷们觉得这篇文章对你有帮助，还求别吝啬手里的点赞，给我的文章点一个大拇指~**
>
> 关注 **「Hello FE」** 获取更多实用教程~

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

### `vue.js`

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

### `create.js`

```js
const fs = require("fs-extra");
const path = require("path");
// 命令行交互
const inquirer = require("inquirer");
const Creator = require("./Creator");
const { clearConsole } = require("./util/clearConsole");
const { getPromptModules } = require("./util/createTools");
const { chalk, error, stopSpinner, exit } = require("@vue/cli-shared-utils");
// npm 包名校验
const validateProjectName = require("validate-npm-package-name");

// create 方法(创建项目)
async function create(projectName, options) {
  // 指定了代理则通过代理下载资源
  if (options.proxy) {
    process.env.HTTP_PROXY = options.proxy;
  }

  // 指定了文件路径则路径为指定路径
  const cwd = options.cwd || process.cwd();
  // 是否在当前文件夹中生成项目(即是否已存在项目文件夹)
  const inCurrent = projectName === ".";
  // 项目名称 = 在当前文件夹中生成项目 ? 返回当前文件夹名称 : 返回命令行读入的项目名称
  const name = inCurrent ? path.relative("../", cwd) : projectName;
  // 项目目标文件夹
  const targetDir = path.resolve(cwd, projectName || ".");

  // 校验项目名称是否符合规范
  const result = validateProjectName(name);
  // 不符合规范终止执行
  if (!result.validForNewPackages) {
    console.error(chalk.red(`Invalid project name: "${name}"`));
    result.errors &&
      result.errors.forEach((err) => {
        console.error(chalk.red.dim("Error: " + err));
      });
    result.warnings &&
      result.warnings.forEach((warn) => {
        console.error(chalk.red.dim("Warning: " + warn));
      });
    exit(1);
  }

  // 项目目标文件夹已存在 && 未传入合并参数
  if (fs.existsSync(targetDir) && !options.merge) {
    // 传入强制覆盖选项 删除项目目标文件夹
    if (options.force) {
      await fs.remove(targetDir);
    } else {
      await clearConsole();
      // 判断是否在当前文件夹下创建项目
      if (inCurrent) {
        const { ok } = await inquirer.prompt([
          {
            name: "ok",
            type: "confirm",
            message: `Generate project in current directory?`,
          },
        ]);
        if (!ok) {
          return;
        }
      } else {
        // 项目目标文件夹已存在 选择项目创建的方式 1.覆盖 2.合并 3.取消创建
        const { action } = await inquirer.prompt([
          {
            name: "action",
            type: "list",
            message: `Target directory ${chalk.cyan(
              targetDir
            )} already exists. Pick an action:`,
            choices: [
              { name: "Overwrite", value: "overwrite" },
              { name: "Merge", value: "merge" },
              { name: "Cancel", value: false },
            ],
          },
        ]);
        if (!action) {
          return;
        } else if (action === "overwrite") {
          console.log(`\nRemoving ${chalk.cyan(targetDir)}...`);
          await fs.remove(targetDir);
        }
      }
    }
  }

  // 实例化 Creator 类
  const creator = new Creator(name, targetDir, getPromptModules());
  await creator.create(options);
}

module.exports = (...args) => {
  return create(...args).catch((err) => {
    stopSpinner(false); // do not persist
    error(err);
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1);
    }
  });
};
```

`create` 方法的最后实例化了一个 `Creator` 类，所以我们现在要到深入到这个类中，去看看创建项目的时候具体会执行哪些操作。

### `Creator.js`

依赖引入的部分，大概看一下，先看外部的依赖，主要是 `inquirer`、`events` 和 `lodash` 这几个库，其他的基本都是本地文件。

```js
// 命令行交互
const inquirer = require("inquirer");
// 事件分发(发布-订阅模式)
const EventEmitter = require("events");
// 深拷贝
const cloneDeep = require("lodash.clonedeep");
```

依赖引入部分下面定义了一个常量，用于标记本次 `create` 操作是否为手动选择插件的模式。

```js
// 三种默认模板创建方式 1.Vue2 Default 2.Vue3 Default 3.Manually
// 判断是否为 3.Manually 手动选择 features 的模式
const isManualMode = (answers) => answers.preset === "__manual__";
```

然后来看 `Creator` 类的构造函数，这个部分会比较复杂，得一点一点看。

```js
/**
 * @function Creator构造函数
 * @param {string} name 项目名称
 * @param {string} context 项目目标文件夹
 * @param {string[]} promptModules features 可选项(插件机制核心之一)
 */
constructor (name, context, promptModules) {
  super()

  // 项目名称
  this.name = name
  // 项目目标文件夹
  this.context = process.env.VUE_CLI_CONTEXT = context
  // 获取预设配置及文字提示
  const { presetPrompt, featurePrompt } = this.resolveIntroPrompts()

  this.presetPrompt = presetPrompt
  this.featurePrompt = featurePrompt
  // 获取手动配置及文字提示(选择 babel/eslint 配置存放位置 选择是否保存本次手动配置 选择包管理工具 yarn/pnpm/npm)
  this.outroPrompts = this.resolveOutroPrompts()
  // 已被注入的插件列表
  this.injectedPrompts = []
  // 插件注入后的回调(插件注入后可能选择不同的方案 例如 unit test 可选择 mocha + chai/jest 需要执行回调进行处理)
  this.promptCompleteCbs = []
  // TODO: Read and understand this part.
  this.afterInvokeCbs = []
  this.afterAnyInvokeCbs = []

  this.run = this.run.bind(this)

  // 为 creator 实例提供通用的插件注入及调用接口
  const promptAPI = new PromptModuleAPI(this)
  // 遍历插件列表 为其提供调用接口(插件机制核心之一)
  promptModules.forEach(m => m(promptAPI))
}
```
