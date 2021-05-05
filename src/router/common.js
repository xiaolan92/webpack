export const baseRoutes = [
    {
        path: "/",
        redirect: {
            name: "index"
        }

    },
    {
        path: "/index",
        component: () => import("@/views/index/index.vue"),
        name: "index",
        meta: {
            title: "首页"
        }
    }
];
