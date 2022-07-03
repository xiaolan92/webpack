import React, { FC, createContext, useContext } from 'react';
import styled from 'styled-components';
import SvgIcon from './components/SvgIcon';
import { useDispatch } from 'react-redux';
import { increment } from './views/index3/slice';
import { useNavigate } from 'react-router-dom';

export const Context = createContext<string>('1');
export const App: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container name="xiaolan">
       <Context.Provider value='5'>
          <Child/>
       </Context.Provider>

      <Wrpper onClick={() => navigate(`/index2/${5}`)}>
        2222
      </Wrpper>
      <SvgIcon iconClass="avatar" />
      <div onClick={() => dispatch(increment())}>index3</div>
    </Container>

  );
};
const Child:FC = () => {
  const value = useContext(Context);
  return (
     <div>{value}</div>
  );
};

const Container = styled.div<{ name?: string }>`
  width:${(props) => (props.name ? '200px' : '100px')};
  height:200px;
  background:red;

`;
const Wrpper = styled(Container)`
  color:black;
  font-weight:bold;
  background:#78e710;
`;
