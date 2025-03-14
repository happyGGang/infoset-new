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
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const KioskWelcomeMessageA = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <TimeX>{getCurrentTime()}</TimeX>
          <DateX>{getCurrentDate()}</DateX>
          <MessageX>welcome</MessageX>
          <CaptionX>INFOSET LIBRARY</CaptionX>
          <ArrowX />
        </ContainerX>
      ) : (
        <Container>
          <Time>{getCurrentTime()}</Time>
          <Date>{getCurrentDate()}</Date>
          <Message>welcome</Message>
          <Caption>INFOSET LIBRARY</Caption>
          <Arrow />
        </Container>
      )}
    </>
  );
};

export default KioskWelcomeMessageA;
