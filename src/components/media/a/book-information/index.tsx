import React from 'react';
import {
  Container,
  LeftWrapper,
  RightWrapper,
  LeftSlide,
  LeftSwiper,
  RightSlide,
  RightSwiper,
  Section,
} from './index.styled';
import { book_list } from '../../../../constants/book.constants';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';

const BookInformation = () => {
  const newBookList = [...book_list.slice(1), book_list[0]];
  const bestBook = [...book_list].reverse();
  const bestBookList = [...bestBook.slice(1), book_list[0]];

  return (
    <Container>
      <Section>
        <LeftSwiper
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 10000 }}
          spaceBetween={40}
          effect="fade"
          loop
          allowTouchMove={false}
          fadeEffect={{ crossFade: true }}
        >
          {book_list?.map((item, index) => (
            <LeftSlide key={index}>
              <LeftWrapper>
                <img src={item.img} alt="" />
              </LeftWrapper>
              <RightWrapper>
                <div className={'title'}>{item.title}</div>
                <div className={'writer'}>
                  {item.writer}ㆍ{item.publisher}ㆍ{item.date}
                </div>
                <div className={'summary'}>{item.summary}</div>
              </RightWrapper>
            </LeftSlide>
          ))}
        </LeftSwiper>
        <RightSwiper
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{ delay: 10000 }}
          spaceBetween={40}
          loop
          allowTouchMove={false}
        >
          {newBookList?.map((item, index) => (
            <RightSlide key={index}>
              <img src={item.img} alt="" />
              <div>{item.title}</div>
            </RightSlide>
          ))}
        </RightSwiper>
      </Section>
      <Section>
        <LeftSwiper
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 10000 }}
          spaceBetween={40}
          effect="fade"
          loop
          allowTouchMove={false}
          fadeEffect={{ crossFade: true }}
        >
          {bestBook?.map((item, index) => (
            <LeftSlide key={index}>
              <LeftWrapper>
                <img src={item.img} alt="" />
              </LeftWrapper>
              <RightWrapper>
                <div className={'title'}>{item.title}</div>
                <div className={'writer'}>
                  {item.writer}ㆍ{item.publisher}ㆍ{item.date}
                </div>
                <div className={'summary'}>{item.summary}</div>
              </RightWrapper>
            </LeftSlide>
          ))}
        </LeftSwiper>
        <RightSwiper
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{ delay: 10000 }}
          spaceBetween={40}
          allowTouchMove={false}
          loop
        >
          {bestBookList?.map((item, index) => (
            <RightSlide key={index}>
              <img src={item.img} alt="" />
              <div>{item.title}</div>
            </RightSlide>
          ))}
        </RightSwiper>
      </Section>
    </Container>
  );
};

export default BookInformation;
