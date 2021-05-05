export const registerGlobalComponents = (app) => {
    let contexts = require.context(".", false, /\.vue$/);
    contexts.keys().forEach(componnet => {
        let componentEntity = contexts(componnet).default;
        app.component(componentEntity.name, componentEntity);
    });

};