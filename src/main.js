import '@babel/polyfill';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { store } from './store/index';
import Router from './routes/index';
import 'antd/dist/antd.less';
import './components/icon/index';

const container = document.getElementById('root');
const root = createRoot(container);
/* eslint-disable  */
 console.log('接口地址', process.env.REACT_APP_API);

root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  </Provider>,
);
