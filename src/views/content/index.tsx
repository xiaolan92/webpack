import React, { FC } from 'react';
import styled from 'styled-components';
import {  Outlet } from 'react-router-dom';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const Content:FC =  () => {
  const scene = new THREE.Scene();
  const camera =  new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 7;
  // const controls = new OrbitControls( camera, renderer.domElement );
  // eslint-disable-next-line require-jsdoc
  function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  animate();

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
