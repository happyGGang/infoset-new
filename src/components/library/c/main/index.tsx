import React from 'react';
import { Container, Time, Date, Message, Caption } from './index.styled';
import { getCurrentTime, getFullCurrentDate } from '../../../../util/date-time';

const Main = () => {
  return (
    <Container>
      <Time>{getCurrentTime()}</Time>
      <Date>{getFullCurrentDate()}</Date>
      <Message>
        <span>인포셋도서관</span>
        <br />
        방문을 환영합니다
      </Message>
      <Caption>welcome to infoset library</Caption>
    </Container>
  );
};

export default Main;
