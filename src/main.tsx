import '@babel/polyfill';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import './components/icon/index';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
/* eslint-disable  */
console.log('接口地址', process.env.REACT_APP_API)

root.render(
    <ConfigProvider>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ConfigProvider>
)
