import React from 'react';
import { Container, ContainerX } from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Main = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>{isLandscape ? <ContainerX></ContainerX> : <Container></Container>}</>
  );
};

export default Main;
