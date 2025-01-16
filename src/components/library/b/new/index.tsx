import React from 'react';
import {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  SmallSwiper,
  SmallSwiperSlide,
} from './index.styled';
import { book_list } from '../../../../constants/book.constants';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';

const New = () => {
  const rearrangedBookList = [...book_list.slice(1), book_list[0]];

  return (
    <Container>
      <CustomSwiper
        autoplay={{ delay: 10000 }}
        slidesPerView={1}
        effect={'fade'}
        loop
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        allowTouchMove={false}
      >
        {book_list.map((book, index) => (
          <CustomSwiperSlide key={index}>
            <img src={book.img} alt={book.title} />
            <div className={'book_title'}>{book.title}</div>
            <div className={'detail_box'}>
              <div className={'left'}>
                <div className={'wrapper'}>
                  <div className={'label'}>저자명</div>
                  <div className={'value'}>{book.writer}</div>
                </div>
                <div className={'wrapper'}>
                  <div className={'label'}>출판사</div>
                  <div className={'value'}>{book.publisher}</div>
                </div>
              </div>
              <div className={'right'}>
                <div className={'wrapper'}>
                  <div className={'label'}>발행년도</div>
                  <div className={'value'}>{book.date}</div>
                </div>
                <div className={'wrapper'}>
                  <div className={'label'}>소장위치</div>
                  <div className={'value'}>2F 종합자료실</div>
                </div>
              </div>
            </div>
            <div className={'summary'}>{book.summary}</div>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
      <SmallSwiper
        autoplay={{ delay: 10000 }}
        slidesPerView={5}
        modules={[Autoplay, Pagination]}
        pagination
        loop
        spaceBetween={10}
        allowTouchMove={false}
      >
        {rearrangedBookList.map((book, index) => (
          <SmallSwiperSlide key={index}>
            <img src={book.img} alt={book.title} />
          </SmallSwiperSlide>
        ))}
      </SmallSwiper>
    </Container>
  );
};

export default New;
