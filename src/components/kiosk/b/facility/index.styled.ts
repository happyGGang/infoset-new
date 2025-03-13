import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_b_y_facility_bg.svg';
import { Swiper } from 'swiper/react';
import backgroundX from '../../../../assets/img/kiosk_b_x_facility_bg.svg';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  position: 'relative',
  opacity: 0,
  animation: 'fadeIn 1s ease-out forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const Map = styled('div')(() => ({
  position: 'relative',
  width: '20.30663rem',
  height: '14.26956rem',
  marginTop: '4.45rem',
  marginLeft: '1.7rem',
  '& img': {
    width: '20.30663rem',
    height: '14.26956rem',
  },
  '& div': {
    color: '#FFFFFF',
    position: 'absolute',
    top: '0',
    right: '0.26rem',
    fontWeight: 500,
    fontSize: '3.29294rem',
    lineHeight: 'normal',
  },
  '.animate': {
    animation: 'float-up 0.5s ease-out forwards',
  },
  '@keyframes float-up': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '19.77294rem',
  height: '13.5rem',
  paddingLeft: '0.05rem',
  margin: '0.64rem 0 0 1.98rem',
  '.swiper-pagination': {
    bottom: '0.5rem',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.26363rem',
    height: '0.26363rem',
    background: '#ADB5BD',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#191F28',
  },
}));

const Grid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridRowGap: '0.33rem',
  gridColumnGap: '0.33rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.66rem 0.44rem 0.66rem 0.44rem',
  cursor: 'pointer',
  width: '5.5rem',
  borderRadius: '0.26363rem',
  alignItems: 'center',
  backgroundColor: '#E5DDD8',
  '& img': {
    width: '5.05306rem',
    height: '3.07581rem',
    borderRadius: '0.08788rem',
  },
  '& .index': {
    width: '5.05306rem',
    textAlign: 'left',
    color: '#6B7684',
    fontSize: '0.43938rem',
    letterSpacing: '0.022rem',
    fontWeight: 400,
    margin: '0 0 0.13rem 0.09rem',
  },
  '& .title': {
    width: '5.05306rem',
    textAlign: 'left',
    color: '#191F28',
    fontSize: '0.43938rem',
    fontWeight: 600,
    margin: '0 0 0.35rem 0.09rem',
  },
}));

const FilteringList = styled('div')(() => ({
  display: 'flex',
  gap: '0.88rem',
  marginLeft: '6.15rem',
  marginTop: '2.63rem',
}));

const Filter = styled('div')<{ selected: boolean }>(({ selected }) => ({
  height: '1.50156rem',
  width: '3.12781rem',
  textAlign: 'center',
  color: selected ? '#FFFFFF' : '#8B95A1',
  fontSize: '0.87813rem',
  fontWeight: 600,
  lineHeight: 'normal',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5.48831rem',
  backgroundColor: selected ? '#191F28' : '#F5F0EE',
  cursor: 'pointer',
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  position: 'relative',
  display: 'flex',
  gap: '6.54rem',
  opacity: 0,
  animation: 'fadeIn 1s ease-out forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const MapX = styled('div')(() => ({
  position: 'relative',
  width: '35.24481rem',
  height: '24.80481rem',
  marginTop: '9.77rem',
  marginLeft: '10.23rem',
  '& img': {
    width: '35.24481rem',
    height: '24.80481rem',
  },
  '& div': {
    color: '#FFFFFF',
    position: 'absolute',
    top: '-1.3rem',
    right: '1.62rem',
    fontWeight: 500,
    fontSize: '5.85938rem',
    lineHeight: ' 5.85938rem',
  },
  '.animate': {
    animation: 'float-up 0.5s ease-out forwards',
  },
  '@keyframes float-up': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '19.53125rem',
  height: '27.83206rem',
  marginTop: '1.15rem',
  '.swiper-pagination': {
    bottom: '0',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: ' 0.46875rem',
    height: ' 0.46875rem',
    background: '#ADB5BD',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#191F28',
  },
}));

const GridX = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridRowGap: '0.47rem',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  width: '8.5rem',
  borderRadius: '0.375rem',
  backgroundColor: '#E5DDD8',
  padding: '0.78rem 0 0.78rem 0.78rem',
  '& img': {
    width: '7.8125rem',
    height: '4.0625rem',
    borderRadius: ' 0.125rem',
    margin: '0',
  },
  '& .index': {
    width: '5.05306rem',
    textAlign: 'left',
    color: '#ADB5BD',
    fontSize: '0.625rem',
    lineHeight: 'normal',
    fontWeight: 400,
    margin: '0 0 0.19rem 0',
  },
  '& .title': {
    textAlign: 'left',
    color: '#191F28',
    fontSize: '0.9rem',
    fontWeight: 600,
    margin: '0 0 0.5rem 0',
  },
}));

const FilteringListX = styled('div')(() => ({
  display: 'flex',
  gap: '0.39rem',
  marginTop: '5.86rem',
  marginLeft: '2rem',
}));

const FilterX = styled('div')<{ selected: boolean }>(({ selected }) => ({
  textAlign: 'center',
  height: '2.65625rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5rem',
  color: selected ? '#FFFFFF' : '#8B95A1',
  borderRadius: '9.76563rem',
  fontSize: '1.5625rem',
  fontWeight: 600,
  backgroundColor: selected ? '#191F28' : '#F5F0EE',
  cursor: 'pointer',
}));

export {
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
};
