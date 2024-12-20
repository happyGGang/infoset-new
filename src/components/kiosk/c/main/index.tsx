import React from 'react';
import {
  Container,
  Time,
  Date,
  Message,
  Caption,
  Arrow,
  ContainerX,
  TimeX,
  DateX,
  MessageX,
  CaptionX,
  ArrowX,
} from './index.styled';
import { getCurrentTime, getFullCurrentDate } from '../../../../util/date-time';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Main = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <TimeX>{getCurrentTime()}</TimeX>
          <DateX>{getFullCurrentDate()}</DateX>
          <MessageX>
            <span>인포셋도서관</span>
            <br />
            방문을 환영합니다
          </MessageX>
          <CaptionX>welcome to infoset library</CaptionX>
          <ArrowX />
        </ContainerX>
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
