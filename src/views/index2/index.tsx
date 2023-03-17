import React, { FC, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';
import { Decrement } from './thunks';
import { getNameLoading } from './selectors';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Index2: FC = () => {
  const ref = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();
  const num = useSelector(getNameLoading);
  const [inView] = useIntersectionObserver(ref);

  useEffect(() => {
    console.log(inView, 111);
  }, [inView]);
  return (
    <Container>
      <div>{params.id}</div>
      {num ? <div>111</div> : <div>2222</div>}
      <Button
        type='primary'
        onClick={() => {
          // eslint-disable-next-line new-cap
          dispatch(Decrement(1));
        }}
      >
        点击我
      </Button>
      <IntoView ref={ref}>111</IntoView>
      <IntoView1 ref={ref}>111</IntoView1>
    </Container>
  );
};

const Container = styled.div`
  height: 2000px;
`;
const IntoView = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 1000px;
  background: red;
`;

const IntoView1 = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 1000px;
  background: #0de0af;
`;
