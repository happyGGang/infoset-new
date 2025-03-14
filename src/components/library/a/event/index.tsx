import React from 'react';
import {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  Date,
  Time,
} from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';
import { event_list } from '../../../../constants/event.constants';
import { Autoplay, Pagination } from 'swiper/modules';

const EventA = () => {
  return (
    <Container>
      <div className={'time_date_wrapper'}>
        <Time>{getCurrentTime()}</Time>
        <Date>{getCurrentDate()}</Date>
      </div>
      <CustomSwiper
        slidesPerView={1}
        pagination
        modules={[Pagination, Autoplay]}
        spaceBetween={5}
        loop
        allowTouchMove={false}
        autoplay={{ delay: 5000 }}
      >
        {event_list?.map((item, index) => (
          <CustomSwiperSlide key={index}>
            <div className={'box'}>
              <div className={'label'}>시간</div>
              <div className={'value'}>{item.time}</div>
            </div>
            <div className={'box'}>
              <div className={'label'}>장소</div>
              <div className={'value'}>{item.location}</div>
            </div>
            <div className={'title'}>{item.title}</div>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default EventA;
