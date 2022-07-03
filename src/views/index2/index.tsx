import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { Decrement } from './thunks';
import { getNameLoading } from './selectors';

export const Index2:FC = () => {
  const params = useParams();
  const dispatch  = useDispatch();
  const num = useSelector(getNameLoading);
  useEffect(() => {
    console.log(111);
  });
  return (
    <>
    <div >{ params.id }</div>
     {
      num ? <div>111</div> : <div>2222</div>
     }
    <Button type='primary' onClick={() => {
      // eslint-disable-next-line new-cap
      dispatch(Decrement(1));
    }}>点击我</Button>
    </>

  );
};
