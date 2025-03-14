import React, { useEffect, useState } from 'react';
import {
  Container,
  SelectedBook,
  Title,
  Detail,
  Wrapper,
  LeftLabel,
  RightLabel,
  Value,
  Trigger,
  Summary,
  CustomSlide,
  CustomSwiper,
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
  CustomSlideX,
  CustomSwiperX,
} from './index.styled';
import { book_list } from '../../../../constants/book.constants';
import { Pagination } from 'swiper/modules';
import LocationPopup from '../../../location-popup';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const BookDetailA = () => {
  const { isLandscape } = useOrientationStore();
  const [selectedItem, setSelectedItem] = useState(book_list[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
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

            <CustomSwiperX
              slidesPerView={6}
              pagination
              slidesPerGroup={6}
              modules={[Pagination]}
              spaceBetween={9}
              loop
            >
              {newBookList?.map((item, index) => (
                <CustomSlideX key={index} onClick={() => setSelectedItem(item)}>
                  <img src={item.img} alt={`Slide ${index}`} />
                  <div className={'title'}>{item.title}</div>
                  <div className={'writer'}>{item.writer}</div>
                </CustomSlideX>
              ))}
            </CustomSwiperX>
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
          <Detail>
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
          </Detail>
          <Trigger onClick={() => setIsOpen(true)}>
            소장도서 서가위치보기
          </Trigger>
          <Summary>{selectedItem.summary}</Summary>

          <CustomSwiper
            slidesPerView={6}
            pagination
            slidesPerGroup={6}
            modules={[Pagination]}
            spaceBetween={9}
            loop
          >
            {newBookList?.map((item, index) => (
              <CustomSlide key={index} onClick={() => setSelectedItem(item)}>
                <img src={item.img} alt={`Slide ${index}`} />
                <div className={'title'}>{item.title}</div>
                <div className={'writer'}>{item.writer}</div>
              </CustomSlide>
            ))}
          </CustomSwiper>
          <LocationPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Container>
      )}
    </>
  );
};

export default BookDetailA;
