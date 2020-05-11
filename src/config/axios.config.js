import URL from "./URL.js";
import axios from "axios";
import store from "../store/index";
import { showLoading, hideLoading } from "./loading";
import Qs from "qs";
axios.defaults.baseURL = URL.baseUrl;
axios.defaults.timeout = 50000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset = UTF-8";


axios.interceptors.request.use(config => {
    if(config.method === "post"){
        config.data = Qs.stringify(config.data);
    }
    // localStorage 防止页面刷新 store 中的信息丢失
    const token = store.state.token || localStorage.getItem("token");
    if(token){
        token && (config.headers.Authorization = token);

    }
    showLoading();
    

    return config;

}, error => {
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    hideLoading();
    if(response.status === 200 ){

        return Promise.resolve(JSON.parse(JSON.stringify(response.data)));
    }
    return Promise.reject(response);
    
    
}, error => {
    hideLoading();
    return Promise.reject(error);
});







export default axios;
