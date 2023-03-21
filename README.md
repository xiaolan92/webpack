- ### 本配置基于 webpack v5.76.1


### webpack.dll.config.js 为打包第三方包,打包项目前先`pnpm run dll`,避免每次打包项目时都打包第三方包

###

如果是使用docker,则使用如下命令启动服务:
` docker-compose --env-file <环境文件> up -d `;

`eg: 'docker-compose --env-file .env.test up -d'`
