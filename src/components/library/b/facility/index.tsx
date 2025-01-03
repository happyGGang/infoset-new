import React, { useEffect, useState } from 'react';
import {
  Container,
  Map,
  CustomSwiper,
  SlideItem,
  FilteringList,
  Filter,
} from './index.styled';
import map1 from '../../../../assets/img/map01.svg';
import map2 from '../../../../assets/img/map02.svg';
import map3 from '../../../../assets/img/map03.svg';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  secondFloor,
  firstFloor,
  thirdFloor,
} from '../../../../constants/facility.constants';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import check from '../../../../assets/icon/check.svg';

const Facility = () => {
  const [selectedFloor, setSelectedFloor] = useState<1 | 2 | 3>(1);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedFloor]);

  useEffect(() => {
    const changeFloor = () => {
      if (selectedFloor === 1) {
        setSelectedFloor(2);
      } else if (selectedFloor === 2) {
        setSelectedFloor(3);
      } else {
        setSelectedFloor(1);
      }
    };

    const floorChangeInterval = setInterval(
      () => {
        changeFloor();
      },
      selectedFloor === 1 ? 10000 : selectedFloor === 2 ? 45000 : 10000
    );

    return () => clearInterval(floorChangeInterval);
  }, [selectedFloor]);

  const floorData: { [key in 1 | 2 | 3]: any } = {
    1: { map: map1, facilities: firstFloor },
    2: { map: map2, facilities: secondFloor },
    3: { map: map3, facilities: thirdFloor },
  };

  const handleFilterClick = (floor: any) => setSelectedFloor(floor);

  const getFacilitiesForFloor = () =>
    floorData[selectedFloor]?.facilities || [];

  return (
    <Container>
      <Map>
        <img
          src={floorData[selectedFloor]?.map}
          alt={`map${selectedFloor}`}
          className={`${animate ? 'animate' : ''}`}
        />
        <div className={`${animate ? 'animate' : ''}`}>{selectedFloor}F</div>
      </Map>
      <FilteringList>
        {[1, 2, 3].map((floor) => (
          <Filter key={floor} selected={selectedFloor === floor}>
            {floor}F
          </Filter>
        ))}
      </FilteringList>
      <CustomSwiper
        slidesPerView={1}
        slidesPerGroup={1}
        pagination
        spaceBetween={6}
        autoplay={{ delay: 7000 }}
        allowTouchMove={false}
        modules={[Pagination, Autoplay]}
        loop
      >
        {getFacilitiesForFloor().map((facility: any, index: number) => (
          <SwiperSlide key={facility.index}>
            <SlideItem onClick={() => setSelectedFacility(facility)}>
              <div className={'title'}>
                {index + 1} {facility.title}
              </div>
              <div className={'list'}>
                <img src={check} alt="" />
                <div>이용대상 : {facility.user}</div>
              </div>
              <div className={'list'}>
                <img src={check} alt="" />
                <div>{facility.description}</div>
              </div>
              <div className={'caption'}>
                기후 위기와 생태환경 주제 도서가 모여있는 '에코(공존ECO)존’,
                만화책을 열람할 수 있는 ‘코믹스’코너, 조용히 독서에 몰입할 수
                있는 ‘집중독서존’운영 <br />※ 코믹스존 도서는 도서관내에서만
                열람 가능(대출불가)
              </div>
            </SlideItem>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default Facility;
