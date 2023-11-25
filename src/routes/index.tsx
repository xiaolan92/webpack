import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { App } from '@/App';

const Index2 = lazy(() => import('@/views/index2/index'));

// eslint-disable-next-line require-jsdoc
export default function routes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRoutes([
    {
      path: '/',
      element: <App />
    },
    {
      path: 'index2/:id',
      element: <Index2 />
    }
  ]);
}
