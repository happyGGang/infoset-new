import React from 'react';
import {
  Column,
  ColumnX,
  Container,
  ContainerX,
  CustomSwiper,
  CustomSwiperX,
  ItemWrapper,
  ItemWrapperX,
  SlideItem,
  SlideItemX,
  Wrapper,
  WrapperX,
} from './index.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import { course_list } from '../../../../constants/course.constants';
import { Pagination } from 'swiper/modules';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Course = () => {
  const { toggleSelectedItem } = useSelectedItemStore();
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <CustomSwiperX
            slidesPerView={1}
            pagination
            slidesPerGroup={1}
            modules={[Pagination]}
            spaceBetween={5}
            loop
          >
            <SwiperSlide>
              <ItemWrapperX>
                {course_list?.slice(0, 5).map((item, index) => (
                  <SlideItemX key={index} onClick={() => toggleSelectedItem(8)}>
                    <WrapperX>
                      <div className={`${'badge'} ${item.className}`}>
                        {item.status}
                      </div>
                      <div>
                        <div className={'title'}>{item.title}</div>
                        <WrapperX>
                          <WrapperX>
                            <div className={'label'}>접수기간</div>
                            <div className={'value'}>{item.date}</div>
                          </WrapperX>
                          <WrapperX>
                            <div className={'label'}>수강대상</div>
                            <div className={'value'}>{item.user}</div>
                          </WrapperX>
                        </WrapperX>
                      </div>
                    </WrapperX>
                    <WrapperX>
                      <ColumnX className={'recruit'}>
                        <div className={'count_label'}>모집인원</div>
                        <div className={'count'}>
                          <span className={'highlight'}>{item.recruited}</span>
                          <span className={'dash'}>/</span>
                          {item.recruit}
                        </div>
                      </ColumnX>
                      <ColumnX className={'candidate'}>
                        <div className={'count_label'}>후보인원</div>
                        <div className={'count'}>
                          <span className={'highlight'}>{item.became}</span>
                          <span className={'dash'}>/</span>
                          {item.candidate}
                        </div>
                      </ColumnX>
                    </WrapperX>
                  </SlideItemX>
                ))}
              </ItemWrapperX>
            </SwiperSlide>
            <SwiperSlide>
              <ItemWrapperX>
                {course_list?.slice(5, 10).map((item, index) => (
                  <SlideItemX key={index} onClick={() => toggleSelectedItem(8)}>
                    <WrapperX>
                      <div className={`${'badge'} ${item.className}`}>
                        {item.status}
                      </div>
                      <div>
                        <div className={'title'}>{item.title}</div>
                        <WrapperX>
                          <WrapperX>
                            <div className={'label'}>접수기간</div>
                            <div className={'value'}>{item.date}</div>
                          </WrapperX>
                          <WrapperX>
                            <div className={'label'}>수강대상</div>
                            <div className={'value'}>{item.user}</div>
                          </WrapperX>
                        </WrapperX>
                      </div>
                    </WrapperX>

                    <WrapperX>
                      <ColumnX className={'recruit'}>
                        <div className={'count_label'}>모집인원</div>
                        <div className={'count'}>
                          <span className={'highlight'}>{item.recruited}</span>
                          <span className={'dash'}>/</span>
                          {item.recruit}
                        </div>
                      </ColumnX>
                      <ColumnX className={'candidate'}>
                        <div className={'count_label'}>후보인원</div>
                        <div className={'count'}>
                          <span className={'highlight'}>{item.became}</span>
                          <span className={'dash'}>/</span>
                          {item.candidate}
                        </div>
                      </ColumnX>
                    </WrapperX>
                  </SlideItemX>
                ))}
              </ItemWrapperX>
            </SwiperSlide>
          </CustomSwiperX>
        </ContainerX>
      ) : (
        <Container>
          <CustomSwiper
            slidesPerView={1}
            pagination
            slidesPerGroup={1}
            modules={[Pagination]}
            spaceBetween={5}
            loop
          >
            <SwiperSlide>
              <ItemWrapper>
                {course_list?.slice(0, 7).map((item, index) => (
                  <SlideItem key={index} onClick={() => toggleSelectedItem(8)}>
                    <Wrapper>
                      <div className={`${'badge'} ${item.className}`}>
                        {item.status}
                      </div>
                      <div>
                        <div className={'title'}>{item.title}</div>
                        <Wrapper>
                          <div className={'label'}>접수기간</div>
                          <div className={'value'}>{item.date}</div>
                        </Wrapper>
                        <Wrapper>
                          <div className={'label'}>수강대상</div>
                          <div className={'value'}>{item.user}</div>
                        </Wrapper>
                      </div>
                      <Column>
                        <Column className={'recruit'}>
                          <div className={'count_label'}>모집인원</div>
                          <div className={'count'}>
                            <span className={'highlight'}>
                              {item.recruited}
                            </span>
                            <span className={'dash'}>/</span>
                            {item.recruit}
                          </div>
                        </Column>
                        <Column className={'candidate'}>
                          <div className={'count_label'}>후보인원</div>
                          <div className={'count'}>
                            <span className={'highlight'}>{item.became}</span>
                            <span className={'dash'}>/</span>
                            {item.candidate}
                          </div>
                        </Column>
                      </Column>
                    </Wrapper>
                  </SlideItem>
                ))}
              </ItemWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <ItemWrapper>
                {course_list?.slice(8, 15).map((item, index) => (
                  <SlideItem key={index} onClick={() => toggleSelectedItem(8)}>
                    <Wrapper>
                      <div className={`${'badge'} ${item.className}`}>
                        {item.status}
                      </div>
                      <div>
                        <div className={'title'}>{item.title}</div>
                        <Wrapper>
                          <div className={'label'}>접수기간</div>
                          <div className={'value'}>{item.date}</div>
                        </Wrapper>
                        <Wrapper>
                          <div className={'label'}>수강대상</div>
                          <div className={'value'}>{item.user}</div>
                        </Wrapper>
                      </div>
                      <Column>
                        <Column className={'recruit'}>
                          <div className={'count_label'}>모집인원</div>
                          <div className={'count'}>
                            <span className={'highlight'}>
                              {item.recruited}
                            </span>
                            <span className={'dash'}>/</span>
                            {item.recruit}
                          </div>
                        </Column>
                        <Column className={'candidate'}>
                          <div className={'count_label'}>후보인원</div>
                          <div className={'count'}>
                            <span className={'highlight'}>{item.became}</span>
                            <span className={'dash'}>/</span>
                            {item.candidate}
                          </div>
                        </Column>
                      </Column>
                    </Wrapper>
                  </SlideItem>
                ))}
              </ItemWrapper>
            </SwiperSlide>
          </CustomSwiper>
        </Container>
      )}
    </>
  );
};

export default Course;
