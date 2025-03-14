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
  MapX,
  CustomSwiperX,
  SlideItemX,
  GridX,
  FilteringListX,
  FilterX,
} from './index.styled';
import map1 from '../../../../assets/img/map01_dark.svg';
import map2 from '../../../../assets/img/map02_dark.svg';
import map3 from '../../../../assets/img/map03_dark.svg';
import { Navigation } from 'swiper/modules';
import {
  secondFloor,
  firstFloor,
  thirdFloor,
} from '../../../../constants/facility.constants';
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import FacilityPopup from '../../../facility-popup';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const FacilityC = () => {
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
          <div className={'header'}>
            <div className={'index'}>
              {(startIndex + index + 1).toString().padStart(2, '0')}
            </div>
            <div>
              <div className={'title'}>{item.title}</div>
              <div className={'title_en'}>{item.title_en}</div>
            </div>
          </div>
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
          <div className={'header'}>
            <div className={'index'}>
              {(startIndex + index + 1).toString().padStart(2, '0')}
            </div>
            <div>
              <div className={'title'}>{item.title}</div>
              <div className={'title_en'}>{item.title_en}</div>
            </div>
          </div>
          <img src={item.img} alt="" />
        </SlideItemX>
      ));
  };

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <div className={'wrapper_x'}>
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
          </div>

          <CustomSwiperX
            slidesPerView={1}
            slidesPerGroup={1}
            navigation
            spaceBetween={6}
            modules={[Navigation]}
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

          <FacilityPopup
            bg={'#8B95A1'}
            caption={'#FFFFFF'}
            title={'#FFFFFF'}
            index={selectedFacility?.index}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            data={selectedFacility}
            landscape
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
            navigation
            spaceBetween={6}
            modules={[Navigation]}
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
            bg={'#8B95A1'}
            caption={'#FFFFFF'}
            title={'#FFFFFF'}
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

export default FacilityC;
