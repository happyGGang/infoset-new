import React from 'react';
import {
  ClockWrapper,
  Container,
  Header,
  VideoWrapper,
  WeatherWrapper,
  Wrapper,
  Title,
  Clock,
  Date,
  Time,
  Perceived,
  WeatherIcon,
  Temperature,
  WeatherDescription,
  ContentWrapper,
} from './index.styled';
import video from '../../../../assets/img/promotion.mp4';
import {
  getCurrentTime,
  getDetailedCurrentDate,
  getSimpleCurrentDate,
} from '../../../../util/date-time';
import useClock from '../../../../hook/useClock';

const PromotionC = () => {
  const { hourDeg, minuteDeg, secondDeg } = useClock();

  return (
    <Container>
      <Header>
        <Wrapper>
          <div className={'kr'}>홍보동영상</div>
          <div className={'en'}>PROMOTION</div>
        </Wrapper>
        <Wrapper>
          <div className={'time'}>{getCurrentTime()}</div>
          <div className={'date'}>{getSimpleCurrentDate()}</div>
        </Wrapper>
      </Header>
      <ContentWrapper>
        <ClockWrapper>
          <Title>infoset</Title>
          <Clock>
            <div
              className="hour"
              style={{ transform: `rotate(${hourDeg}deg)` }}
            />
            <div
              className="minute"
              style={{ transform: `rotate(${minuteDeg}deg)` }}
            />
            <div
              className="second"
              style={{ transform: `rotate(${secondDeg}deg)` }}
            />
          </Clock>
          <Date>{getDetailedCurrentDate()}</Date>
          <Time>{getCurrentTime()}</Time>
        </ClockWrapper>
        <VideoWrapper src={video} autoPlay loop muted />
        <WeatherWrapper>
          <Title>today’s weather</Title>
          <Perceived>체감 31.4°</Perceived>
          <WeatherIcon />
          <Temperature>30.8°</Temperature>
          <WeatherDescription>구름</WeatherDescription>
        </WeatherWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default PromotionC;
