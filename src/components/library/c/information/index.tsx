import React from 'react';
import { Container, Date, Time } from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';

const Information = () => {
  return (
    <Container>
      <div className={'time_date_wrapper'}>
        <Time>{getCurrentTime()}</Time>
        <Date>{getCurrentDate()}</Date>
      </div>
    </Container>
  );
};

export default Information;
