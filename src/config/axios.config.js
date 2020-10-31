import { baseUrl } from "./baseUrl";
import axios from "axios";
import Qs from "qs";
import { Message, MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "../router/index.js";
axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 1500;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset = UTF-8";


axios.interceptors.request.use(config => {
    if (config.method === "post" && config.headers["Content-type"] !== "application/json") {
        config.data = Qs.stringify(config.data);
    }
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = "Bearer  " + token;

    }


    return config;

}, error => {
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    if (response.status === 200) {
        // code 401 用户未登陆
        if (response.data.code === 401) {
            MessageBox.confirm("请登陆", "提示", {
                confirmButtonText: "确定",
                type: "warning",
                center: true,
                showClose: false,
                showCancelButton: false,
                callback: () => {
                    router.push({
                        name: "login",
                        query: {
                            redirect: router.currentRoute.fullPath

                        }

                    });

                }
            });
        }
        return Promise.resolve(response.data);
    }




}, error => {
    const rules = [
        {
            code: 400,
            msg: "错误请求"
        },
        {
            code: 403,
            msg: "拒绝访问"
        },
        {
            code: 404,
            msg: "请求错误,未找到该资源"
        },
        {
            code: 500,
            msg: "服务器错误"
        }
    ];
    if (error.response && error.response.status) {
        let statusCode = error.response.status;
        for (let i = 0; i < rules.length; i++) {
            if (rules[i].code === statusCode) {
                Message.error({
                    message: rules[i].msg,
                    center: true
                });
                return Promise.reject(error);
            }

        }
        Message.error({
            message: `网络错误${error.response.status}`,
            center: true

        });
        return Promise.reject(error);
    } 
    Message.error({
        message: "连接服务器失败",
        center: true
    });
    
    return Promise.reject(error);

});







export default axios;
