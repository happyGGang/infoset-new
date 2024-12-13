import 'swiper/css';
import React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import {
  BigSlide,
  BigSwiper,
  Container,
  Header,
  SmallSlide,
  SmallSwiper,
  Star1,
  Star2,
  Star3,
  Wrapper,
} from './index.styled';
import { notice_list } from '../../../../constants/notice.constants';
import 'swiper/css/effect-fade';
import 'swiper/css';
import {
  getCurrentTime,
  getSimpleCurrentDate,
} from '../../../../util/date-time';

const Notice = () => {
  const newNoticeList = [...notice_list.slice(1), notice_list[0]];

  return (
    <Container>
      <Header>
        <Wrapper>
          <div className={'kr'}>공지사항</div>
          <div className={'en'}>LIBRARY NOTICE</div>
        </Wrapper>
        <Wrapper>
          <div className={'time'}>{getCurrentTime()}</div>
          <div className={'date'}>{getSimpleCurrentDate()}</div>
        </Wrapper>
      </Header>
      <Star1 />
      <Star2 />
      <Star3 />
      <BigSwiper
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 10000 }}
        spaceBetween={40}
        effect="fade"
        loop
        allowTouchMove={false}
        fadeEffect={{ crossFade: true }}
      >
        {notice_list?.map((item, index) => (
          <BigSlide key={index}>
            <img src={item.img} alt="" />
            <div>
              <div className={'index'}>
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <div className={'title'}>{item.title}</div>
            </div>
          </BigSlide>
        ))}
      </BigSwiper>
      <SmallSwiper
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{ delay: 10000 }}
        spaceBetween={30}
        loop
        allowTouchMove={false}
      >
        {newNoticeList?.map((item, index) => (
          <SmallSlide key={index}>
            <div>
              <div className={'index'}>
                {index === newNoticeList.length - 1
                  ? '01'
                  : (index + 2).toString().padStart(2, '0')}
              </div>
            </div>
            <img src={item.img} alt="" />
          </SmallSlide>
        ))}
      </SmallSwiper>
    </Container>
  );
};

export default Notice;
