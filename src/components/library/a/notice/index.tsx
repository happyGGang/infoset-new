import React, { useEffect, useState } from 'react';
import {
  Container,
  SelectedImage,
  SmallSwiper,
  SmallSwiperSlide,
  Ticker,
  TickerMessage,
  Date,
  Time,
} from './index.styled';
import { notice_list } from '../../../../constants/notice.constants';
import { Autoplay, Pagination } from 'swiper/modules';
import { getCurrentDate, getCurrentTime } from '../../../../util/date-time';

const Notice = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleSlideClick = (index: React.SetStateAction<number>) =>
    setSelectedIndex(index);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % notice_list.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className={'time_date_wrapper'}>
        <Time>{getCurrentTime()}</Time>
        <Date>{getCurrentDate()}</Date>
      </div>
      <SelectedImage
        src={notice_list[selectedIndex]?.img}
        alt={`Selected Slide ${selectedIndex}`}
        className={`${animate ? 'animate' : ''}`}
      />
      <SmallSwiper
        slidesPerView={5}
        pagination
        modules={[Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerGroup={5}
        loop
        allowTouchMove={false}
        autoplay={{ delay: 25000 }}
      >
        {notice_list?.map((item, index) => (
          <SmallSwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            <img
              src={item.img}
              alt={`Slide ${index}`}
              style={{
                borderColor: selectedIndex === index ? '#000' : 'transparent',
                transition: 'border-color 0.3s',
              }}
            />
          </SmallSwiperSlide>
        ))}
      </SmallSwiper>
      <Ticker>
        <TickerMessage>
          도서관초대석 불편한편의점 일정이 김호연 작가의 개인사정으로 인해
          변경되었습니다. 이용에 참고하여 주시기 바랍니다. 여기는 텍스트
          흘러가는 티커영역 입니다. 긴급 공지용으로 사용해주세요!
        </TickerMessage>
      </Ticker>
    </Container>
  );
};

export default Notice;
