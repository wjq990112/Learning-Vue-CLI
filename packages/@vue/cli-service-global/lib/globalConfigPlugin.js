const path = require('path')
const resolve = require('resolve')
const { findExisting } = require('./util')
const { loadPartialConfigSync } = require('@babel/core')

module.exports = function createConfigPlugin (context, entry, asLib) {
  return {
    id: '@vue/cli-service-global-config',
    /** @type {import('@vue/cli-service').ServicePlugin} */
    apply: (api, options) => {
      const _entry = path.resolve(context, entry)
      api.chainWebpack(config => {
        // entry is *.vue file, create alias for built-in js entry
        if (/\.vue$/.test(entry)) {
          config.resolve
            .alias
              .set('~entry', _entry)
          entry = require.resolve('../template/main.js')
        } else {
          // make sure entry is relative
          if (!/^\.\//.test(entry)) {
            entry = `./${entry}`
          }
        }

        // ensure core-js polyfills can be imported
        config.resolve
          .alias
            .set('core-js', path.dirname(require.resolve('core-js')))
            .set('regenerator-runtime', path.dirname(require.resolve('regenerator-runtime')))

        // ensure loaders can be resolved properly
        // this is done by locating vue's install location (which is a
        // dependency of the global service)
        const modulePath = path.resolve(require.resolve('vue'), '../../../')
        config.resolveLoader
          .modules
            .add(modulePath)

        // add resolve alias for vue and vue-hot-reload-api
        // but prioritize versions installed locally.
        try {
          resolve.sync('vue', { basedir: context })
        } catch (e) {
          const vuePath = path.dirname(require.resolve('vue'))
          config.resolve.alias
            .set('vue$', `${vuePath}/${options.compiler ? `vue.esm.js` : `vue.runtime.esm.js`}`)
        }

        try {
          resolve.sync('vue-hot-reload-api', { basedir: context })
        } catch (e) {
          config.resolve.alias
            // eslint-disable-next-line node/no-extraneous-require
            .set('vue-hot-reload-api', require.resolve('vue-hot-reload-api'))
        }

        // set entry
        config
          .entry('app')
            .clear()
            .add(entry)

        const babelOptions = {
          presets: [require.resolve('@vue/cli-plugin-babel/preset')]
        }

        // set inline babel options
        config.module
          .rule('js')
            .include
              .clear()
              .end()
            .exclude
              .add(/node_modules/)
              .add(/@vue\/cli-service/)
              .end()
            .uses
              .delete('cache-loader')
              .end()
            .use('babel-loader')
              .tap(() => babelOptions)

        // check eslint config presence
        // otherwise eslint-loader goes all the way up to look for eslintrc, can be
        // messed up when the project is inside another project.
        const ESLintConfigFile = findExisting(context, [
          '.eslintrc.js',
          '.eslintrc.cjs',
          '.eslintrc.yaml',
          '.eslintrc.yml',
          '.eslintrc.json',
          '.eslintrc',
          'package.json'
        ])
        const hasESLintConfig = ESLintConfigFile === 'package.json'
          ? !!(require(path.join(context, 'package.json')).eslintConfig)
          : !!ESLintConfigFile

        const babelConfig = loadPartialConfigSync({ filename: _entry })
        const hasBabelConfig = !!babelConfig && babelConfig.hasFilesystemConfig()

        // set inline eslint options
        config
          .plugin('eslint')
          .tap(args => {
            /** @type {import('eslint-webpack-plugin').Options & import('eslint').ESLint.Options} */
            const eslintWebpackPluginOptions = {
              // eslint@7 load config and plugin related to baseConfig.extends from cwd,
              // By default, cwd is the current working directory of `vue serve`,
              // should load baseConfig.extends config(dependencies of @vue/cli-service-global) from `__dirname`
              cwd: __dirname,
              useEslintrc: hasESLintConfig,
              baseConfig: {
                extends: [
                  'plugin:vue/essential',
                  'eslint:recommended'
                ],
                parserOptions: {
                  parser: '@babel/eslint-parser',
                  requireConfigFile: hasBabelConfig,
                  babelOptions
                },
                rules: {
                  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
                  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
                }
              }
            }
            Object.assign(args[0], eslintWebpackPluginOptions)

            return args
          })

        if (!asLib) {
          // set html plugin template
          const indexFile = findExisting(context, [
            'index.html',
            'public/index.html'
          ]) || path.resolve(__dirname, '../template/index.html')
          config
            .plugin('html')
              .tap(args => {
                args[0].template = indexFile
                return args
              })
        }

        // disable copy plugin if no public dir
        if (asLib || !findExisting(context, ['public'])) {
          config.plugins.delete('copy')
        }
      })
    }
  }
}