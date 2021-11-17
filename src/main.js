import "@babel/polyfill";
import React from "react";
import  ReactDOM from "react-dom";
import Router from "@/routes/index";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.less';

ReactDOM.render(
    <ConfigProvider  locale={zhCN}>
        <Router/>,
    </ConfigProvider>,
    document.getElementById("root")
);



