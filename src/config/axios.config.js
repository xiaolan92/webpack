import { baseUrl } from "./baseUrl";
import axios from "axios";
import store from "../store/index";
import Qs from "qs";
import { Message,MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "../router/index.js";
axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 1500;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset = UTF-8";


axios.interceptors.request.use(config => {
    if(config.method === "post" && config.headers["Content-type"] !== "application/json"){
        config.data = Qs.stringify(config.data);
    }
    const token = store.getters.getToken || localStorage.getItem("token");
    if(token){
        config.headers["token"] = token;

    }
    

    return config;

}, error => {
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    if(response.status === 200){
        // token 过期 code可跟后端商量
        if(response.data.code === 403){
            store.commit({
                type:"setToken",
                token:null
            });
            MessageBox.confirm("登陆已过期, 请重新登陆","提示",{
                confirmButtonText: "确定",
                type:"warning",
                center:true,
                showClose:false,
                showCancelButton:false,
                callback:() => {
                    router.push({
                        name:"login",
                        query:{
                            redirect: router.currentRoute.fullPath 

                        }

                    });

                }
            });
        }
        return Promise.resolve(response.data);
    }
    return Promise.reject(response);
    
     
    
    
}, error => {
    if(error.response && error.response.status){
        switch (error.response.status){
        case 400:
            Message.error({
                message:"错误请求",
                center:true
            });
            break;
        case 403:
            Message.error({
                message:"拒绝访问",
                center: true
            });
            break;
        case 404:
            Message.error({
                message:"请求错误,未找到该资源",
                center: true
            });
            break;
        case 500:
            Message.error({
                message: "服务器出错",
                center: true
            });
            break;
        case 502:
            Message.error({
                message: "网络错误",
                center: true
            });
            break;
        default:
            Message.error({
                message:`网络错误${error.response.status}`,
                center: true

            });

        }
    }else{
        Message.error({
            message:"连接服务器失败",
            center:true
        });
    }
    return Promise.reject(error);

});







export default axios;
