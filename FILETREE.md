vue-cli
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.tidelift.yml
├─CHANGELOG.md
├─LICENSE
├─README.md
├─appveyor.yml
├─fileTree.md
├─jest.config.js
├─lerna.json
├─package.json
├─yarn.lock
├─scripts
|    ├─.eslintrc
|    ├─bootstrap.js
|    ├─buildEditorConfig.js
|    ├─checkLinks.js
|    ├─genChangelog.js
|    ├─genDocs.js
|    ├─patchChromedriver.js
|    ├─release.js
|    ├─syncDeps.js
|    ├─test.js
|    ├─testSetup.js
|    ├─verifyCommitMsg.js
|    ├─e2e-test
|    |    ├─cleanup.sh
|    |    ├─git.sh
|    |    ├─local-registry.sh
|    |    ├─run-e2e-test.sh
|    |    └verdaccio-config.yml
├─packages
|    ├─vue-cli-version-marker
|    |           ├─README.md
|    |           └package.json
|    ├─test
|    ├─@vue
|    |  ├─cli-ui-addon-widgets
|    |  |          ├─.browserslistrc
|    |  |          ├─.eslintrc.js
|    |  |          ├─README.md
|    |  |          ├─babel.config.js
|    |  |          ├─package.json
|    |  |          ├─vue.config.js
|    |  |          ├─src
|    |  |          |  ├─main.js
|    |  |          |  ├─util
|    |  |          |  |  └consts.js
|    |  |          |  ├─components
|    |  |          |  |     ├─DependencyUpdates.vue
|    |  |          |  |     ├─KillPort.vue
|    |  |          |  |     ├─News.vue
|    |  |          |  |     ├─NewsItem.vue
|    |  |          |  |     ├─NewsItemDetails.vue
|    |  |          |  |     ├─PluginUpdates.vue
|    |  |          |  |     ├─RunTask.vue
|    |  |          |  |     ├─StatusWidget.vue
|    |  |          |  |     ├─Vulnerability.vue
|    |  |          |  |     ├─VulnerabilityDetails.vue
|    |  |          |  |     ├─VulnerabilityItem.vue
|    |  |          |  |     └Welcome.vue
|    |  |          ├─public
|    |  |          |   ├─favicon.ico
|    |  |          |   └index.html
|    |  ├─cli-ui-addon-webpack
|    |  |          ├─.babelrc
|    |  |          ├─.eslintrc.js
|    |  |          ├─README.md
|    |  |          ├─package.json
|    |  |          ├─vue.config.js
|    |  |          ├─src
|    |  |          |  ├─filters.js
|    |  |          |  ├─main.js
|    |  |          |  ├─util
|    |  |          |  |  ├─assets.js
|    |  |          |  |  └colors.js
|    |  |          |  ├─store
|    |  |          |  |   └index.js
|    |  |          |  ├─mixins
|    |  |          |  |   └Dashboard.js
|    |  |          |  ├─locales
|    |  |          |  |    └en.json
|    |  |          |  ├─components
|    |  |          |  |     ├─AssetList.vue
|    |  |          |  |     ├─AssetListItem.vue
|    |  |          |  |     ├─BuildProgress.vue
|    |  |          |  |     ├─BuildStatus.vue
|    |  |          |  |     ├─DonutModule.vue
|    |  |          |  |     ├─ModuleList.vue
|    |  |          |  |     ├─ModuleListItem.vue
|    |  |          |  |     ├─SpeedStats.vue
|    |  |          |  |     ├─SpeedStatsItem.vue
|    |  |          |  |     ├─TestView.vue
|    |  |          |  |     ├─WebpackAnalyzer.vue
|    |  |          |  |     └WebpackDashboard.vue
|    |  |          |  ├─assets
|    |  |          |  |   ├─speeds.json
|    |  |          |  |   └webpack.svg
|    |  |          ├─public
|    |  ├─cli-ui
|    |  |   ├─.babelrc
|    |  |   ├─.env.development
|    |  |   ├─.env.production
|    |  |   ├─.eslintrc.js
|    |  |   ├─README.md
|    |  |   ├─cypress.json
|    |  |   ├─graphql-server.js
|    |  |   ├─index.js
|    |  |   ├─package.json
|    |  |   ├─server.js
|    |  |   ├─ui-dev.js
|    |  |   ├─vue.config.js
|    |  |   ├─ui-public
|    |  |   |     ├─vue-cli.png
|    |  |   |     ├─vue-logo.png
|    |  |   |     ├─webpack-inspect-logo.png
|    |  |   |     └webpack-logo.png
|    |  |   ├─ui-defaults
|    |  |   |      ├─config.js
|    |  |   |      ├─index.js
|    |  |   |      ├─suggestions.js
|    |  |   |      ├─tasks.js
|    |  |   |      ├─widgets.js
|    |  |   |      ├─utils
|    |  |   |      |   ├─audit.js
|    |  |   |      |   ├─modules.js
|    |  |   |      |   └stats.js
|    |  |   ├─tests
|    |  |   |   ├─e2e
|    |  |   |   |  ├─.eslintrc
|    |  |   |   |  ├─support
|    |  |   |   |  |    ├─commands.js
|    |  |   |   |  |    └index.js
|    |  |   |   |  ├─specs
|    |  |   |   |  |   ├─g1-projects.js
|    |  |   |   |  |   ├─g2-plugins.js
|    |  |   |   |  |   ├─g3-configurations.js
|    |  |   |   |  |   └g4-tasks.js
|    |  |   |   |  ├─plugins
|    |  |   |   |  |    └index.js
|    |  |   ├─src
|    |  |   |  ├─App.vue
|    |  |   |  ├─filters.js
|    |  |   |  ├─i18n.js
|    |  |   |  ├─main.js
|    |  |   |  ├─plugins.js
|    |  |   |  ├─register-components.js
|    |  |   |  ├─router.js
|    |  |   |  ├─vue-apollo.js
|    |  |   |  ├─util
|    |  |   |  |  ├─ClientAddonApi.js
|    |  |   |  |  ├─ansi-colors.js
|    |  |   |  |  ├─bus.js
|    |  |   |  |  ├─focus.js
|    |  |   |  |  ├─folders.js
|    |  |   |  |  ├─image.js
|    |  |   |  |  ├─plugin-action.js
|    |  |   |  |  ├─responsive.js
|    |  |   |  |  ├─route.js
|    |  |   |  |  ├─search.js
|    |  |   |  |  ├─set-size.js
|    |  |   |  |  ├─shared-data.js
|    |  |   |  |  └theme.js
|    |  |   |  ├─style
|    |  |   |  |   ├─colors.styl
|    |  |   |  |   ├─imports.styl
|    |  |   |  |   ├─main.styl
|    |  |   |  |   ├─mixins.styl
|    |  |   |  |   ├─transitions.styl
|    |  |   |  |   └vars.styl
|    |  |   |  ├─state
|    |  |   |  |   ├─defaults.js
|    |  |   |  |   ├─resolvers.js
|    |  |   |  |   └typeDefs.js
|    |  |   |  ├─mixins
|    |  |   |  |   ├─ClientState.js
|    |  |   |  |   ├─Defer.js
|    |  |   |  |   ├─Movable.js
|    |  |   |  |   ├─OnGrid.js
|    |  |   |  |   ├─OnWindowResize.js
|    |  |   |  |   ├─PageVisibility.js
|    |  |   |  |   ├─Progress.js
|    |  |   |  |   ├─Prompts.js
|    |  |   |  |   ├─Resizable.js
|    |  |   |  |   └RestoreRoute.js
|    |  |   |  ├─graphql
|    |  |   |  |    ├─widget
|    |  |   |  |    |   ├─widgetAdd.gql
|    |  |   |  |    |   ├─widgetConfigOpen.gql
|    |  |   |  |    |   ├─widgetConfigSave.gql
|    |  |   |  |    |   ├─widgetDefinitionFragment.gql
|    |  |   |  |    |   ├─widgetDefinitions.gql
|    |  |   |  |    |   ├─widgetFragment.gql
|    |  |   |  |    |   ├─widgetMove.gql
|    |  |   |  |    |   ├─widgetRemove.gql
|    |  |   |  |    |   └widgets.gql
|    |  |   |  |    ├─view
|    |  |   |  |    |  ├─viewAdded.gql
|    |  |   |  |    |  ├─viewChanged.gql
|    |  |   |  |    |  ├─viewFragment.gql
|    |  |   |  |    |  ├─viewOpen.gql
|    |  |   |  |    |  ├─viewRemoved.gql
|    |  |   |  |    |  └views.gql
|    |  |   |  |    ├─version
|    |  |   |  |    |    └versionFragment.gql
|    |  |   |  |    ├─task
|    |  |   |  |    |  ├─task.gql
|    |  |   |  |    |  ├─taskChanged.gql
|    |  |   |  |    |  ├─taskFragment.gql
|    |  |   |  |    |  ├─taskLogAdded.gql
|    |  |   |  |    |  ├─taskLogFragment.gql
|    |  |   |  |    |  ├─taskLogs.gql
|    |  |   |  |    |  ├─taskLogsClear.gql
|    |  |   |  |    |  ├─taskOpen.gql
|    |  |   |  |    |  ├─taskRestoreParameters.gql
|    |  |   |  |    |  ├─taskRun.gql
|    |  |   |  |    |  ├─taskSaveParameters.gql
|    |  |   |  |    |  ├─taskStop.gql
|    |  |   |  |    |  └tasks.gql
|    |  |   |  |    ├─suggestion
|    |  |   |  |    |     ├─suggestionActivate.gql
|    |  |   |  |    |     ├─suggestionAdded.gql
|    |  |   |  |    |     ├─suggestionFragment.gql
|    |  |   |  |    |     ├─suggestionRemoved.gql
|    |  |   |  |    |     ├─suggestionUpdated.gql
|    |  |   |  |    |     └suggestions.gql
|    |  |   |  |    ├─shared-data
|    |  |   |  |    |      ├─sharedData.gql
|    |  |   |  |    |      ├─sharedDataFragment.gql
|    |  |   |  |    |      ├─sharedDataUpdate.gql
|    |  |   |  |    |      └sharedDataUpdated.gql
|    |  |   |  |    ├─prompt
|    |  |   |  |    |   ├─promptAnswer.gql
|    |  |   |  |    |   ├─promptChoiceFragment.gql
|    |  |   |  |    |   ├─promptErrorFragment.gql
|    |  |   |  |    |   └promptFragment.gql
|    |  |   |  |    ├─project
|    |  |   |  |    |    ├─currentProjectId.gql
|    |  |   |  |    |    ├─currentProjectIdSet.gql
|    |  |   |  |    |    ├─projectCancelCreation.gql
|    |  |   |  |    |    ├─projectCreate.gql
|    |  |   |  |    |    ├─projectCreation.gql
|    |  |   |  |    |    ├─projectCreationFragment.gql
|    |  |   |  |    |    ├─projectCurrent.gql
|    |  |   |  |    |    ├─projectCwdReset.gql
|    |  |   |  |    |    ├─projectFragment.gql
|    |  |   |  |    |    ├─projectImport.gql
|    |  |   |  |    |    ├─projectInitCreation.gql
|    |  |   |  |    |    ├─projectOpen.gql
|    |  |   |  |    |    ├─projectRemove.gql
|    |  |   |  |    |    ├─projectSetFavorite.gql
|    |  |   |  |    |    └projects.gql
|    |  |   |  |    ├─progress
|    |  |   |  |    |    ├─progress.gql
|    |  |   |  |    |    ├─progressChanged.gql
|    |  |   |  |    |    ├─progressFragment.gql
|    |  |   |  |    |    └progressRemoved.gql
|    |  |   |  |    ├─preset
|    |  |   |  |    |   ├─presetApply.gql
|    |  |   |  |    |   └presetFragment.gql
|    |  |   |  |    ├─plugin
|    |  |   |  |    |   ├─pluginActionCall.gql
|    |  |   |  |    |   ├─pluginActionCallFragment.gql
|    |  |   |  |    |   ├─pluginActionCalled.gql
|    |  |   |  |    |   ├─pluginActionResolved.gql
|    |  |   |  |    |   ├─pluginActionResultFragment.gql
|    |  |   |  |    |   ├─pluginDetails.gql
|    |  |   |  |    |   ├─pluginFinishInstall.gql
|    |  |   |  |    |   ├─pluginFragment.gql
|    |  |   |  |    |   ├─pluginInstall.gql
|    |  |   |  |    |   ├─pluginInstallLocal.gql
|    |  |   |  |    |   ├─pluginInstallation.gql
|    |  |   |  |    |   ├─pluginInstallationFragment.gql
|    |  |   |  |    |   ├─pluginInvoke.gql
|    |  |   |  |    |   ├─pluginLogo.gql
|    |  |   |  |    |   ├─pluginResetApi.gql
|    |  |   |  |    |   ├─pluginUninstall.gql
|    |  |   |  |    |   ├─pluginUpdate.gql
|    |  |   |  |    |   ├─plugins.gql
|    |  |   |  |    |   └pluginsUpdate.gql
|    |  |   |  |    ├─locale
|    |  |   |  |    |   ├─localeAdded.gql
|    |  |   |  |    |   ├─localeFragment.gql
|    |  |   |  |    |   └locales.gql
|    |  |   |  |    ├─loading
|    |  |   |  |    |    ├─loading.gql
|    |  |   |  |    |    └loadingChange.gql
|    |  |   |  |    ├─git
|    |  |   |  |    |  ├─fileDiffs.gql
|    |  |   |  |    |  └gitCommit.gql
|    |  |   |  |    ├─folder
|    |  |   |  |    |   ├─folderCreate.gql
|    |  |   |  |    |   ├─folderCurrent.gql
|    |  |   |  |    |   ├─folderCurrentFragment.gql
|    |  |   |  |    |   ├─folderExists.gql
|    |  |   |  |    |   ├─folderOpen.gql
|    |  |   |  |    |   ├─folderOpenParent.gql
|    |  |   |  |    |   ├─folderSetFavorite.gql
|    |  |   |  |    |   └foldersFavorite.gql
|    |  |   |  |    ├─file
|    |  |   |  |    |  └fileOpenInEditor.gql
|    |  |   |  |    ├─feature
|    |  |   |  |    |    ├─featureFragment.gql
|    |  |   |  |    |    └featureSetEnabled.gql
|    |  |   |  |    ├─dependency
|    |  |   |  |    |     ├─dependencies.gql
|    |  |   |  |    |     ├─dependenciesUpdate.gql
|    |  |   |  |    |     ├─dependencyDetails.gql
|    |  |   |  |    |     ├─dependencyFragment.gql
|    |  |   |  |    |     ├─dependencyInstall.gql
|    |  |   |  |    |     ├─dependencyUninstall.gql
|    |  |   |  |    |     └dependencyUpdate.gql
|    |  |   |  |    ├─dark-mode
|    |  |   |  |    |     ├─darkMode.gql
|    |  |   |  |    |     └darkModeSet.gql
|    |  |   |  |    ├─cwd
|    |  |   |  |    |  ├─cwd.gql
|    |  |   |  |    |  └cwdChanged.gql
|    |  |   |  |    ├─console-log
|    |  |   |  |    |      ├─consoleLogAdded.gql
|    |  |   |  |    |      ├─consoleLogFragment.gql
|    |  |   |  |    |      ├─consoleLogLast.gql
|    |  |   |  |    |      ├─consoleLogs.gql
|    |  |   |  |    |      └consoleLogsClear.gql
|    |  |   |  |    ├─connected
|    |  |   |  |    |     ├─connected.gql
|    |  |   |  |    |     └connectedSet.gql
|    |  |   |  |    ├─configuration
|    |  |   |  |    |       ├─configuration.gql
|    |  |   |  |    |       ├─configurationCancel.gql
|    |  |   |  |    |       ├─configurationFragment.gql
|    |  |   |  |    |       ├─configurationSave.gql
|    |  |   |  |    |       └configurations.gql
|    |  |   |  |    ├─client-addon
|    |  |   |  |    |      ├─clientAddonAdded.gql
|    |  |   |  |    |      ├─clientAddonFragment.gql
|    |  |   |  |    |      └clientAddons.gql
|    |  |   |  |    ├─app
|    |  |   |  |    |  └routeRequested.gql
|    |  |   |  ├─components
|    |  |   |  |     ├─view
|    |  |   |  |     |  ├─ViewBadge.vue
|    |  |   |  |     |  ├─ViewNav.vue
|    |  |   |  |     |  ├─ViewNavButton.vue
|    |  |   |  |     |  └ViewNavMore.vue
|    |  |   |  |     ├─task
|    |  |   |  |     |  ├─ProjectTaskDetails.vue
|    |  |   |  |     |  ├─ProjectTasks.vue
|    |  |   |  |     |  └TaskItem.vue
|    |  |   |  |     ├─suggestion
|    |  |   |  |     |     ├─SuggestionBar.vue
|    |  |   |  |     |     ├─SuggestionBarItem.vue
|    |  |   |  |     |     └SuggestionBarList.vue
|    |  |   |  |     ├─search
|    |  |   |  |     |   ├─InstantSearchInput.vue
|    |  |   |  |     |   └InstantSearchPagination.vue
|    |  |   |  |     ├─prompt
|    |  |   |  |     |   ├─Prompt.vue
|    |  |   |  |     |   ├─PromptCheckbox.vue
|    |  |   |  |     |   ├─PromptColor.vue
|    |  |   |  |     |   ├─PromptConfirm.vue
|    |  |   |  |     |   ├─PromptEditor.vue
|    |  |   |  |     |   ├─PromptError.vue
|    |  |   |  |     |   ├─PromptInput.vue
|    |  |   |  |     |   ├─PromptList.vue
|    |  |   |  |     |   └PromptsList.vue
|    |  |   |  |     ├─project-manager
|    |  |   |  |     |        ├─ProjectRename.vue
|    |  |   |  |     |        ├─ProjectSelect.vue
|    |  |   |  |     |        ├─ProjectSelectList.vue
|    |  |   |  |     |        ├─ProjectSelectListItem.vue
|    |  |   |  |     |        └ProjectTasksDropdown.vue
|    |  |   |  |     ├─project-create
|    |  |   |  |     |       ├─ProjectCreate.vue
|    |  |   |  |     |       ├─ProjectFeatureItem.vue
|    |  |   |  |     |       └ProjectPresetItem.vue
|    |  |   |  |     ├─plugin
|    |  |   |  |     |   ├─ProjectPluginAddLocal.vue
|    |  |   |  |     |   ├─ProjectPluginItem.vue
|    |  |   |  |     |   ├─ProjectPlugins.vue
|    |  |   |  |     |   └ProjectPluginsAdd.vue
|    |  |   |  |     ├─logger
|    |  |   |  |     |   ├─LoggerMessage.vue
|    |  |   |  |     |   └LoggerView.vue
|    |  |   |  |     ├─folder
|    |  |   |  |     |   ├─FolderExplorer.vue
|    |  |   |  |     |   └FolderExplorerItem.vue
|    |  |   |  |     ├─file-diff
|    |  |   |  |     |     ├─FileDiff.vue
|    |  |   |  |     |     ├─FileDiffChange.vue
|    |  |   |  |     |     ├─FileDiffChunk.vue
|    |  |   |  |     |     └FileDiffView.vue
|    |  |   |  |     ├─dependency
|    |  |   |  |     |     ├─NpmPackageSearch.vue
|    |  |   |  |     |     ├─PackageSearchItem.vue
|    |  |   |  |     |     ├─ProjectDependencies.vue
|    |  |   |  |     |     └ProjectDependencyItem.vue
|    |  |   |  |     ├─dashboard
|    |  |   |  |     |     ├─ProjectDashboard.vue
|    |  |   |  |     |     ├─Widget.vue
|    |  |   |  |     |     ├─WidgetAddItem.vue
|    |  |   |  |     |     ├─WidgetAddPane.vue
|    |  |   |  |     |     └WidgetDetailsView.vue
|    |  |   |  |     ├─content
|    |  |   |  |     |    ├─ContentView.vue
|    |  |   |  |     |    ├─ItemLogo.vue
|    |  |   |  |     |    ├─ListFilter.vue
|    |  |   |  |     |    ├─ListItemInfo.vue
|    |  |   |  |     |    ├─ListSort.vue
|    |  |   |  |     |    ├─NavContent.vue
|    |  |   |  |     |    ├─NavList.vue
|    |  |   |  |     |    ├─StepWizard.vue
|    |  |   |  |     |    └TerminalView.vue
|    |  |   |  |     ├─configuration
|    |  |   |  |     |       ├─ConfigurationItem.vue
|    |  |   |  |     |       ├─ConfigurationTab.vue
|    |  |   |  |     |       ├─ProjectConfigurationDetails.vue
|    |  |   |  |     |       └ProjectConfigurations.vue
|    |  |   |  |     ├─client-addon
|    |  |   |  |     |      ├─ClientAddonComponent.vue
|    |  |   |  |     |      └ClientAddonLoader.vue
|    |  |   |  |     ├─app
|    |  |   |  |     |  ├─About.vue
|    |  |   |  |     |  ├─AppLoading.vue
|    |  |   |  |     |  ├─ConnectionStatus.vue
|    |  |   |  |     |  ├─LocaleLoader.vue
|    |  |   |  |     |  ├─NotFound.vue
|    |  |   |  |     |  ├─ProgressScreen.vue
|    |  |   |  |     |  ├─ProjectHome.vue
|    |  |   |  |     |  ├─ProjectQuickDropdown.vue
|    |  |   |  |     |  ├─StatusBar.vue
|    |  |   |  |     |  └TopBar.vue
|    |  |   |  ├─assets
|    |  |   |  |   ├─done.png
|    |  |   |  |   ├─error.png
|    |  |   |  |   ├─logo.png
|    |  |   |  |   └search-by-algolia.svg
|    |  |   ├─public
|    |  |   |   ├─favicon.ico
|    |  |   |   └index.html
|    |  |   ├─locales
|    |  |   |    └en.json
|    |  |   ├─apollo-server
|    |  |   |       ├─channels.js
|    |  |   |       ├─context.js
|    |  |   |       ├─directives.js
|    |  |   |       ├─mocks.js
|    |  |   |       ├─pubsub.js
|    |  |   |       ├─resolvers.js
|    |  |   |       ├─server.js
|    |  |   |       ├─type-defs.js
|    |  |   |       ├─util
|    |  |   |       |  ├─command.js
|    |  |   |       |  ├─db.js
|    |  |   |       |  ├─highlight.js
|    |  |   |       |  ├─ipc.js
|    |  |   |       |  ├─logger.js
|    |  |   |       |  ├─notification.js
|    |  |   |       |  ├─parse-args.js
|    |  |   |       |  ├─parse-diff.js
|    |  |   |       |  ├─rcFolder.js
|    |  |   |       |  ├─resolve-path.js
|    |  |   |       |  ├─stats.js
|    |  |   |       |  ├─strings.js
|    |  |   |       |  ├─terminate.js
|    |  |   |       |  └terminate.sh
|    |  |   |       ├─schema
|    |  |   |       |   ├─configuration.js
|    |  |   |       |   ├─console.js
|    |  |   |       |   ├─dependency.js
|    |  |   |       |   ├─folder.js
|    |  |   |       |   ├─git.js
|    |  |   |       |   ├─plugin.js
|    |  |   |       |   ├─project.js
|    |  |   |       |   ├─prompt.js
|    |  |   |       |   ├─suggestion.js
|    |  |   |       |   ├─task.js
|    |  |   |       |   ├─view.js
|    |  |   |       |   └widget.js
|    |  |   |       ├─connectors
|    |  |   |       |     ├─app.js
|    |  |   |       |     ├─client-addons.js
|    |  |   |       |     ├─configurations.js
|    |  |   |       |     ├─cwd.js
|    |  |   |       |     ├─dependencies.js
|    |  |   |       |     ├─files.js
|    |  |   |       |     ├─folders.js
|    |  |   |       |     ├─git.js
|    |  |   |       |     ├─locales.js
|    |  |   |       |     ├─logs.js
|    |  |   |       |     ├─plugins.js
|    |  |   |       |     ├─progress.js
|    |  |   |       |     ├─projects.js
|    |  |   |       |     ├─prompts.js
|    |  |   |       |     ├─shared-data.js
|    |  |   |       |     ├─suggestions.js
|    |  |   |       |     ├─tasks.js
|    |  |   |       |     ├─views.js
|    |  |   |       |     └widgets.js
|    |  |   |       ├─api
|    |  |   |       |  ├─PluginApi.js
|    |  |   |       |  ├─client-addon.js
|    |  |   |       |  ├─configuration.js
|    |  |   |       |  ├─notify.js
|    |  |   |       |  ├─progress.js
|    |  |   |       |  ├─suggestion.js
|    |  |   |       |  ├─task.js
|    |  |   |       |  ├─view.js
|    |  |   |       |  └widget.js
|    |  ├─cli-test-utils
|    |  |       ├─.npmignore
|    |  |       ├─README.md
|    |  |       ├─assertPromptModule.d.ts
|    |  |       ├─assertPromptModule.js
|    |  |       ├─createJSONServer.d.ts
|    |  |       ├─createJSONServer.js
|    |  |       ├─createServer.d.ts
|    |  |       ├─createServer.js
|    |  |       ├─createTestProject.d.ts
|    |  |       ├─createTestProject.js
|    |  |       ├─createUpgradableProject.js
|    |  |       ├─generateWithPlugin.d.ts
|    |  |       ├─generateWithPlugin.js
|    |  |       ├─launchPuppeteer.d.ts
|    |  |       ├─launchPuppeteer.js
|    |  |       ├─package.json
|    |  |       ├─serveWithPuppeteer.d.ts
|    |  |       ├─serveWithPuppeteer.js
|    |  |       ├─types
|    |  |       |   ├─cli-test-utils-test.ts
|    |  |       |   └tsconfig.json
|    |  ├─cli-shared-utils
|    |  |        ├─.npmignore
|    |  |        ├─README.md
|    |  |        ├─index.js
|    |  |        ├─package.json
|    |  |        ├─lib
|    |  |        |  ├─_silence.js
|    |  |        |  ├─env.js
|    |  |        |  ├─exit.js
|    |  |        |  ├─ipc.js
|    |  |        |  ├─launch.js
|    |  |        |  ├─logger.js
|    |  |        |  ├─module.js
|    |  |        |  ├─object.js
|    |  |        |  ├─openBrowser.js
|    |  |        |  ├─openChrome.applescript
|    |  |        |  ├─pkg.js
|    |  |        |  ├─pluginResolution.js
|    |  |        |  ├─request.js
|    |  |        |  ├─spinner.js
|    |  |        |  └validate.js
|    |  |        ├─__tests__
|    |  |        |     └pluginResolution.spec.js
|    |  ├─cli-service-global
|    |  |         ├─.npmignore
|    |  |         ├─README.md
|    |  |         ├─index.js
|    |  |         ├─package.json
|    |  |         ├─template
|    |  |         |    ├─index.html
|    |  |         |    └main.js
|    |  |         ├─lib
|    |  |         |  ├─globalConfigPlugin.js
|    |  |         |  └util.js
|    |  |         ├─__tests__
|    |  |         |     ├─entry.vue
|    |  |         |     ├─globalService.spec.js
|    |  |         |     ├─globalServiceBuildLib.spec.js
|    |  |         |     └globalServiceBuildWc.spec.js
|    |  ├─cli-service
|    |  |      ├─.npmignore
|    |  |      ├─README.md
|    |  |      ├─logo.png
|    |  |      ├─package.json
|    |  |      ├─webpack.config.js
|    |  |      ├─types
|    |  |      |   ├─ProjectOptions.d.ts
|    |  |      |   ├─cli-service-test.ts
|    |  |      |   ├─index.d.ts
|    |  |      |   └tsconfig.json
|    |  |      ├─migrator
|    |  |      |    └index.js
|    |  |      ├─lib
|    |  |      |  ├─PluginAPI.js
|    |  |      |  ├─Service.js
|    |  |      |  ├─options.js
|    |  |      |  ├─webpack
|    |  |      |  |    ├─CorsPlugin.js
|    |  |      |  |    ├─DashboardPlugin.js
|    |  |      |  |    ├─ModernModePlugin.js
|    |  |      |  |    ├─MovePlugin.js
|    |  |      |  |    └analyzeBundle.js
|    |  |      |  ├─util
|    |  |      |  |  ├─checkWebpack.js
|    |  |      |  |  ├─getAssetPath.js
|    |  |      |  |  ├─getPadLength.js
|    |  |      |  |  ├─getVueMajor.js
|    |  |      |  |  ├─isAbsoluteUrl.js
|    |  |      |  |  ├─prepareProxy.js
|    |  |      |  |  ├─prepareURLs.js
|    |  |      |  |  ├─resolveClientEnv.js
|    |  |      |  |  ├─resolveLoaderError.js
|    |  |      |  |  ├─resolveLocal.js
|    |  |      |  |  └validateWebpackConfig.js
|    |  |      |  ├─config
|    |  |      |  |   ├─app.js
|    |  |      |  |   ├─assets.js
|    |  |      |  |   ├─base.js
|    |  |      |  |   ├─css.js
|    |  |      |  |   ├─index-default.html
|    |  |      |  |   ├─prod.js
|    |  |      |  |   ├─terserOptions.js
|    |  |      |  |   ├─vue-loader-v15-resolve-compat
|    |  |      |  |   |               └vue-loader.js
|    |  |      |  ├─commands
|    |  |      |  |    ├─help.js
|    |  |      |  |    ├─inspect.js
|    |  |      |  |    ├─serve.js
|    |  |      |  |    ├─build
|    |  |      |  |    |   ├─demo-lib-js.html
|    |  |      |  |    |   ├─demo-lib.html
|    |  |      |  |    |   ├─demo-wc.html
|    |  |      |  |    |   ├─entry-lib-no-default.js
|    |  |      |  |    |   ├─entry-lib.js
|    |  |      |  |    |   ├─entry-wc.js
|    |  |      |  |    |   ├─formatStats.js
|    |  |      |  |    |   ├─index.js
|    |  |      |  |    |   ├─resolveAppConfig.js
|    |  |      |  |    |   ├─resolveLibConfig.js
|    |  |      |  |    |   ├─resolveWcConfig.js
|    |  |      |  |    |   ├─resolveWcEntry.js
|    |  |      |  |    |   └setPublicPath.js
|    |  |      ├─generator
|    |  |      |     ├─index.js
|    |  |      |     ├─router.js
|    |  |      |     ├─vuex.js
|    |  |      |     ├─template
|    |  |      |     |    ├─_gitignore
|    |  |      |     |    ├─src
|    |  |      |     |    |  ├─App.vue
|    |  |      |     |    |  ├─main.js
|    |  |      |     |    |  ├─components
|    |  |      |     |    |  |     └HelloWorld.vue
|    |  |      |     |    |  ├─assets
|    |  |      |     |    |  |   └logo.png
|    |  |      |     |    ├─public
|    |  |      |     |    |   ├─favicon.ico
|    |  |      |     |    |   └index.html
|    |  |      ├─bin
|    |  |      |  └vue-cli-service.js
|    |  |      ├─__tests__
|    |  |      |     ├─Service.spec.js
|    |  |      |     ├─ServiceESM.spec.js
|    |  |      |     ├─build.spec.js
|    |  |      |     ├─buildLib.spec.js
|    |  |      |     ├─buildLibFormats.spec.js
|    |  |      |     ├─buildWc.spec.js
|    |  |      |     ├─buildWcAsync.spec.js
|    |  |      |     ├─cors.spec.js
|    |  |      |     ├─css.spec.js
|    |  |      |     ├─generator.spec.js
|    |  |      |     ├─modernMode.spec.js
|    |  |      |     ├─multiPage.spec.js
|    |  |      |     ├─proxy.spec.js
|    |  |      |     ├─serve.spec.js
|    |  |      |     └serveVue3.spec.js
|    |  ├─cli-plugin-vuex
|    |  |        ├─.npmignore
|    |  |        ├─README.md
|    |  |        ├─index.js
|    |  |        ├─package.json
|    |  |        ├─generator
|    |  |        |     ├─index.js
|    |  |        |     ├─injectUseStore.js
|    |  |        |     ├─template-vue3
|    |  |        |     |       ├─src
|    |  |        |     |       |  ├─store
|    |  |        |     |       |  |   └index.js
|    |  |        |     ├─template
|    |  |        |     |    ├─src
|    |  |        |     |    |  ├─store
|    |  |        |     |    |  |   └index.js
|    |  |        ├─__tests__
|    |  |        |     └vuexGenerator.spec.js
|    |  ├─cli-plugin-unit-mocha
|    |  |           ├─.npmignore
|    |  |           ├─README.md
|    |  |           ├─index.js
|    |  |           ├─logo.png
|    |  |           ├─package.json
|    |  |           ├─setup.js
|    |  |           ├─ui.js
|    |  |           ├─generator
|    |  |           |     ├─index.js
|    |  |           |     ├─template
|    |  |           |     |    ├─tests
|    |  |           |     |    |   ├─unit
|    |  |           |     |    |   |  ├─example.spec.js
|    |  |           |     |    |   |  └example.spec.ts
|    |  |           ├─__tests__
|    |  |           |     ├─mochaGenerator.spec.js
|    |  |           |     ├─mochaPlugin.spec.js
|    |  |           |     └mochaPluginVue3.spec.js
|    |  ├─cli-plugin-unit-jest
|    |  |          ├─.npmignore
|    |  |          ├─README.md
|    |  |          ├─index.js
|    |  |          ├─jest-preset.js
|    |  |          ├─logo.png
|    |  |          ├─package.json
|    |  |          ├─ui.js
|    |  |          ├─presets
|    |  |          |    ├─typescript-and-babel
|    |  |          |    |          └jest-preset.js
|    |  |          |    ├─typescript
|    |  |          |    |     └jest-preset.js
|    |  |          |    ├─no-babel
|    |  |          |    |    ├─esmoduleTransformer.js
|    |  |          |    |    └jest-preset.js
|    |  |          |    ├─default
|    |  |          |    |    └jest-preset.js
|    |  |          ├─generator
|    |  |          |     ├─index.js
|    |  |          |     ├─template
|    |  |          |     |    ├─tests
|    |  |          |     |    |   ├─unit
|    |  |          |     |    |   |  ├─example.spec.js
|    |  |          |     |    |   |  └example.spec.ts
|    |  |          ├─__tests__
|    |  |          |     ├─jestGenerator.spec.js
|    |  |          |     ├─jestPlugin.spec.js
|    |  |          |     └jestPluginVue3.spec.js
|    |  ├─cli-plugin-typescript
|    |  |           ├─.npmignore
|    |  |           ├─README.md
|    |  |           ├─index.js
|    |  |           ├─logo.png
|    |  |           ├─package.json
|    |  |           ├─prompts.js
|    |  |           ├─migrator
|    |  |           |    └index.js
|    |  |           ├─generator
|    |  |           |     ├─convert.js
|    |  |           |     ├─index.js
|    |  |           |     ├─template-vue3
|    |  |           |     |       ├─src
|    |  |           |     |       |  ├─App.vue
|    |  |           |     |       |  ├─shims-vue.d.ts
|    |  |           |     |       |  ├─views
|    |  |           |     |       |  |   └Home.vue
|    |  |           |     |       |  ├─components
|    |  |           |     |       |  |     └HelloWorld.vue
|    |  |           |     ├─template
|    |  |           |     |    ├─tsconfig.json
|    |  |           |     |    ├─src
|    |  |           |     |    |  ├─App.vue
|    |  |           |     |    |  ├─shims-tsx.d.ts
|    |  |           |     |    |  ├─shims-vue.d.ts
|    |  |           |     |    |  ├─views
|    |  |           |     |    |  |   └Home.vue
|    |  |           |     |    |  ├─components
|    |  |           |     |    |  |     └HelloWorld.vue
|    |  |           ├─codemods
|    |  |           |    ├─migrateComponentType.js
|    |  |           |    ├─__tests__
|    |  |           |    |     └migrateComponentType.spec.js
|    |  |           |    ├─__testfixtures__
|    |  |           |    |        ├─shims-vue.input.ts
|    |  |           |    |        └shims-vue.output.ts
|    |  |           ├─__tests__
|    |  |           |     ├─tsGenerator.spec.js
|    |  |           |     ├─tsMochaPlugin.spec.js
|    |  |           |     ├─tsPlugin.helper.js
|    |  |           |     ├─tsPluginBabel.spec.js
|    |  |           |     ├─tsPluginClassComponent.spec.js
|    |  |           |     ├─tsPluginDefault.spec.js
|    |  |           |     ├─tsPluginE2e.spec.js
|    |  |           |     ├─tsPluginESLint.spec.js
|    |  |           |     ├─tsPluginUnit.spec.js
|    |  |           |     └tsPluginVue3.spec.js
|    |  ├─cli-plugin-router
|    |  |         ├─.npmignore
|    |  |         ├─README.md
|    |  |         ├─index.js
|    |  |         ├─package.json
|    |  |         ├─prompts.js
|    |  |         ├─generator
|    |  |         |     ├─index.js
|    |  |         |     ├─injectUseRouter.js
|    |  |         |     ├─template-vue3
|    |  |         |     |       ├─src
|    |  |         |     |       |  ├─App.vue
|    |  |         |     |       |  ├─router
|    |  |         |     |       |  |   └index.js
|    |  |         |     ├─template
|    |  |         |     |    ├─src
|    |  |         |     |    |  ├─App.vue
|    |  |         |     |    |  ├─views
|    |  |         |     |    |  |   ├─About.vue
|    |  |         |     |    |  |   └Home.vue
|    |  |         |     |    |  ├─router
|    |  |         |     |    |  |   └index.js
|    |  |         ├─__tests__
|    |  |         |     └routerGenerator.spec.js
|    |  ├─cli-plugin-pwa
|    |  |       ├─.npmignore
|    |  |       ├─README.md
|    |  |       ├─index.js
|    |  |       ├─logo.png
|    |  |       ├─logo.svg
|    |  |       ├─package.json
|    |  |       ├─ui.js
|    |  |       ├─lib
|    |  |       |  ├─HtmlPwaPlugin.js
|    |  |       |  ├─noopServiceWorker.js
|    |  |       |  └noopServiceWorkerMiddleware.js
|    |  |       ├─generator
|    |  |       |     ├─index.js
|    |  |       |     ├─template
|    |  |       |     |    ├─src
|    |  |       |     |    |  └registerServiceWorker.js
|    |  |       |     |    ├─public
|    |  |       |     |    |   ├─robots.txt
|    |  |       |     |    |   ├─img
|    |  |       |     |    |   |  ├─icons
|    |  |       |     |    |   |  |   ├─android-chrome-192x192.png
|    |  |       |     |    |   |  |   ├─android-chrome-512x512.png
|    |  |       |     |    |   |  |   ├─android-chrome-maskable-192x192.png
|    |  |       |     |    |   |  |   ├─android-chrome-maskable-512x512.png
|    |  |       |     |    |   |  |   ├─apple-touch-icon-120x120.png
|    |  |       |     |    |   |  |   ├─apple-touch-icon-152x152.png
|    |  |       |     |    |   |  |   ├─apple-touch-icon-180x180.png
|    |  |       |     |    |   |  |   ├─apple-touch-icon-60x60.png
|    |  |       |     |    |   |  |   ├─apple-touch-icon-76x76.png
|    |  |       |     |    |   |  |   ├─apple-touch-icon.png
|    |  |       |     |    |   |  |   ├─favicon-16x16.png
|    |  |       |     |    |   |  |   ├─favicon-32x32.png
|    |  |       |     |    |   |  |   ├─msapplication-icon-144x144.png
|    |  |       |     |    |   |  |   ├─mstile-150x150.png
|    |  |       |     |    |   |  |   └safari-pinned-tab.svg
|    |  |       ├─__tests__
|    |  |       |     ├─pwaGenerator.spec.js
|    |  |       |     └pwaPlugin.spec.js
|    |  ├─cli-plugin-eslint
|    |  |         ├─.npmignore
|    |  |         ├─README.md
|    |  |         ├─eslintDeps.js
|    |  |         ├─eslintOptions.js
|    |  |         ├─index.js
|    |  |         ├─lint.js
|    |  |         ├─logo.png
|    |  |         ├─package.json
|    |  |         ├─prompts.js
|    |  |         ├─ui
|    |  |         | ├─configDescriptor.js
|    |  |         | ├─index.js
|    |  |         | └taskDescriptor.js
|    |  |         ├─migrator
|    |  |         |    └index.js
|    |  |         ├─generator
|    |  |         |     ├─index.js
|    |  |         |     ├─template
|    |  |         |     |    ├─standard
|    |  |         |     |    |    └_editorconfig
|    |  |         |     |    ├─airbnb
|    |  |         |     |    |   └_editorconfig
|    |  |         ├─__tests__
|    |  |         |     ├─eslintGenerator.spec.js
|    |  |         |     ├─eslintMigrator.spec.js
|    |  |         |     ├─eslintPlugin.spec.js
|    |  |         |     ├─eslintVue3.spec.js
|    |  |         |     └ui.spec.js
|    |  ├─cli-plugin-e2e-webdriverio
|    |  |             ├─.npmignore
|    |  |             ├─README.md
|    |  |             ├─index.js
|    |  |             ├─package.json
|    |  |             ├─prompts.js
|    |  |             ├─ui.js
|    |  |             ├─generator
|    |  |             |     ├─index.js
|    |  |             |     ├─template
|    |  |             |     |    ├─wdio.local.conf.js
|    |  |             |     |    ├─wdio.sauce.conf.js
|    |  |             |     |    ├─wdio.shared.conf.js
|    |  |             |     |    ├─tests
|    |  |             |     |    |   ├─e2e
|    |  |             |     |    |   |  ├─_eslintrc.js
|    |  |             |     |    |   |  ├─specs
|    |  |             |     |    |   |  |   └app.spec.js
|    |  |             |     |    |   |  ├─pageobjects
|    |  |             |     |    |   |  |      └app.page.js
|    |  |             |     |    |   |  ├─logs
|    |  |             ├─__tests__
|    |  |             |     ├─wdioGenerator.spec.js
|    |  |             |     └wdioPlugin.spec.js
|    |  ├─cli-plugin-e2e-nightwatch
|    |  |             ├─.npmignore
|    |  |             ├─README.md
|    |  |             ├─index.js
|    |  |             ├─logo.png
|    |  |             ├─nightwatch.config.js
|    |  |             ├─package.json
|    |  |             ├─prompts.js
|    |  |             ├─ui.js
|    |  |             ├─generator
|    |  |             |     ├─index.js
|    |  |             |     ├─template
|    |  |             |     |    ├─tests
|    |  |             |     |    |   ├─e2e
|    |  |             |     |    |   |  ├─_eslintrc.js
|    |  |             |     |    |   |  ├─globals.js
|    |  |             |     |    |   |  ├─specs
|    |  |             |     |    |   |  |   ├─test-with-pageobjects.js
|    |  |             |     |    |   |  |   └test.js
|    |  |             |     |    |   |  ├─page-objects
|    |  |             |     |    |   |  |      └homepage.js
|    |  |             |     |    |   |  ├─custom-commands
|    |  |             |     |    |   |  |        ├─customExecute.js
|    |  |             |     |    |   |  |        ├─openHomepage.js
|    |  |             |     |    |   |  |        └openHomepageClass.js
|    |  |             |     |    |   |  ├─custom-assertions
|    |  |             |     |    |   |  |         └elementCount.js
|    |  |             ├─__tests__
|    |  |             |     ├─nightwatchPlugin.spec.js
|    |  |             |     ├─lib
|    |  |             |     |  ├─globals-gecko.js
|    |  |             |     |  ├─globals-generated.js
|    |  |             |     |  └nightwatch.conf.js
|    |  ├─cli-plugin-e2e-cypress
|    |  |           ├─.npmignore
|    |  |           ├─README.md
|    |  |           ├─index.js
|    |  |           ├─logo.png
|    |  |           ├─package.json
|    |  |           ├─ui.js
|    |  |           ├─generator
|    |  |           |     ├─index.js
|    |  |           |     ├─template
|    |  |           |     |    ├─cypress.json
|    |  |           |     |    ├─tests
|    |  |           |     |    |   ├─e2e
|    |  |           |     |    |   |  ├─_eslintrc.js
|    |  |           |     |    |   |  ├─support
|    |  |           |     |    |   |  |    ├─commands.js
|    |  |           |     |    |   |  |    └index.js
|    |  |           |     |    |   |  ├─specs
|    |  |           |     |    |   |  |   └test.js
|    |  |           |     |    |   |  ├─plugins
|    |  |           |     |    |   |  |    └index.js
|    |  |           ├─__tests__
|    |  |           |     └cypressPlugin.spec.js
|    |  ├─cli-plugin-babel
|    |  |        ├─.npmignore
|    |  |        ├─README.md
|    |  |        ├─generator.js
|    |  |        ├─index.js
|    |  |        ├─logo.png
|    |  |        ├─package.json
|    |  |        ├─preset.js
|    |  |        ├─migrator
|    |  |        |    └index.js
|    |  |        ├─codemods
|    |  |        |    ├─usePluginPreset.js
|    |  |        |    ├─__tests__
|    |  |        |    |     └usePluginPreset.spec.js
|    |  |        |    ├─__testfixtures__
|    |  |        |    |        ├─customConfig.input.js
|    |  |        |    |        ├─customConfig.output.js
|    |  |        |    |        ├─default.input.js
|    |  |        |    |        ├─default.output.js
|    |  |        |    |        ├─doubleQuote.input.js
|    |  |        |    |        ├─doubleQuote.output.js
|    |  |        |    |        ├─require.input.js
|    |  |        |    |        ├─require.output.js
|    |  |        |    |        ├─templateLiteral.input.js
|    |  |        |    |        └templateLiteral.output.js
|    |  |        ├─__tests__
|    |  |        |     ├─babelMigrator.spec.js
|    |  |        |     ├─babelRuntime.spec.js
|    |  |        |     └transpileDependencies.spec.js
|    |  ├─cli-overlay
|    |  |      ├─.npmignore
|    |  |      ├─README.md
|    |  |      ├─package.json
|    |  |      ├─src
|    |  |      |  └index.js
|    |  ├─cli-init
|    |  |    ├─.npmignore
|    |  |    ├─README.md
|    |  |    ├─index.js
|    |  |    └package.json
|    |  ├─cli
|    |  |  ├─.npmignore
|    |  |  ├─README.md
|    |  |  ├─package-lock.json
|    |  |  ├─package.json
|    |  |  ├─types
|    |  |  |   ├─cli-test.ts
|    |  |  |   ├─index.d.ts
|    |  |  |   └tsconfig.json
|    |  |  ├─lib
|    |  |  |  ├─ConfigTransform.js
|    |  |  |  ├─Creator.js
|    |  |  |  ├─Generator.js
|    |  |  |  ├─GeneratorAPI.js
|    |  |  |  ├─Migrator.js
|    |  |  |  ├─MigratorAPI.js
|    |  |  |  ├─PromptModuleAPI.js
|    |  |  |  ├─Upgrader.js
|    |  |  |  ├─add.js
|    |  |  |  ├─config.js
|    |  |  |  ├─create.js
|    |  |  |  ├─inspect.js
|    |  |  |  ├─invoke.js
|    |  |  |  ├─migrate.js
|    |  |  |  ├─options.js
|    |  |  |  ├─outdated.js
|    |  |  |  ├─ui.js
|    |  |  |  ├─upgrade.js
|    |  |  |  ├─util
|    |  |  |  |  ├─.npmignore
|    |  |  |  |  ├─ProjectPackageManager.js
|    |  |  |  |  ├─clearConsole.js
|    |  |  |  |  ├─configTransforms.js
|    |  |  |  |  ├─confirmIfGitDirty.js
|    |  |  |  |  ├─createTools.js
|    |  |  |  |  ├─enhanceErrorMessages.js
|    |  |  |  |  ├─executeCommand.js
|    |  |  |  |  ├─extendJSConfig.js
|    |  |  |  |  ├─features.js
|    |  |  |  |  ├─generateReadme.js
|    |  |  |  |  ├─getChangedFiles.js
|    |  |  |  |  ├─getGlobalInstallCommand.js
|    |  |  |  |  ├─getPkg.js
|    |  |  |  |  ├─getVersions.js
|    |  |  |  |  ├─inferRootOptions.js
|    |  |  |  |  ├─linkBin.js
|    |  |  |  |  ├─loadCommand.js
|    |  |  |  |  ├─loadLocalPreset.js
|    |  |  |  |  ├─loadPresetFromDir.js
|    |  |  |  |  ├─loadRemotePreset.js
|    |  |  |  |  ├─mergeDeps.js
|    |  |  |  |  ├─normalizeFilePaths.js
|    |  |  |  |  ├─rcPath.js
|    |  |  |  |  ├─readFiles.js
|    |  |  |  |  ├─registries.js
|    |  |  |  |  ├─setupDevProject.js
|    |  |  |  |  ├─shouldUseTaobao.js
|    |  |  |  |  ├─sortObject.js
|    |  |  |  |  ├─stringifyJS.js
|    |  |  |  |  ├─tryGetNewerRange.js
|    |  |  |  |  ├─writeFileTree.js
|    |  |  |  |  ├─codemods
|    |  |  |  |  |    ├─injectImports.js
|    |  |  |  |  |    └injectOptions.js
|    |  |  |  |  ├─__tests__
|    |  |  |  |  |     └extendJSConfig.spec.js
|    |  |  |  ├─promptModules
|    |  |  |  |       ├─babel.js
|    |  |  |  |       ├─cssPreprocessors.js
|    |  |  |  |       ├─e2e.js
|    |  |  |  |       ├─linter.js
|    |  |  |  |       ├─pwa.js
|    |  |  |  |       ├─router.js
|    |  |  |  |       ├─typescript.js
|    |  |  |  |       ├─unit.js
|    |  |  |  |       ├─vueVersion.js
|    |  |  |  |       ├─vuex.js
|    |  |  |  |       ├─__tests__
|    |  |  |  |       |     ├─babel.spec.js
|    |  |  |  |       |     ├─cssPreprocessors.spec.js
|    |  |  |  |       |     ├─e2e.spec.js
|    |  |  |  |       |     ├─linter.spec.js
|    |  |  |  |       |     ├─pwa.spec.js
|    |  |  |  |       |     ├─router.spec.js
|    |  |  |  |       |     ├─typescript.spec.js
|    |  |  |  |       |     ├─unit.spec.js
|    |  |  |  |       |     └vuex.spec.js
|    |  |  ├─bin
|    |  |  |  └vue.js
|    |  |  ├─__tests__
|    |  |  |     ├─Creator.spec.js
|    |  |  |     ├─Generator.spec.js
|    |  |  |     ├─Upgrader.spec.js
|    |  |  |     ├─args.spec.js
|    |  |  |     ├─invoke.spec.js
|    |  |  |     ├─options.spec.js
|    |  |  |     ├─preset.spec.js
|    |  |  |     ├─mock-preset-with-template
|    |  |  |     |             ├─preset.json
|    |  |  |     |             ├─prompts.js
|    |  |  |     |             ├─generator
|    |  |  |     |             |     ├─index.js
|    |  |  |     |             |     ├─template
|    |  |  |     |             |     |    └test.js
|    |  |  |     ├─mock-preset-with-readme
|    |  |  |     |            ├─generator.js
|    |  |  |     |            └preset.json
|    |  |  |     ├─mock-preset-with-async-generator
|    |  |  |     |                ├─preset.json
|    |  |  |     |                ├─prompts.js
|    |  |  |     |                ├─generator
|    |  |  |     |                |     ├─index.js
|    |  |  |     |                |     ├─template
|    |  |  |     |                |     |    └test.js
|    |  |  |     ├─mock-preset
|    |  |  |     |      ├─generator.js
|    |  |  |     |      ├─preset.json
|    |  |  |     |      └prompts.js
|    |  ├─babel-preset-app
|    |  |        ├─.npmignore
|    |  |        ├─README.md
|    |  |        ├─index.js
|    |  |        ├─package.json
|    |  |        ├─polyfillsPlugin.js
|    |  |        ├─__tests__
|    |  |        |     └babel-preset.spec.js
├─docs
|  ├─README.md
|  ├─zh
|  | ├─README.md
|  | ├─guide
|  | |   ├─README.md
|  | |   ├─browser-compatibility.md
|  | |   ├─build-targets.md
|  | |   ├─cli-service.md
|  | |   ├─creating-a-project.md
|  | |   ├─css.md
|  | |   ├─deployment.md
|  | |   ├─html-and-static-assets.md
|  | |   ├─installation.md
|  | |   ├─mode-and-env.md
|  | |   ├─plugins-and-presets.md
|  | |   ├─prototyping.md
|  | |   └webpack.md
|  | ├─dev-guide
|  | |     ├─plugin-dev.md
|  | |     ├─ui-api.md
|  | |     ├─ui-info.md
|  | |     └ui-localization.md
|  | ├─config
|  | |   └README.md
|  ├─ru
|  | ├─README.md
|  | ├─migrating-from-v3
|  | |         └README.md
|  | ├─guide
|  | |   ├─README.md
|  | |   ├─browser-compatibility.md
|  | |   ├─build-targets.md
|  | |   ├─cli-service.md
|  | |   ├─creating-a-project.md
|  | |   ├─css.md
|  | |   ├─deployment.md
|  | |   ├─html-and-static-assets.md
|  | |   ├─installation.md
|  | |   ├─mode-and-env.md
|  | |   ├─plugins-and-presets.md
|  | |   ├─prototyping.md
|  | |   ├─troubleshooting.md
|  | |   └webpack.md
|  | ├─dev-guide
|  | |     ├─generator-api.md
|  | |     ├─plugin-api.md
|  | |     ├─plugin-dev.md
|  | |     ├─ui-api.md
|  | |     ├─ui-info.md
|  | |     └ui-localization.md
|  | ├─core-plugins
|  | |      ├─README.md
|  | |      ├─babel.md
|  | |      ├─e2e-cypress.md
|  | |      ├─e2e-nightwatch.md
|  | |      ├─e2e-webdriverio.md
|  | |      ├─eslint.md
|  | |      ├─pwa.md
|  | |      ├─router.md
|  | |      ├─typescript.md
|  | |      ├─unit-jest.md
|  | |      ├─unit-mocha.md
|  | |      └vuex.md
|  | ├─config
|  | |   └README.md
|  ├─migrations
|  |     ├─migrate-from-v3.md
|  |     └migrate-from-v4.md
|  ├─guide
|  |   ├─README.md
|  |   ├─browser-compatibility.md
|  |   ├─build-targets.md
|  |   ├─cli-service.md
|  |   ├─creating-a-project.md
|  |   ├─css.md
|  |   ├─deployment.md
|  |   ├─html-and-static-assets.md
|  |   ├─installation.md
|  |   ├─mode-and-env.md
|  |   ├─plugins-and-presets.md
|  |   ├─prototyping.md
|  |   ├─troubleshooting.md
|  |   └webpack.md
|  ├─dev-guide
|  |     ├─generator-api.md
|  |     ├─plugin-api.md
|  |     ├─plugin-dev.md
|  |     ├─ui-api.md
|  |     ├─ui-info.md
|  |     └ui-localization.md
|  ├─core-plugins
|  |      ├─README.md
|  |      ├─babel.md
|  |      ├─e2e-cypress.md
|  |      ├─e2e-nightwatch.md
|  |      ├─e2e-webdriverio.md
|  |      ├─eslint.md
|  |      ├─pwa.md
|  |      ├─router.md
|  |      ├─typescript.md
|  |      ├─unit-jest.md
|  |      ├─unit-mocha.md
|  |      └vuex.md
|  ├─config
|  |   └README.md
|  ├─assets
|  |   ├─en-vue-cli-ui-schema.ai
|  |   └ru-vue-cli-ui-schema.ai
|  ├─.vuepress
|  |     ├─config.js
|  |     ├─styles
|  |     |   └index.styl
|  |     ├─public
|  |     |   ├─bit-wide.png
|  |     |   ├─cli-new-project.png
|  |     |   ├─cli-select-features.png
|  |     |   ├─config-ui.png
|  |     |   ├─custom-view.png
|  |     |   ├─favicon.png
|  |     |   ├─generator-template.png
|  |     |   ├─manifest.json
|  |     |   ├─plugin-search-item.png
|  |     |   ├─plugins.png
|  |     |   ├─prompts-example.png
|  |     |   ├─screenshot.png
|  |     |   ├─suggestion.png
|  |     |   ├─task-view.png
|  |     |   ├─tasks-ui.png
|  |     |   ├─ui-analyzer.png
|  |     |   ├─ui-browse-local-plugin.png
|  |     |   ├─ui-config-start.png
|  |     |   ├─ui-configuration-default.png
|  |     |   ├─ui-configuration.png
|  |     |   ├─ui-greet-task.png
|  |     |   ├─ui-new-project.png
|  |     |   ├─ui-plugin-refresh.png
|  |     |   ├─ui-project-manager.png
|  |     |   ├─ui-prompts.png
|  |     |   ├─ui-select-plugin.png
|  |     |   ├─vue-cli-ui-schema.png
|  |     |   ├─ru
|  |     |   | └vue-cli-ui-schema.png
|  |     |   ├─icons
|  |     |   |   ├─android-chrome-192x192.png
|  |     |   |   ├─android-chrome-512x512.png
|  |     |   |   ├─apple-touch-icon-120x120.png
|  |     |   |   ├─apple-touch-icon-152x152.png
|  |     |   |   ├─apple-touch-icon-180x180.png
|  |     |   |   ├─apple-touch-icon-60x60.png
|  |     |   |   ├─apple-touch-icon-76x76.png
|  |     |   |   ├─apple-touch-icon.png
|  |     |   |   ├─favicon-16x16.png
|  |     |   |   ├─favicon-32x32.png
|  |     |   |   ├─msapplication-icon-144x144.png
|  |     |   |   ├─mstile-150x150.png
|  |     |   |   └safari-pinned-tab.svg
├─__mocks__
|     ├─fs.js
|     └inquirer.js
├─.circleci
|     └config.yml
