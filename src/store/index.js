import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "../config/axios.config";
import userInfo from "../api/login";

const store = new Vuex.Store({
    strict:true,
    state: {
        token:"",
        userInfo:{}
    },
    getters:{
        getToken : state => state.token,
        // 获取用户信息,可根据后端给的接口字段进行相应的调整
        getUserNmae : state => state.userInfo.name

    },
    mutations: {
        setToken(state,payLoad){
            state.token = payLoad.token;
            localStorage.setItem("token",payLoad.token);

        },
        setUserInfoSync (state,payLoad){
            state.userInfo = payLoad.userInfo;

        }
        
    },
    actions:{
        // 使用用户token获取用户信息
        setUserInfo ({commit}){
            // 根据接口文档变更请求方式
            axios.post(userInfo).then(res => {
                commit({
                    type:"setUserInfoSync",
                    userInfo: res.userInfo
                });
                return;
            }).catch(error => {
                console.log(error);
            });


        }
        
    }



});

export default store;