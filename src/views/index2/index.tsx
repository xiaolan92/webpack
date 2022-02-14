import React from 'react';
import { createBrowserHistory } from 'history';

export const Index2 = () => {
  const history = createBrowserHistory();

  return (
    <div onClick={() => {
      history.back();
    }}>{'武汉'}</div>

  );
};
