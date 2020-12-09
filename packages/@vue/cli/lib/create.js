const fs = require('fs-extra')
const path = require('path')
// 命令行交互
const inquirer = require('inquirer')
const Creator = require('./Creator')
const { clearConsole } = require('./util/clearConsole')
const { getPromptModules } = require('./util/createTools')
const { chalk, error, stopSpinner, exit } = require('@vue/cli-shared-utils')
// npm 包名校验
const validateProjectName = require('validate-npm-package-name')

// create 方法(创建项目)
async function create (projectName, options) {
  // 指定了代理则通过代理下载资源
  if (options.proxy) {
    process.env.HTTP_PROXY = options.proxy
  }

  // 指定了文件路径则路径为指定路径
  const cwd = options.cwd || process.cwd()
  // 是否在当前文件夹中生成项目(即是否已存在项目文件夹)
  const inCurrent = projectName === '.'
  // 项目名称 = 在当前文件夹中生成项目 ? 返回当前文件夹名称 : 返回命令行读入的项目名称
  const name = inCurrent ? path.relative('../', cwd) : projectName
  // 项目目标文件夹
  const targetDir = path.resolve(cwd, projectName || '.')

  // 校验项目名称是否符合规范
  const result = validateProjectName(name)
  // 不符合规范终止执行
  if (!result.validForNewPackages) {
    console.error(chalk.red(`Invalid project name: "${name}"`))
    result.errors && result.errors.forEach(err => {
      console.error(chalk.red.dim('Error: ' + err))
    })
    result.warnings && result.warnings.forEach(warn => {
      console.error(chalk.red.dim('Warning: ' + warn))
    })
    exit(1)
  }

  // 项目目标文件夹已存在 && 未传入合并参数
  if (fs.existsSync(targetDir) && !options.merge) {
    // 传入强制覆盖选项 删除项目目标文件夹
    if (options.force) {
      await fs.remove(targetDir)
    } else {
      await clearConsole()
      // 判断是否在当前文件夹下创建项目
      if (inCurrent) {
        const { ok } = await inquirer.prompt([
          {
            name: 'ok',
            type: 'confirm',
            message: `Generate project in current directory?`
          }
        ])
        if (!ok) {
          return
        }
      } else {
        // 项目目标文件夹已存在 选择项目创建的方式 1.覆盖 2.合并 3.取消创建
        const { action } = await inquirer.prompt([
          {
            name: 'action',
            type: 'list',
            message: `Target directory ${chalk.cyan(targetDir)} already exists. Pick an action:`,
            choices: [
              { name: 'Overwrite', value: 'overwrite' },
              { name: 'Merge', value: 'merge' },
              { name: 'Cancel', value: false }
            ]
          }
        ])
        if (!action) {
          return
        } else if (action === 'overwrite') {
          console.log(`\nRemoving ${chalk.cyan(targetDir)}...`)
          await fs.remove(targetDir)
        }
      }
    }
  }

  // 实例化 Creator 类
  const creator = new Creator(name, targetDir, getPromptModules())
  await creator.create(options)
}

module.exports = (...args) => {
  return create(...args).catch(err => {
    stopSpinner(false) // do not persist
    error(err)
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1)
    }
  })
}
