* ### 本配置基于webpack v4.29.6 ###

```
          
├─build                     webpack配置目录
│      webpack.base.config.js
│      webpack.dev.config.js
│      webpack.dll.config.js
│      webpack.prod.config.js
│      
├─dist                       打包输出目录
│  │  main.html
│  │  
│  ├─css
│  │      demo.css
│  │      
│  ├─images
│  │      fe97e68e.jpg
│  │      
│  ├─js
│  │      main.bundle.e08f2d39.js
│  │      main.bundle.e08f2d39.js.map
│  │      
│  └─lib                     第三方包引用目录
│          lib.dll.js
│          lib.manifest.json
├─src
│  │  App.vue
│  │  index.main.tpl.html
│  │  main.js                应用入口文件
│  │  
│  ├─common                  应用公共模块目录
│  │  ├─images
│  │  │      demo.jpg
│  │  │      
│  │  ├─js
│  │  │      common.js
│  │  │      
│  │  └─scss
│  │          common.scss
│  │          
│  ├─components              应用公共组件目录
│  │      demo.vue
│  │      
│  ├─config                  应用配置目录
│  │  ├─axiosConfig
│  │  │      axiosConfig.js
│  │  │      
│  │  └─serverApi
│  │          serverApi.js
│  │          
│  ├─images
│  │      demo.jpg
│  │      
│  ├─router
│  │      index.js
│  │      
│  ├─store
│  │      actions.js
│  │      getters.js
│  │      index.js
│  │      mutations.js
│  │      mutation_type.js
│  │      state.js
│  │      
│  └─wechat                   微信开发目录
|─status                      webpack打包性能分析目录
|   |————status_prod.json
|
|   .babelrc
│  .eslintignore
│  .eslintrc.json
│  .gitignore
│  LICENSE.txt
│  package-lock.json
│  package.json
│  postcss.config.js
│  README.md

```
### webpack.dll.config.js为打包第三方包,打包项目前先`npm run dll`,避免每次打包项目时都打包第三方包(jquery,vue,vuex,vue-router等) ###
