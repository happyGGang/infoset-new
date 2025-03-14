import React, { useState, useRef } from 'react';
import {
  Caption,
  Container,
  ContentTitle,
  CustomSwiper,
  CustomSwiperSlide,
  Title,
} from './index.styled';
import { line_list } from '../../../../constants/line.constants';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';

const LineB = () => {
  const [animateText, setAnimateText] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    setAnimateText(false);
    setTimeout(() => setAnimateText(true), 50);
  };

  return (
    <Container>
      <ContentTitle>책 속의 한줄 발견</ContentTitle>
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

export default LineB;
