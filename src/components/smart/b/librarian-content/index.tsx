import React from 'react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import { Caption, CaptionX, Title, TitleX } from './index.styled';
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
import { useSelectedItemStore } from '../../../../store/selected-item.store';

const LibrarianContent = () => {
  const { isLandscape } = useOrientationStore();
  const { toggleSelectedItem } = useSelectedItemStore();
  const totalSlides = Math.ceil(book_list.length / 12);
  const totalSlidesX = Math.ceil(book_list.length / 5);

  return isLandscape ? (
    <>
      <TitleX>우리 도서관 사서 선생님의 선택!</TitleX>
      <CaptionX>
        사서 선생님들이 이용자들을 위해 고른 추천도서는 어떠세요?
      </CaptionX>
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
                  <SlideItemX key={index} onClick={() => toggleSelectedItem(6)}>
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
    </>
  ) : (
    <>
      <Title>우리 도서관 사서 선생님의 선택!</Title>
      <Caption>관심 키워드를 분석해 알맞은 책을 추천해드려요</Caption>
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
                  <SlideItem key={index} onClick={() => toggleSelectedItem(6)}>
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
    </>
  );
};

export default LibrarianContent;
