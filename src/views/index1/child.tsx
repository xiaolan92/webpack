import React, {
  useState, memo, useEffect, useContext, useRef, Profiler,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Context } from './context';

const Son = (props) => {
  const count = useContext(Context);
  const { forwardRef } = props;
  const onRenderFn = (...agrs) => console.log(agrs);
  return (
        <Profiler id="test" onRender={ onRenderFn }>
        <div ref={forwardRef}>{ count }子元素{ props.value }</div>
        </Profiler>
  );
};

export const Child = React.forwardRef((props, ref) => <Son {...props} forwardRef={ref}></Son>);
