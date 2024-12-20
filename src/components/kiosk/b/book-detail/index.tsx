import React, { useEffect, useState } from 'react';
import {
  Row,
  ContentWrapper,
  Container,
  SelectedBook,
  Title,
  Detail,
  Wrapper,
  Label,
  Value,
  Trigger,
  Summary,
  CustomSwiper,
  CustomSlide,
  Writer,
  SummaryTitle,
  RowX,
  ContentWrapperX,
  ContainerX,
  SelectedBookX,
  TitleX,
  DetailX,
  WrapperX,
  LabelX,
  ValueX,
  TriggerX,
  SummaryX,
  CustomSwiperX,
  CustomSlideX,
  WriterX,
  SummaryTitleX,
} from './index.styled';
import { book_list } from '../../../../constants/book.constants';
import LocationPopup from '../../../location-popup';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const BookDetail = () => {
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
        <Container>
          <ContentWrapper>
            <Row>
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
              <div>
                <Title>{selectedItem.title}</Title>
                <Writer>
                  {selectedItem.writer} / {selectedItem.publisher}
                </Writer>
                <Detail>
                  <Wrapper>
                    <Label>발행년도</Label>
                    <Value>{selectedItem.date}</Value>
                  </Wrapper>
                  <Wrapper>
                    <Label>ISBN</Label>
                    <Value>9791162543726</Value>
                  </Wrapper>
                  <Wrapper>
                    <Label>서가위치</Label>
                    <Value>2F 종합자료실</Value>
                  </Wrapper>
                  <Wrapper>
                    <Label>청구기호</Label>
                    <Value>490-99-밀233ㅁ=2</Value>
                  </Wrapper>
                </Detail>
                <Trigger onClick={() => setIsOpen(true)}>
                  소장도서 서가위치보기
                </Trigger>
              </div>
            </Row>
            <SummaryTitle>책소개</SummaryTitle>
            <Summary>{selectedItem.summary}</Summary>
          </ContentWrapper>

          <CustomSwiper
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={30}
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
          <LocationPopup
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            landscape
          />
        </Container>
      ) : (
        <Container>
          <ContentWrapper>
            <Row>
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
              <div>
                <Title>{selectedItem.title}</Title>
                <Writer>
                  {selectedItem.writer} / {selectedItem.publisher}
                </Writer>
                <Detail>
                  <Wrapper>
                    <Label>발행년도</Label>
                    <Value>{selectedItem.date}</Value>
                  </Wrapper>
                  <Wrapper>
                    <Label>ISBN</Label>
                    <Value>9791162543726</Value>
                  </Wrapper>
                  <Wrapper>
                    <Label>서가위치</Label>
                    <Value>2F 종합자료실</Value>
                  </Wrapper>
                  <Wrapper>
                    <Label>청구기호</Label>
                    <Value>490-99-밀233ㅁ=2</Value>
                  </Wrapper>
                </Detail>
                <Trigger onClick={() => setIsOpen(true)}>
                  소장도서 서가위치보기
                </Trigger>
              </div>
            </Row>
            <SummaryTitle>책소개</SummaryTitle>
            <Summary>{selectedItem.summary}</Summary>
          </ContentWrapper>

          <CustomSwiper
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={30}
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

export default BookDetail;
