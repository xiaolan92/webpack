import Vue, { AsyncComponent } from "vue";
import VueRouter, { RouteConfig, Route, NavigationGuardNext } from "vue-router";
Vue.use(VueRouter);
import home from "@/views/index/index.vue";

const routes: RouteConfig[] = [
    {
        path: "/",
        redirect: {
            name: "index"
        }
    },
    {
        path: "/index",
        component:home,
        name: "index",
    }

];
const router = new VueRouter({
    linkActiveClass: "active",
    routes
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
    if (!localStorage.getItem("token") && to.name !== "login") {
        next({
            name: "login",
            query: {
                redirect: to.fullPath
            }
        });
        return;

    }

    next();




});


export default router;