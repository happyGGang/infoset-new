import React from 'react';
import { Container, Button } from './index.styled';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const CourseDetail = () => {
  const { toggleSelectedItem } = useSelectedItemStore();
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <div>강좌 상세 가로 모드</div>
      ) : (
        <Container>
          <Button onClick={() => toggleSelectedItem(9)}>신청하기</Button>
        </Container>
      )}
    </>
  );
};

export default CourseDetail;
