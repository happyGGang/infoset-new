import React from 'react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import {
  CustomSwiper,
  CustomSwiperX,
  Grid,
  GridX,
  SlideItem,
  SlideItemX,
} from './index.styled';
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import back from '../../../../assets/icon/back.svg';
import move from '../../../../assets/img/move.svg';

const ResultContent = () => {
  const { isLandscape } = useOrientationStore();
  const { toggleSelectedItem } = useSelectedItemStore();
  const totalSlides = Math.ceil(book_list.length / 9);
  const totalSlidesX = Math.ceil(book_list.length / 14);

  return (
    <>
      {isLandscape ? (
        <>
          <CustomSwiperX
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            pagination
            modules={[Pagination]}
          >
            {[...Array(totalSlidesX)].map((_, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <GridX>
                  {book_list
                    .slice(pageIndex * 14, (pageIndex + 1) * 14)
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
          <img className={'back'} src={back} alt="" />
          <img
            className={'move'}
            src={move}
            alt=""
            onClick={() => toggleSelectedItem(3)}
          />
        </>
      ) : (
        <>
          <CustomSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            pagination
            modules={[Pagination]}
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
                      </SlideItem>
                    ))}
                </Grid>
              </SwiperSlide>
            ))}
          </CustomSwiper>
          <img className={'back'} src={back} alt="" />
          <img
            className={'move'}
            src={move}
            alt=""
            onClick={() => toggleSelectedItem(3)}
          />
        </>
      )}
    </>
  );
};

export default ResultContent;
