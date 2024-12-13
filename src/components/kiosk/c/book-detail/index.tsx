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
  SummaryTitle,
  Row,
} from './index.styled';
import { book_list } from '../../../../constants/book.constants';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import LocationPopup from '../../../location-popup';
import { SwiperSlide } from 'swiper/react';
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
        <div>도서정보 가로 모드</div>
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
          <SummaryTitle>책소개</SummaryTitle>
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

export default BookDetail;
