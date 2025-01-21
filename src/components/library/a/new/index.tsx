import React, { useEffect, useState } from 'react';
import {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  Date,
  Time,
  Row,
  VerticalSwiper,
  VerticalSwiperSlide,
} from './index.styled';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';
import { book_list } from '../../../../constants/book.constants';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';

const New = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rearrangedBookList = [...book_list.slice(1), book_list[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % book_list.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      style={{
        background: `#FFFFFF url(${book_list[selectedIndex].img}) center top / 100% 65% no-repeat`,
      }}
    >
      <div className={'blur'} />
      <div className={'title_wrapper'}>
        <div className={'title_en'}>LIBRARY NEW BOOK</div>
        <div className={'title_kr'}>신착도서</div>
      </div>
      <div className={'time_date_wrapper'}>
        <Time>{getCurrentTime()}</Time>
        <Date>{getCurrentDate()}</Date>
      </div>
      <Row>
        <CustomSwiper
          autoplay={{ delay: 10000 }}
          slidesPerView={1}
          effect={'fade'}
          loop
          pagination
          fadeEffect={{ crossFade: true }}
          modules={[Autoplay, EffectFade, Pagination]}
          allowTouchMove={false}
        >
          {book_list.slice(0, 10).map((book, index) => (
            <CustomSwiperSlide key={index}>
              <img src={book.img} alt={book.title} />
              <div className={'writer'}>
                {book.writer} ㆍ <span>{book.publisher}</span>
              </div>
              <div className={'title'}>{book.title}</div>
              <div className={'summary'}>{book.summary}</div>
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
        <VerticalSwiper
          autoplay={{ delay: 10000 }}
          slidesPerView={6}
          modules={[Autoplay]}
          direction={'vertical'}
          spaceBetween={13}
          loop
          allowTouchMove={false}
        >
          {rearrangedBookList.slice(0, 10).map((book, index) => (
            <VerticalSwiperSlide key={index}>
              <img src={book.img} alt={book.title} />
            </VerticalSwiperSlide>
          ))}
        </VerticalSwiper>
      </Row>
    </Container>
  );
};

export default New;
