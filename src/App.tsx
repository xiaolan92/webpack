import React, { FC } from 'react';
import styled from 'styled-components';
import { Header } from './views/header/header';
import { SideBar } from './views/sideBar/SideBar';
import { Content } from './views/content/index';


export const App: FC = () => {
  return (
    <>
    <Header/>
    <Main>
    <SideBar/>
    <Content/>
    </Main>

    </>

  );
};
const Main = styled.div`
height: calc(100vh - 50px);
display: flex;
`;
