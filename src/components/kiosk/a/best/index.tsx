import React from 'react';
import {
  Container,
  ContainerX,
  CustomSwiper,
  CustomSwiperX,
  Grid,
  GridX,
  SlideItem,
  SlideItemX,
} from './index.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const BestA = () => {
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
                {book_list?.slice(0, 5).map((item, index) => (
                  <SlideItemX key={index}>
                    <div className={'badge'}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <img src={item.img} alt="" />
                    <div className={'title'}>{item.title}</div>
                    <div className={'writer'}>{item.writer}</div>
                  </SlideItemX>
                ))}
              </GridX>
            </SwiperSlide>
            <SwiperSlide>
              <GridX>
                {book_list?.slice(6, 11).map((item, index) => (
                  <SlideItemX key={index}>
                    <div className={'badge'}>
                      {(index + 6).toString().padStart(2, '0')}
                    </div>
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
                {book_list?.slice(0, 5).map((item, index) => (
                  <SlideItem key={index}>
                    <div className={'badge'}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <img src={item.img} alt="" />
                    <div className={'title'}>{item.title}</div>
                    <div className={'writer'}>{item.writer}</div>
                  </SlideItem>
                ))}
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid>
                {book_list?.slice(6, 11).map((item, index) => (
                  <SlideItem key={index}>
                    <div className={'badge'}>
                      {(index + 6).toString().padStart(2, '0')}
                    </div>
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

export default BestA;
