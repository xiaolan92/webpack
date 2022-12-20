import React, { FC } from 'react';
import styled from 'styled-components';
export const SideBar:FC = () => {
  return (
    <Container>侧边栏</Container>
  );
};

const Container  = styled.div`
width: 207px;
height: 100%;
background: white;
box-shadow: rgba(37, 37, 37, 0.05) 0px 0px 5px inset;
`;
