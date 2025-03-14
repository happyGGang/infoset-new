import React from 'react';
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
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { Pagination } from 'swiper/modules';

const Custom = () => {
  const { isLandscape } = useOrientationStore();
  const { toggleSelectedItem } = useSelectedItemStore();
  const totalSlides = Math.ceil(book_list.length / 12);
  const totalSlidesX = Math.ceil(book_list.length / 5);

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <CustomSwiperX
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            modules={[Pagination]}
            pagination
          >
            {[...Array(totalSlidesX)].map((_, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <GridX>
                  {book_list
                    .slice(pageIndex * 5, (pageIndex + 1) * 5)
                    .map((item, index) => (
                      <SlideItemX
                        key={index}
                        onClick={() => toggleSelectedItem(6)}
                      >
                        <img src={item.img} alt="" />
                        <div className={'title'}>{item.title}</div>
                        <div className={'writer'}>{item.writer}</div>
                      </SlideItemX>
                    ))}
                </GridX>
              </SwiperSlide>
            ))}
          </CustomSwiperX>
          <div className={'move'} onClick={() => toggleSelectedItem(3)}></div>
        </ContainerX>
      ) : (
        <Container>
          <CustomSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            modules={[Pagination]}
            pagination
          >
            {[...Array(totalSlides)].map((_, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <Grid>
                  {book_list
                    .slice(pageIndex * 12, (pageIndex + 1) * 12)
                    .map((item, index) => (
                      <SlideItem
                        key={index}
                        onClick={() => toggleSelectedItem(6)}
                      >
                        <img src={item.img} alt="" />
                        <div className={'title'}>{item.title}</div>
                        <div className={'writer'}>{item.writer}</div>
                      </SlideItem>
                    ))}
                </Grid>
              </SwiperSlide>
            ))}
          </CustomSwiper>
          <div className={'move'} onClick={() => toggleSelectedItem(3)}></div>
        </Container>
      )}
    </>
  );
};

export default Custom;
