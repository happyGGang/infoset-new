import React, { useEffect, useState } from 'react';
import {
  Container,
  SelectedBook,
  Title,
  Details,
  Wrapper,
  LeftLabel,
  RightLabel,
  Value,
  Trigger,
  Summary,
  CustomSwiper,
  CustomSlide,
  Row,
  ContainerX,
  SelectedBookX,
  TitleX,
  DetailX,
  WrapperX,
  LeftLabelX,
  RightLabelX,
  ValueX,
  TriggerX,
  SummaryX,
  CustomSwiperX,
  CustomSlideX,
} from './index.styled';
import { book_list } from '../../../../constants/book.constants';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import LocationPopup from '../../../location-popup';
import { SwiperSlide } from 'swiper/react';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Detail = () => {
  const [selectedItem, setSelectedItem] = useState(book_list[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { isLandscape } = useOrientationStore();
  const newBookList = [...book_list.slice(1), book_list[0]];

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedItem]);

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <div>
            <SelectedBookX>
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className={`${animate ? 'animate' : ''}`}
              />
              <div className={'badge'}>
                대출
                <br />
                가능
              </div>
            </SelectedBookX>
            <TitleX>{selectedItem.title}</TitleX>
          </div>

          <div>
            <DetailX>
              <div>
                <WrapperX>
                  <LeftLabelX>저자명</LeftLabelX>
                  <ValueX>{selectedItem.writer}</ValueX>
                </WrapperX>
                <WrapperX>
                  <LeftLabelX>출판사</LeftLabelX>
                  <ValueX>{selectedItem.publisher}</ValueX>
                </WrapperX>
                <WrapperX>
                  <LeftLabelX>발행년</LeftLabelX>
                  <ValueX>{selectedItem.date}</ValueX>
                </WrapperX>
              </div>
              <div>
                <Wrapper>
                  <RightLabelX>서가위치</RightLabelX>
                  <ValueX>2F 종합자료실</ValueX>
                </Wrapper>
                <Wrapper>
                  <RightLabelX>청구기호</RightLabelX>
                  <ValueX>490-99-밀233ㅁ=2</ValueX>
                </Wrapper>
                <Wrapper>
                  <RightLabelX>등록번호</RightLabelX>
                  <ValueX>BZK000908995</ValueX>
                </Wrapper>
              </div>
            </DetailX>
            <TriggerX onClick={() => setIsOpen(true)}>
              소장도서 서가위치보기
            </TriggerX>
            <SummaryX>{selectedItem.summary}</SummaryX>

            <div className={'swiper-container'}>
              <button className={'swiper-button-prev'}>Prev</button>
              <button className={'swiper-button-next'}>Next</button>
              <CustomSwiperX
                slidesPerView={5}
                slidesPerGroup={5}
                modules={[Navigation]}
                loop
                spaceBetween={30}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
              >
                {newBookList?.slice(0, 10)?.map((item, index) => (
                  <CustomSlideX
                    key={index}
                    onClick={() => setSelectedItem(item)}
                  >
                    <img src={item.img} alt={`Slide ${index}`} />
                    <div className={'title'}>{item.title}</div>
                  </CustomSlideX>
                ))}
              </CustomSwiperX>
            </div>
          </div>

          <LocationPopup
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            landscape
          />
        </ContainerX>
      ) : (
        <Container>
          <SelectedBook>
            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className={`${animate ? 'animate' : ''}`}
            />
            <div className={'badge'}>
              대출
              <br />
              가능
            </div>
          </SelectedBook>
          <Title>{selectedItem.title}</Title>
          <Details>
            <div>
              <Wrapper>
                <LeftLabel>저자명</LeftLabel>
                <Value>{selectedItem.writer}</Value>
              </Wrapper>
              <Wrapper>
                <LeftLabel>출판사</LeftLabel>
                <Value>{selectedItem.publisher}</Value>
              </Wrapper>
              <Wrapper>
                <LeftLabel>발행년</LeftLabel>
                <Value>{selectedItem.date}</Value>
              </Wrapper>
            </div>
            <div>
              <Wrapper>
                <RightLabel>서가위치</RightLabel>
                <Value>2F 종합자료실</Value>
              </Wrapper>
              <Wrapper>
                <RightLabel>청구기호</RightLabel>
                <Value>490-99-밀233ㅁ=2</Value>
              </Wrapper>
              <Wrapper>
                <RightLabel>등록번호</RightLabel>
                <Value>BZK000908995</Value>
              </Wrapper>
            </div>
          </Details>
          <Trigger onClick={() => setIsOpen(true)}>
            소장도서 서가위치보기
          </Trigger>
          <Summary>{selectedItem.summary}</Summary>
          <CustomSwiper
            slidesPerView={1}
            navigation
            modules={[Navigation]}
            loop
          >
            <SwiperSlide>
              <Row>
                {newBookList?.slice(0, 5).map((item, index) => (
                  <CustomSlide
                    key={index}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className={'badge'}>{index + 1}위</div>
                    <img src={item.img} alt={`Slide ${index}`} />
                    <div className={'title'}>{item.title}</div>
                  </CustomSlide>
                ))}
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row>
                {newBookList?.slice(5, 10).map((item, index) => (
                  <CustomSlide
                    key={index}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className={'badge'}>{index + 6}위</div>
                    <img src={item.img} alt={`Slide ${index}`} />
                    <div className={'title'}>{item.title}</div>
                  </CustomSlide>
                ))}
              </Row>
            </SwiperSlide>
          </CustomSwiper>
          <LocationPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Container>
      )}
    </>
  );
};

export default Detail;
