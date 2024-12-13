import 'swiper/css';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Container, CustomSwiperSlide, CustomSwiper } from './index.styled';
import { notice_list } from '../../../../constants/notice.constants';
import 'swiper/css/effect-fade';

const Notice = () => {
  return (
    <Container>
      <CustomSwiper
        slidesPerView={3}
        slidesPerGroup={3}
        modules={[Autoplay]}
        autoplay={{ delay: 10000 }}
        spaceBetween={90}
        loop
        allowTouchMove={false}
      >
        {notice_list?.map((item, index) => (
          <CustomSwiperSlide key={index}>
            <img src={item.img} alt="" />
            <div className={'wrapper'}>
              <div className={'index'}>
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <div className={'title'}>{item.title}</div>
            </div>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default Notice;
