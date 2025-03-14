import React from 'react';
import { Container, Time, Date, Message, Caption } from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';

const LibraryWelcomeMessageB = () => {
  return (
    <Container>
      <Time>{getCurrentTime()}</Time>
      <Date>{getCurrentDate()}</Date>
      <Message>
        인포셋도서관에
        <br />
        오신 것을 환영합니다.
      </Message>
      <Caption>WELCOME TO INFOSET LIBRARY</Caption>
    </Container>
  );
};

export default LibraryWelcomeMessageB;
