import '@babel/polyfill';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { store } from './store';
import Router from './routes/index';
import './components/icon/index';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
/* eslint-disable  */
 console.log('接口地址', process.env.REACT_APP_API);

root.render(
  <Provider store={store}>
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  </Provider>,
);
