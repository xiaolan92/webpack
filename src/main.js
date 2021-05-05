import "core-js/stable";
import "regenerator-runtime/runtime";
import { createApp } from "vue";
import { store } from "@/store/index";
import { router } from "@/router/index";
import { registerGlobalComponents } from "@/components/global/index";
import App from "@/App.vue";
import "@icons/index";



const app = createApp(App);
app.use(router);
app.use(store);
registerGlobalComponents(app);

app.mount("#app");





