import React from 'react';
import {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  Date,
  Time,
} from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';
import { news_list } from '../../../../constants/news.constants';
import { Autoplay } from 'swiper/modules';

const LivingB = () => {
  return (
    <Container>
      <Time>{getCurrentTime()}</Time>
      <Date>{getCurrentDate()}</Date>

      <CustomSwiper
        slidesPerView={5}
        direction={'vertical'}
        modules={[Autoplay]}
        loop
        allowTouchMove={false}
        autoplay={{ delay: 5000 }}
      >
        {news_list?.map((item, index) => (
          <CustomSwiperSlide key={index}>
            <div className={'value'}>{item.title}</div>
            <div className={'label'}>{item.date.split(' ')[0]}</div>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default LivingB;
