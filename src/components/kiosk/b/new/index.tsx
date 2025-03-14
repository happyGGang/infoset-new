import React from 'react';
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
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const NewB = () => {
  const { toggleSelectedItem } = useSelectedItemStore();
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <CustomSwiperX
            slidesPerView={1}
            slidesPerGroup={1}
            pagination
            spaceBetween={5}
            modules={[Pagination]}
            loop
          >
            <SwiperSlide>
              <GridX>
                {book_list?.slice(0, 12).map((item, index) => (
                  <SlideItemX key={index}>
                    <img src={item.img} alt="" />
                    <div className={'title'}>{item.title}</div>
                    <div className={'writer'}>{item.writer}</div>
                  </SlideItemX>
                ))}
              </GridX>
            </SwiperSlide>
            <SwiperSlide>
              <GridX>
                {book_list?.slice(11, 23).map((item, index) => (
                  <SlideItemX key={index}>
                    <img src={item.img} alt="" />
                    <div className={'title'}>{item.title}</div>
                    <div className={'writer'}>{item.writer}</div>
                  </SlideItemX>
                ))}
              </GridX>
            </SwiperSlide>
          </CustomSwiperX>
        </ContainerX>
      ) : (
        <Container>
          <CustomSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            pagination
            spaceBetween={5}
            modules={[Pagination]}
            loop
          >
            <SwiperSlide>
              <Grid>
                {book_list?.slice(0, 9).map((item, index) => (
                  <SlideItem key={index}>
                    <img src={item.img} alt="" />
                    <div className={'title'}>{item.title}</div>
                    <div className={'writer'}>{item.writer}</div>
                  </SlideItem>
                ))}
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid>
                {book_list?.slice(9, 18).map((item, index) => (
                  <SlideItem key={index}>
                    <img src={item.img} alt="" />
                    <div className={'title'}>{item.title}</div>
                    <div className={'writer'}>{item.writer}</div>
                  </SlideItem>
                ))}
              </Grid>
            </SwiperSlide>
          </CustomSwiper>
        </Container>
      )}
    </>
  );
};

export default NewB;
