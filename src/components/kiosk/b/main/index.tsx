import React from 'react';
import {
  Container,
  Time,
  Date,
  Message,
  Caption,
  ContainerX,
  TimeX,
  DateX,
  MessageX,
  CaptionX,
} from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Main = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <TimeX>{getCurrentTime()}</TimeX>
          <DateX>{getCurrentDate()}</DateX>
          <MessageX>인포셋 도서관에 오신 것을 환영합니다.</MessageX>
          <CaptionX>WELCOME TO INFOSET LIBRARY</CaptionX>
        </ContainerX>
      ) : (
        <Container>
          <Time>{getCurrentTime()}</Time>
          <Date>{getCurrentDate()}</Date>
          <Message>
            인포셋 도서관에
            <br />
            오신 것을 환영합니다.
          </Message>
          <Caption>WELCOME TO INFOSET LIBRARY</Caption>
        </Container>
      )}
    </>
  );
};

export default Main;
