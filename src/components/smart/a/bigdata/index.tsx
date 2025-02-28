import React from 'react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import { Container, ContainerX } from './index.styled';

const Bigdata = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>{isLandscape ? <ContainerX></ContainerX> : <Container></Container>}</>
  );
};

export default Bigdata;
