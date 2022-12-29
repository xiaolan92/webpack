import React, { FC } from 'react';
import styled from 'styled-components';
import {  Outlet } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
  cube.position.set(0, 1, 0);
  cube.scale.x = 10;

  const controls = new OrbitControls( camera, renderer.domElement );
  camera.position.set(0, 20, 13);
  controls.update();

  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);
  // eslint-disable-next-line require-jsdoc
  function animate() {
    requestAnimationFrame( animate );
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
