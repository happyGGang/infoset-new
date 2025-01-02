import React from 'react';
import {
  Container,
  Date,
  Time,
  CustomSwiper,
  Grid,
  SlideItem,
} from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';

const Librarian = () => {
  return (
    <Container>
      <div className={'time_date_wrapper'}>
        <Time>{getCurrentTime()}</Time>
        <Date>{getCurrentDate()}</Date>
      </div>
      <CustomSwiper
        slidesPerView={1}
        slidesPerGroup={1}
        pagination
        spaceBetween={5}
        modules={[Pagination, Autoplay]}
        loop
        autoplay={{ delay: 10000 }}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <Grid>
            {book_list?.slice(0, 4).map((item, index) => (
              <SlideItem key={index}>
                <img src={item.img} alt="" />
                <div>
                  <div className={'title'}>{item.title}</div>
                  <div className={'writer'}>{item.writer}</div>
                  <div className={'writer'}>{item.publisher}</div>
                  <div className={'writer'}>{item.date}</div>
                </div>
              </SlideItem>
            ))}
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid>
            {book_list?.slice(5, 9).map((item, index) => (
              <SlideItem key={index}>
                <img src={item.img} alt="" />
                <div>
                  <div className={'title'}>{item.title}</div>
                  <div className={'writer'}>{item.writer}</div>
                  <div className={'writer'}>{item.publisher}</div>
                  <div className={'writer'}>{item.date}</div>
                </div>
              </SlideItem>
            ))}
          </Grid>
        </SwiperSlide>
      </CustomSwiper>
    </Container>
  );
};

export default Librarian;
