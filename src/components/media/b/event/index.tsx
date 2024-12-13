import React from 'react';
import {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  DetailWrapper,
  Detail,
  Title,
  ContentTitle,
} from './index.styled';
import { event_list } from '../../../../constants/event.constants';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';

const Event = () => {
  return (
    <Container>
      <ContentTitle>today’s event</ContentTitle>
      <CustomSwiper
        slidesPerView={1}
        pagination
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 10000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        allowTouchMove={false}
      >
        {event_list?.map((item, index) => (
          <CustomSwiperSlide key={index}>
            <Title>{item.title}</Title>
            <DetailWrapper>
              <Detail>
                <div className={'label'}>시간</div>
                <div className={'value'}>{item.time}</div>
              </Detail>
              <Detail>
                <div className={'label'}>장소</div>
                <div className={'value'}>{item.location}</div>
              </Detail>
            </DetailWrapper>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default Event;
