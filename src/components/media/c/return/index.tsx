import React from 'react';
import { Container, Header, Wrapper } from './index.styled';
import {
  getCurrentTime,
  getSimpleCurrentDate,
} from '../../../../util/date-time';

const Return = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <div className={'kr'}>대출반납일</div>
          <div className={'en'}>Book loan return date</div>
        </Wrapper>
        <Wrapper>
          <div className={'time'}>{getCurrentTime()}</div>
          <div className={'date'}>{getSimpleCurrentDate()}</div>
        </Wrapper>
      </Header>
    </Container>
  );
};

export default Return;
