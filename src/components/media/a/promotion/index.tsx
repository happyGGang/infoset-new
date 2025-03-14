import React from 'react';
import {
  ClockWrapper,
  Container,
  Header,
  VideoWrapper,
  WeatherWrapper,
  Title,
  Clock,
  Date,
  Time,
  Perceived,
  WeatherIcon,
  Temperature,
  WeatherDescription,
  WeatherTitle,
} from './index.styled';
import video from '../../../../assets/img/promotion.mp4';
import {
  getCurrentTime,
  getDetailedCurrentDate,
} from '../../../../util/date-time';
import useClock from '../../../../hook/useClock';

const PromotionA = () => {
  const { hourDeg, minuteDeg, secondDeg } = useClock();

  return (
    <Container>
      <Header>
        <div className={'kr'}>홍보동영상</div>
        <div className={'en'}>Promotional Video</div>
      </Header>
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
        <WeatherTitle>today’s weather</WeatherTitle>
        <Perceived>체감 31.4°</Perceived>
        <WeatherIcon />
        <Temperature>30.8°</Temperature>
        <WeatherDescription>구름</WeatherDescription>
      </WeatherWrapper>
    </Container>
  );
};

export default PromotionA;
