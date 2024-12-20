import React from 'react';
import { Container, Button, ButtonX, ContainerX } from './index.styled';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const CourseDetail = () => {
  const { toggleSelectedItem } = useSelectedItemStore();
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <ButtonX onClick={() => toggleSelectedItem(9)}>신청하기</ButtonX>
        </ContainerX>
      ) : (
        <Container>
          <Button onClick={() => toggleSelectedItem(9)}>신청하기</Button>
        </Container>
      )}
    </>
  );
};

export default CourseDetail;
