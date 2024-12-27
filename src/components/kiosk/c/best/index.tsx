import React from 'react';
import {
  Container,
  CustomSwiper,
  Grid,
  SlideItem,
  ContainerX,
  GridX,
  SlideItemX,
} from './index.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { book_list } from '../../../../constants/book.constants';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Best = () => {
  const { toggleSelectedItem } = useSelectedItemStore();
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <GridX>
            {book_list?.slice(0, 10).map((item, index) => (
              <SlideItemX key={index} onClick={() => toggleSelectedItem(6)}>
                <img src={item.img} alt="" />
                <div className={'badge'}>{index + 1}위</div>
                <div className={'title'}>{item.title}</div>
                <div className={'writer'}>{item.writer}</div>
                <div className={'writer'}>{item.date}</div>
              </SlideItemX>
            ))}
          </GridX>
        </ContainerX>
      ) : (
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
                {book_list?.slice(0, 5).map((item, index) => (
                  <SlideItem key={index} onClick={() => toggleSelectedItem(6)}>
                    <div className={'badge'}>{index + 1}위</div>
                    <img src={item.img} alt="" />
                    <div>
                      <div className={'title'}>{item.title}</div>
                      <div className={'writer'}>{item.writer}</div>
                      <div className={'publisher'}>
                        {item.publisher}ㆍ{item.date}
                      </div>
                      <div className={'detail'}>
                        <span>소창위치</span>2F 종합자료실
                      </div>
                      <div className={'detail'}>
                        <span>청구기호</span>유아813.8 신211o
                      </div>
                    </div>
                  </SlideItem>
                ))}
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid>
                {book_list?.slice(6, 11).map((item, index) => (
                  <SlideItem key={index} onClick={() => toggleSelectedItem(6)}>
                    <div className={'badge'}>{index + 6}위</div>
                    <img src={item.img} alt="" />
                    <div>
                      <div className={'title'}>{item.title}</div>
                      <div className={'writer'}>{item.writer}</div>
                      <div className={'publisher'}>
                        {item.publisher}ㆍ{item.date}
                      </div>
                      <div className={'detail'}>
                        <span>소창위치</span>2F 종합자료실
                      </div>
                      <div className={'detail'}>
                        <span>청구기호</span>유아813.8 신211o
                      </div>
                    </div>
                  </SlideItem>
                ))}
              </Grid>
            </SwiperSlide>
          </CustomSwiper>
        </Container>
      )}
    </>
  );
};

export default Best;
