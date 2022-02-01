import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "@/store/index";
import Router from "@/routes/index";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.less';
import "./components/icon/index";
let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Router />,
        </ConfigProvider>,
    </Provider>,
    document.getElementById("root")
);



