import React, { useState } from 'react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import {
  Container,
  ContainerX,
  TabItem,
  Tabs,
  CustomSwiper,
  Grid,
  SlideItem,
} from './index.styled';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';

const Bigdata = () => {
  const { isLandscape } = useOrientationStore();
  const { toggleSelectedItem } = useSelectedItemStore();
  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlides = Math.ceil(book_list.length / 6);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabs = ['아동', '청소년', '20~30대', '40~50대', '60대 이상'];

  return (
    <>
      {isLandscape ? (
        <ContainerX></ContainerX>
      ) : (
        <Container>
          <Tabs>
            {tabs.map((tab, index) => (
              <TabItem
                key={index}
                onClick={() => setSelectedTab(index)}
                style={{
                  backgroundColor:
                    selectedTab === index ? '#3537AC' : '#4E5968',
                  color: selectedTab === index ? '#FFFFFF' : '#ADB5BD',
                }}
              >
                {tab}
              </TabItem>
            ))}
          </Tabs>
          <div className={'swiper-button-prev'}></div>
          <div className={'swiper-button-next'}></div>
          <CustomSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          >
            {[...Array(totalSlides)].map((_, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <Grid>
                  {book_list
                    .slice(pageIndex * 6, (pageIndex + 1) * 6)
                    .map((item, index) => (
                      <SlideItem
                        key={index}
                        onClick={() => toggleSelectedItem(6)}
                      >
                        <img src={item.img} alt="" />
                        <div className={'title'}>{item.title}</div>
                        <div className={'writer'}>{item.writer}</div>
                        <div className={'writer'}>{item.publisher}</div>
                      </SlideItem>
                    ))}
                </Grid>
              </SwiperSlide>
            ))}
          </CustomSwiper>
          <div className={'pagination'}>
            <span>{activeIndex}</span> / {totalSlides}
          </div>
        </Container>
      )}
    </>
  );
};

export default Bigdata;
