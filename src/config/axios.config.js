import { baseUrl } from "./baseUrl";
import axios from "axios";
import Qs from "qs";
import { createApp } from "vue";
import { Toast } from "vant";
axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 1500;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset = UTF-8";

const app = createApp();
app.use(Toast);

// 提示框
let fail = (msg) => {
    return Toast.fail({
        message: msg,
        icon: "none",
        forbidClick: true,
    });
};


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
        return Promise.resolve(response.data);
    }
    return Promise.reject(response);




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
                fail(rules[i].msg);
                return Promise.reject(error);
            }

        }

        fail(`网络错误${error.response.status}`);
        return Promise.reject(error);
    }

    fail("连接服务器失败");

    return Promise.reject(error);

});







export default axios;
