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

const Living = () => {
  return (
    <Container>
      <div className={'time_date_wrapper'}>
        <Time>{getCurrentTime()}</Time>
        <Date>{getCurrentDate()}</Date>
      </div>
      <div className={'swiper_container'}>
        <div className={'badge'}>뉴스</div>
        <CustomSwiper
          slidesPerView={1}
          direction={'vertical'}
          modules={[Autoplay]}
          spaceBetween={5}
          loop
          allowTouchMove={false}
          autoplay={{ delay: 5000 }}
        >
          {news_list?.map((item, index) => (
            <CustomSwiperSlide key={index}>
              <div className={'label'}>{item.date}</div>
              <div className={'value'}>{item.title}</div>
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </Container>
  );
};

export default Living;
