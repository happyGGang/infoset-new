import React, { useState } from 'react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import {
  TabItem,
  Tabs,
  CustomSwiper,
  Grid,
  SlideItem,
  TabsX,
  TabItemX,
  CustomSwiperX,
  GridX,
  Caption,
  CaptionX,
  Title,
  TitleX,
  SlideItemX,
} from './index.styled';
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';

const BigdataContent = () => {
  const { isLandscape } = useOrientationStore();
  const { toggleSelectedItem } = useSelectedItemStore();
  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlides = Math.ceil(book_list.length / 6);
  const totalSlidesX = Math.ceil(book_list.length / 6);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabs = ['아동', '청소년', '20~30대', '40~50대', '60대 이상'];

  return (
    <>
      {isLandscape ? (
        <>
          <TitleX>빅데이터는 어떤 책을 추천했을까요?</TitleX>
          <CaptionX>전국 공공도서관 연령대별 추천도서를 만나보세요</CaptionX>
          <TabsX>
            {tabs.map((tab, index) => (
              <TabItemX
                key={index}
                onClick={() => setSelectedTab(index)}
                style={{
                  backgroundColor:
                    selectedTab === index ? '#191F28' : '#8B95A1',
                }}
              >
                {tab}
              </TabItemX>
            ))}
          </TabsX>
          <CustomSwiperX
            slidesPerView={1}
            slidesPerGroup={1}
            loop
            modules={[Pagination]}
            pagination
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          >
            {[...Array(totalSlidesX)].map((_, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <GridX>
                  {book_list
                    .slice(pageIndex * 6, (pageIndex + 1) * 6)
                    .map((item, index) => (
                      <SlideItemX
                        key={index}
                        onClick={() => toggleSelectedItem(6)}
                      >
                        <img src={item.img} alt="" />
                        <div className={'title'}>{item.title}</div>
                        <div className={'writer'}>{item.writer}</div>
                      </SlideItemX>
                    ))}
                </GridX>
              </SwiperSlide>
            ))}
          </CustomSwiperX>
        </>
      ) : (
        <>
          <Title>빅데이터는 어떤 책을 추천했을까요?</Title>
          <Caption>전국 공공도서관 연령대별 추천도서를 만나보세요</Caption>
          <Tabs>
            {tabs.map((tab, index) => (
              <TabItem
                key={index}
                onClick={() => setSelectedTab(index)}
                style={{
                  backgroundColor:
                    selectedTab === index ? '#191F28' : '#8B95A1',
                }}
              >
                {tab}
              </TabItem>
            ))}
          </Tabs>
          <CustomSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={5}
            loop
            modules={[Pagination]}
            pagination
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
                      </SlideItem>
                    ))}
                </Grid>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </>
      )}
    </>
  );
};

export default BigdataContent;
