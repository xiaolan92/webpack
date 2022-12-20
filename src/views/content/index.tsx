import React, { FC } from 'react';
import styled from 'styled-components';
import {  Outlet } from 'react-router-dom';
import * as THREE from 'three';

export const Content:FC =  () => {
  new THREE.Scene();
  new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  return (
    <Container>
      <Outlet/>
    </Container>
  );
};

const Container = styled.div`
  background: white;
  width: calc(100% - 207px);
`;
