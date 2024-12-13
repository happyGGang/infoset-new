import React from 'react';
import { Container, Header, Wrapper } from './index.styled';
import 'swiper/css/effect-fade';
import 'swiper/css';
import {
  getCurrentTime,
  getSimpleCurrentDate,
} from '../../../../util/date-time';

const BookInformation = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <div className={'kr'}>인기도서</div>
          <div className={'en'}>BEST BOOK</div>
        </Wrapper>
        <Wrapper>
          <div className={'time'}>{getCurrentTime()}</div>
          <div className={'date'}>{getSimpleCurrentDate()}</div>
        </Wrapper>
      </Header>
    </Container>
  );
};

export default BookInformation;
