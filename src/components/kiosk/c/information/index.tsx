import React from 'react';
import { Container } from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Information = () => {
  const { isLandscape } = useOrientationStore();

  return <>{isLandscape ? <div>이용안내 가로 모드</div> : <Container />}</>;
};

export default Information;
