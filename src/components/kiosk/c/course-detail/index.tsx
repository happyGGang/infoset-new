import React from 'react';
import { Container, Button, ContainerX, ButtonX } from './index.styled';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const CourseDetail = () => {
  const { toggleSelectedItem } = useSelectedItemStore();
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <ButtonX>신청하기</ButtonX>
        </ContainerX>
      ) : (
        <Container>
          <Button>신청하기</Button>
        </Container>
      )}
    </>
  );
};

export default CourseDetail;
