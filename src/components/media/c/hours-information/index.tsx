import React from 'react';
import { Container, Header, Wrapper, Boat } from './index.styled';
import {
  getCurrentTime,
  getSimpleCurrentDate,
} from '../../../../util/date-time';

const HoursInformation = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <div className={'kr'}>이용안내</div>
          <div className={'en'}>HOURS OF OPERATION</div>
        </Wrapper>
        <Wrapper>
          <div className={'time'}>{getCurrentTime()}</div>
          <div className={'date'}>{getSimpleCurrentDate()}</div>
        </Wrapper>
      </Header>
      <Boat />
    </Container>
  );
};

export default HoursInformation;
