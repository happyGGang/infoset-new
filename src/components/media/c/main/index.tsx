import React from 'react';
import {
  Ticker,
  Message,
  Caption,
  Container,
  TickerMessage,
  Header,
  Wrapper,
} from './index.styled';
import {
  getCurrentTime,
  getSimpleCurrentDate,
} from '../../../../util/date-time';

const MediaWelcomeMessageC = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <div className={'kr'}>환영메세지</div>
          <div className={'en'}>WELCOME</div>
        </Wrapper>
        <Wrapper>
          <div className={'time'}>{getCurrentTime()}</div>
          <div className={'date'}>{getSimpleCurrentDate()}</div>
        </Wrapper>
      </Header>
      <Message>
        <span>인포셋도서관</span>
        <br />
        방문을 환영합니다.
      </Message>
      <Caption>welcome to infoset LIBRARY</Caption>
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

export default MediaWelcomeMessageC;
