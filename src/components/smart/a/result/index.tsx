import React, { useState } from 'react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import {
  Container,
  CustomSwiper,
  Grid,
  SlideItem,
  ContainerX,
  CustomSwiperX,
  GridX,
  SlideItemX,
} from './index.styled';
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { Navigation } from 'swiper/modules';

const Result = () => {
  const { isLandscape } = useOrientationStore();
  const { toggleSelectedItem } = useSelectedItemStore();
  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlides = Math.ceil(book_list.length / 9);
  const totalSlidesX = Math.ceil(book_list.length / 10);

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <div className={'swiper-button-prev'}></div>
          <div className={'swiper-button-next'}></div>
          <CustomSwiperX
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          >
            {[...Array(totalSlidesX)].map((_, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <GridX>
                  {book_list
                    .slice(pageIndex * 10, (pageIndex + 1) * 10)
                    .map((item, index) => (
                      <SlideItemX
                        key={index}
                        onClick={() => toggleSelectedItem(6)}
                      >
                        <img src={item.img} alt="" />
                        <div className={'title'}>{item.title}</div>
                        <div className={'writer'}>{item.writer}</div>
                        <div className={'writer'}>{item.publisher}</div>
                      </SlideItemX>
                    ))}
                </GridX>
              </SwiperSlide>
            ))}
          </CustomSwiperX>
          <div className={'pagination'}>
            <span>{activeIndex}</span> / {totalSlidesX}
          </div>
          <div className={'move'} onClick={() => toggleSelectedItem(3)}></div>
        </ContainerX>
      ) : (
        <Container>
          <div className={'swiper-button-prev'}></div>
          <div className={'swiper-button-next'}></div>
          <CustomSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          >
            {[...Array(totalSlides)].map((_, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <Grid>
                  {book_list
                    .slice(pageIndex * 9, (pageIndex + 1) * 9)
                    .map((item, index) => (
                      <SlideItem
                        key={index}
                        onClick={() => toggleSelectedItem(6)}
                      >
                        <img src={item.img} alt="" />
                        <div className={'title'}>{item.title}</div>
                        <div className={'writer'}>{item.writer}</div>
                        <div className={'writer'}>{item.publisher}</div>
                      </SlideItem>
                    ))}
                </Grid>
              </SwiperSlide>
            ))}
          </CustomSwiper>
          <div className={'pagination'}>
            <span>{activeIndex}</span> / {totalSlides}
          </div>
          <div className={'move'} onClick={() => toggleSelectedItem(3)}></div>
        </Container>
      )}
    </>
  );
};

export default Result;
