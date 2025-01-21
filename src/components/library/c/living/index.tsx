import React from 'react';
import { Container, CustomSwiper, CustomSwiperSlide } from './index.styled';
import { news_list } from '../../../../constants/news.constants';
import { Autoplay } from 'swiper/modules';

const Living = () => {
  return (
    <Container>
      <CustomSwiper
        slidesPerView={3}
        direction={'vertical'}
        modules={[Autoplay]}
        loop
        allowTouchMove={false}
        autoplay={{ delay: 5000 }}
      >
        {news_list?.map((item, index) => (
          <CustomSwiperSlide key={index}>
            <div>ㆍ </div>
            <div>
              <div className={'value'}>{item.title}</div>
              <div className={'label'}>{item.date}</div>
            </div>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default Living;
