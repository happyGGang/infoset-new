import React from 'react';
import { Container, ContainerX } from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const InformationB = () => {
  const { isLandscape } = useOrientationStore();
  return <>{isLandscape ? <ContainerX /> : <Container />}</>;
};

export default InformationB;
