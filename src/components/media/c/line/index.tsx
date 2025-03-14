import React, { useState, useRef } from 'react';
import {
  Caption,
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  Title,
  Header,
  Wrapper,
} from './index.styled';
import { line_list } from '../../../../constants/line.constants';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import {
  getCurrentTime,
  getSimpleCurrentDate,
} from '../../../../util/date-time';

const LineC = () => {
  const [animateText, setAnimateText] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    setAnimateText(false);
    setTimeout(() => setAnimateText(true), 50);
  };

  return (
    <Container>
      <Header>
        <Wrapper>
          <div className={'kr'}>책속한줄</div>
          <div className={'en'}>A LINE OF BOOK</div>
        </Wrapper>
        <Wrapper>
          <div className={'time'}>{getCurrentTime()}</div>
          <div className={'date'}>{getSimpleCurrentDate()}</div>
        </Wrapper>
      </Header>
      <CustomSwiper
        ref={swiperRef}
        slidesPerView={1}
        pagination
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 10000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
      >
        {line_list?.map((item, index) => (
          <CustomSwiperSlide key={index}>
            <Title className={animateText ? 'animate-text' : ''}>
              {item.text.split('').map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  style={{
                    opacity: 0,
                    animation: animateText
                      ? `textAppear 1.5s ease forwards ${letterIndex * 0.1}s`
                      : '',
                  }}
                >
                  {letter}
                </span>
              ))}
            </Title>
            <Caption>{item.commentary}</Caption>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default LineC;
