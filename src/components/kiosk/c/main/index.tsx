import React from 'react';
import { Container, Time, Date, Message, Caption, Arrow } from './index.styled';
import {
  getCurrentDate,
  getCurrentTime,
  getFullCurrentDate,
} from '../../../../util/date-time';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Main = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <div>메인 가로 모드</div>
      ) : (
        <Container>
          <Time>{getCurrentTime()}</Time>
          <Date>{getFullCurrentDate()}</Date>
          <Message>
            <span>인포셋도서관</span>
            <br />
            방문을 환영합니다
          </Message>
          <Caption>welcome to infoset library</Caption>
          <Arrow />
        </Container>
      )}
    </>
  );
};

export default Main;
