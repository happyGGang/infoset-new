import React from 'react';
import {
  Container,
  CustomSwiper,
  Grid,
  SlideItem,
  Date,
  Time,
} from './index.styled';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';

const Best = () => {
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
            {book_list?.slice(0, 5).map((item, index) => (
              <SlideItem key={index}>
                <div className={'badge'}>{index + 1}위</div>
                <img src={item.img} alt="" />
                <div>
                  <div className={'title'}>{item.title}</div>
                  <div className={'writer'}>{item.writer}</div>
                  <div className={'publisher'}>
                    {item.publisher}ㆍ{item.date}
                  </div>
                  <div className={'detail'}>
                    <span>소창위치</span>2F 종합자료실
                  </div>
                  <div className={'detail'}>
                    <span>청구기호</span>유아813.8 신211o
                  </div>
                </div>
              </SlideItem>
            ))}
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid>
            {book_list?.slice(6, 11).map((item, index) => (
              <SlideItem key={index}>
                <div className={'badge'}>{index + 6}위</div>
                <img src={item.img} alt="" />
                <div>
                  <div className={'title'}>{item.title}</div>
                  <div className={'writer'}>{item.writer}</div>
                  <div className={'publisher'}>
                    {item.publisher}ㆍ{item.date}
                  </div>
                  <div className={'detail'}>
                    <span>소창위치</span>2F 종합자료실
                  </div>
                  <div className={'detail'}>
                    <span>청구기호</span>유아813.8 신211o
                  </div>
                </div>
              </SlideItem>
            ))}
          </Grid>
        </SwiperSlide>
      </CustomSwiper>
    </Container>
  );
};

export default Best;
