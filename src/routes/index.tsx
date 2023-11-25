import React from 'react';
import { useRoutes } from 'react-router-dom';
import { App } from '@/App';

// eslint-disable-next-line require-jsdoc
export default function routes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRoutes([
    {
      path: '/',
      element: <App />
    }
  ]);
}
