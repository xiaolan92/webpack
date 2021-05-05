import { createRouter, createWebHashHistory } from "vue-router";
import { baseRoutes } from "./common";
import configRouters from "./modules/index";

export const router = createRouter({
    linkActiveClass: "active",
    history: createWebHashHistory(),
    routes: baseRoutes.concat(configRouters),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;

        }
        return { left: 0, top: 0 };

    }

});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title && (document.title !== to.meta.title)) {
        document.title = to.meta.title;
    }
    next();

});
