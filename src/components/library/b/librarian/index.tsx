import React from 'react';
import { Container, CustomSwiper, Grid, SlideItem } from './index.styled';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';

const New = () => {
  const { toggleSelectedItem } = useSelectedItemStore();

  return (
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
              <SlideItem key={index} onClick={() => toggleSelectedItem(6)}>
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
              <SlideItem key={index} onClick={() => toggleSelectedItem(6)}>
                <img src={item.img} alt="" />
                <div className={'title'}>{item.title}</div>
                <div className={'writer'}>{item.writer}</div>
              </SlideItem>
            ))}
          </Grid>
        </SwiperSlide>
      </CustomSwiper>
    </Container>
  );
};

export default New;
