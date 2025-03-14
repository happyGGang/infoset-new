import React from 'react';
import {
  Date,
  Time,
  Ticker,
  Message,
  Caption,
  Container,
  TickerMessage,
} from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';

const MediaWelcomeMessageA = () => {
  return (
    <Container>
      <Time>{getCurrentTime()}</Time>
      <Date>{getCurrentDate()}</Date>
      <Caption>infoset LIBRARY</Caption>
      <Message>인포셋도서관에 오신 것을 환영합니다.</Message>
      <Ticker>
        <TickerMessage>
          도서관초대석 불편한편의점 일정이 김호연 작가의 개인사정으로 인해
          변경되었습니다. 이용에 참고하여 주시기 바랍니다. 여기는 텍스트
          흘러가는 티커영역 입니다. 긴급 공지용으로 사용해주세요!
        </TickerMessage>
      </Ticker>
    </Container>
  );
};

export default MediaWelcomeMessageA;
