import "@babel/polyfill";
import Vue from "vue";
 import store from "./store/index";
 import router from "./routes/index";
import app from "./App.vue";
import VueAxios from "vue-axios";
import axios from "./config/axios.config.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.use(VueAxios,axios);


new Vue({
    el: "#app",
    store,
    router,
    components: {
        app
    }
});




