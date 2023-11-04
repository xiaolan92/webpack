import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '@/App';

const Index2 = lazy(() => import('@/views/index2/index'));

const routes = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<App />}>
        <Route
          path='index2/:id'
          element={
            <Suspense fallback={<span>加载中...</span>}>
              <Index2 />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  </Router>
);
export default routes;
