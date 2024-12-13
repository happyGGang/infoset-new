import React, { useEffect, useState } from 'react';
import {
  Container,
  SmallSwiper,
  SmallSwiperSlide,
  SelectedImage,
} from './index.styled';
import { Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import { notice_list } from '../../../../constants/notice.constants';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Notice = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { isLandscape } = useOrientationStore();

  const handleSlideClick = (index: React.SetStateAction<number>) =>
    setSelectedIndex(index);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedIndex]);

  return (
    <>
      {isLandscape ? (
        <div>공지사항 가로 모드</div>
      ) : (
        <Container>
          <SelectedImage
            src={notice_list[selectedIndex]?.img}
            alt={`Selected Slide ${selectedIndex}`}
            className={`${animate ? 'animate' : ''}`}
          />
          <SmallSwiper
            slidesPerView={5}
            pagination
            slidesPerGroup={5}
            modules={[Pagination]}
            spaceBetween={2}
            loop
          >
            {notice_list?.map((item, index) => (
              <SmallSwiperSlide
                key={index}
                onClick={() => handleSlideClick(index)}
              >
                <img
                  src={item.img}
                  alt={`Slide ${index}`}
                  style={{
                    borderColor:
                      selectedIndex === index ? '#000' : 'transparent',
                  }}
                />
              </SmallSwiperSlide>
            ))}
          </SmallSwiper>
        </Container>
      )}
    </>
  );
};

export default Notice;
