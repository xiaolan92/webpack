* ### 本配置基于webpack v5.34.0 ###

```
          
├─build                     webpack配置目录
│      
│      
├─dist                       打包输出目录
│  │      
│  └─lib                     第三方包引用目录
│          
├─src
│  │——App.vue
│  │——index.html
│  │——main.js                入口文件
│  │  
│  ├─common                  公共模块
│  │          
│  ├─components              公共组件
│  │     |
|  |     |---global  全局组件
│  │      
│  ├─config                  配置目录
│  │
|  |
|  |--- icons  svgIcons
│  │          
│  │      
│  ├─router                  路由文件
│  │      
│  │      
│  ├─store                   状态管理
│  |    
│  |——api                    api管理目录
|  |
|  |——views                  视图
|  |
|  |——static                 静态文件
|
|
|  
|─status                     webpack打包性能分析目录
|   
|
|———.babelrc
│———.eslintignore
│———.eslintrc.json          eslint规范
│———.gitignore
│———LICENSE.txt
│———package-lock.json
│———package.json
│———postcss.config.js
│———README.md

```
### webpack.dll.config.js为打包第三方包,打包项目前先`npm run dll`,避免每次打包项目时都打包第三方包(jquery,vue,vuex,vue-router等) ###
