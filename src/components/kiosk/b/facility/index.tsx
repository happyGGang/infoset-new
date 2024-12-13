import React, { useEffect, useState } from 'react';
import {
  Container,
  Map,
  CustomSwiper,
  SlideItem,
  Grid,
  FilteringList,
  Filter,
  ContainerX,
  CustomSwiperX,
  FilteringListX,
  FilterX,
  GridX,
  MapX,
  SlideItemX,
} from './index.styled';
import map1 from '../../../../assets/img/map01.svg';
import map2 from '../../../../assets/img/map02.svg';
import map3 from '../../../../assets/img/map03.svg';
import { Pagination } from 'swiper/modules';
import {
  secondFloor,
  firstFloor,
  thirdFloor,
} from '../../../../constants/facility.constants';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import FacilityPopup from '../../../facility-popup';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const Facility = () => {
  const [selectedFloor, setSelectedFloor] = useState<1 | 2 | 3>(2);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  const [animate, setAnimate] = useState(false);
  const { isLandscape } = useOrientationStore();

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedFloor]);

  const floorData: { [key in 1 | 2 | 3]: any } = {
    1: { map: map1, facilities: firstFloor },
    2: { map: map2, facilities: secondFloor },
    3: { map: map3, facilities: thirdFloor },
  };

  const handleFilterClick = (floor: any) => setSelectedFloor(floor);

  const getFacilitiesForFloor = () =>
    floorData[selectedFloor]?.facilities || [];

  const renderFacilities = (startIndex: number, endIndex: number) => {
    return getFacilitiesForFloor()
      .slice(startIndex, endIndex)
      .map((item: any, index: number) => (
        <SlideItem
          key={index}
          onClick={() => {
            setSelectedFacility({ ...item, index: startIndex + index });
            setIsOpen(true);
          }}
        >
          <div className={'index'}>facility {startIndex + index + 1}</div>
          <div className={'title'}>{item.title}</div>
          <img src={item.img} alt="" />
        </SlideItem>
      ));
  };

  const renderFacilitiesX = (startIndex: number, endIndex: number) => {
    return getFacilitiesForFloor()
      .slice(startIndex, endIndex)
      .map((item: any, index: number) => (
        <SlideItemX
          key={index}
          onClick={() => {
            setSelectedFacility({ ...item, index: startIndex + index });
            setIsOpen(true);
          }}
        >
          <div className={'index'}>facility {startIndex + index + 1}</div>
          <div className={'title'}>{item.title}</div>
          <img src={item.img} alt="" />
        </SlideItemX>
      ));
  };

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <MapX>
            <img
              src={floorData[selectedFloor]?.map}
              alt={`map${selectedFloor}`}
              className={`${animate ? 'animate' : ''}`}
            />
            <div className={`${animate ? 'animate' : ''}`}>
              {selectedFloor}F
            </div>
          </MapX>

          <div>
            <FilteringListX>
              {[1, 2, 3].map((floor) => (
                <FilterX
                  key={floor}
                  onClick={() => handleFilterClick(floor)}
                  selected={selectedFloor === floor}
                >
                  {floor}F
                </FilterX>
              ))}
            </FilteringListX>
            <CustomSwiperX
              slidesPerView={1}
              slidesPerGroup={1}
              pagination
              spaceBetween={10}
              modules={[Pagination]}
              loop
            >
              <SwiperSlide>
                <GridX>{renderFacilitiesX(0, 6)}</GridX>
              </SwiperSlide>
              {selectedFloor === 2 && (
                <SwiperSlide>
                  <GridX>{renderFacilitiesX(6, 12)}</GridX>
                </SwiperSlide>
              )}
            </CustomSwiperX>
          </div>

          <FacilityPopup
            landscape
            bg={'#E5DDD8'}
            caption={'#6B7684'}
            title={'#191F28'}
            index={selectedFacility?.index}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            data={selectedFacility}
          />
        </ContainerX>
      ) : (
        <Container>
          <Map>
            <img
              src={floorData[selectedFloor]?.map}
              alt={`map${selectedFloor}`}
              className={`${animate ? 'animate' : ''}`}
            />
            <div className={`${animate ? 'animate' : ''}`}>
              {selectedFloor}F
            </div>
          </Map>
          <FilteringList>
            {[1, 2, 3].map((floor) => (
              <Filter
                key={floor}
                onClick={() => handleFilterClick(floor)}
                selected={selectedFloor === floor}
              >
                {floor}F
              </Filter>
            ))}
          </FilteringList>
          <CustomSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            pagination
            spaceBetween={6}
            modules={[Pagination]}
            loop
          >
            <SwiperSlide>
              <Grid>{renderFacilities(0, 6)}</Grid>
            </SwiperSlide>
            {selectedFloor === 2 && (
              <SwiperSlide>
                <Grid>{renderFacilities(6, 12)}</Grid>
              </SwiperSlide>
            )}
          </CustomSwiper>

          <FacilityPopup
            bg={'#E5DDD8'}
            caption={'#6B7684'}
            title={'#191F28'}
            index={selectedFacility?.index}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            data={selectedFacility}
          />
        </Container>
      )}
    </>
  );
};

export default Facility;
