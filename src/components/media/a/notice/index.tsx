import 'swiper/css';
import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import {
  Container,
  CustomSwiperSlide,
  CustomSwiper,
  ImgSkeleton,
  TextSkeleton,
} from './index.styled';
import { notice_list } from '../../../../constants/notice.constants';
import 'swiper/css/effect-fade';

const Notice = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <CustomSwiper
        slidesPerView={4}
        slidesPerGroup={4}
        modules={[Autoplay]}
        autoplay={{ delay: 10000 }}
        spaceBetween={20}
        loop
        allowTouchMove={false}
      >
        {notice_list?.map((item, index) => (
          <CustomSwiperSlide key={index}>
            {isLoading ? (
              <>
                <ImgSkeleton animation="wave" variant="rectangular" />
                <TextSkeleton animation="wave" variant="rectangular" />
              </>
            ) : (
              <>
                <img src={item.img} alt="" />
                <div>{item.title}</div>
              </>
            )}
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default Notice;
