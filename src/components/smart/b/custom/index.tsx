import React from 'react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import { Container, ContainerX } from './index.styled';

const Custom = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>{isLandscape ? <ContainerX></ContainerX> : <Container></Container>}</>
  );
};

export default Custom;
