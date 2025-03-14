import React from 'react';
import { Container, Time, Date, Message, Caption, Arrow } from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';

const LibraryWelcomeMessageA = () => {
  return (
    <Container>
      <Time>{getCurrentTime()}</Time>
      <Date>{getCurrentDate()}</Date>
      <Message>welcome</Message>
      <Caption>INFOSET LIBRARY</Caption>
    </Container>
  );
};

export default LibraryWelcomeMessageA;
