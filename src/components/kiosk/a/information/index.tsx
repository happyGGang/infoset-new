import React from 'react';
import { Container, ContainerX } from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const InformationA = () => {
  const { isLandscape } = useOrientationStore();

  return <>{isLandscape ? <ContainerX /> : <Container />}</>;
};

export default InformationA;
