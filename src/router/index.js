import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "../store/index";
import MyIndex from "../views/index/index";

const router = new VueRouter({
    linkActiveClass:"active",
    routes:[
        {
            path:"/",
            redirect:{
                name:"index"
            }

        },
        {
            path:"/index",
            component: MyIndex,
            name:"index",
            meta:{
                title:"首页"
            }
        },{
            path:"/login",
            component: () => import(/* webpackChunkName:"login"  */ "../views/login/login.vue"),
            name:"login",
            meta:{
                title:"登陆"
            }
            
        }
    ],
    scrollBehavior(to, from, savedPosition){
        if (savedPosition){
            return savedPosition;

        }
        return {x:0,y:0};
        
    }

});

router.beforeEach((to,from,next) => {
    if(to.meta && to.meta.isLogin){
        if(store.getters.token || localStorage.getItem("token")){
            if(!store.state.userInfo){
                store.dispatch("setUserInfo").then(() => {
                    next();
                    return;

                }).catch(error => {
                    console.log(error);
                });
            }else{
                next();

            }
            
        }else{
            next({
                name:"login",
                query:{
                    redirect:to.fullPath
                }
            });
        }
    }else{
        next();
    }
    // 切换不同路由间的标题
    if(to.meta && to.meta.title && (document.title !== to.meta.title)){
        document.title = to.meta.title;
    }

});


export default router;