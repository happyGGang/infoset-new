import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_a_y_facility_bg.svg';
import backgroundX from '../../../../assets/img/kiosk_a_x_facility_bg.svg';
import { Swiper } from 'swiper/react';

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
  width: '19.82788rem',
  height: '13.94006rem',
  marginTop: '4.39rem',
  marginLeft: '1.96rem',
  '& img': {
    width: '19.82788rem',
    height: '13.94006rem',
  },
  '& div': {
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '-1.79rem',
    left: '0.33rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    fontSize: '3.73488rem',
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
  margin: '3rem 0 0 1.98rem',
  '.swiper-pagination': {
    bottom: '0',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.26363rem',
    height: '0.26363rem',
    background: '#8B95A1',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#FFFFFF',
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
  backgroundColor: 'rgba(16, 13, 16, 0.50)',
  '& img': {
    width: '5.05306rem',
    height: '3.07581rem',
    borderRadius: '0.08788rem',
  },
  '& .index': {
    width: '5.05306rem',
    textAlign: 'left',
    color: '#ADB5BD',
    fontSize: '0.43938rem',
    letterSpacing: '0.022rem',
    fontWeight: 400,
    margin: '0 0 0.13rem 0.09rem',
  },
  '& .title': {
    width: '5.05306rem',
    textAlign: 'left',
    color: '#FFF',
    fontSize: '0.43938rem',
    fontWeight: 600,
    margin: '0 0 0.35rem 0.09rem',
  },
}));

const FilteringList = styled('div')(() => ({
  display: 'flex',
  gap: '3.4502rem',
  marginLeft: '7.07rem',
  marginTop: '1.2rem',
}));

const Filter = styled('div')<{ selected: boolean }>(({ selected }) => ({
  height: '1.22906rem',
  textAlign: 'center',
  color: selected ? '#FEC962' : '#ADB5BD',
  fontSize: '0.87881rem',
  fontWeight: 600,
  borderBottom: selected ? '2px solid #FEC962' : '2px solid #ADB5BD',
  cursor: 'pointer',
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  position: 'relative',
  display: 'flex',
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
  marginTop: '6.74rem',
  marginLeft: '10.23rem',
  '& img': {
    width: '35.24481rem',
    height: '24.80481rem',
  },
  '& div': {
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '-2.86rem',
    left: '0',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    fontSize: '6.64063rem',
    lineHeight: ' 6.64063rem',
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
  width: '24.37231rem',
  height: '31.42188rem',
  paddingLeft: '0.05rem',
  margin: '6.74rem 0 0 2.34rem',
  '.swiper-pagination': {
    right: '0.9rem',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: ' 0.46875rem',
    height: ' 0.46875rem',
    background: '#8B95A1',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#FFFFFF',
  },
}));

const GridX = styled('div')(() => ({
  display: 'grid',
  paddingRight: '2rem',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridRowGap: '0.59rem',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  width: '10.54688rem',
  borderRadius: '0.46875rem',
  backgroundColor: 'rgba(16, 13, 16, 0.50)',
  '& img': {
    width: '8.20313rem',
    height: '4.6875rem',
    borderRadius: ' 0.15625rem',
    margin: '0.63rem 0 1.17rem 1.17rem',
  },
  '& .index': {
    width: '5.05306rem',
    textAlign: 'left',
    color: '#ADB5BD',
    fontSize: '0.78125rem',
    letterSpacing: '0.03906rem',
    fontWeight: 400,
    margin: '1.17rem 0 0.23rem 1.17rem',
  },
  '& .title': {
    textAlign: 'left',
    color: '#FFF',
    fontSize: '0.78125rem',
    fontWeight: 600,
    margin: '0 0 0.63rem 1.17rem',
  },
}));

const FilteringListX = styled('div')(() => ({
  display: 'flex',
  gap: '3.4502rem',
  marginLeft: '17.34rem',
  marginTop: '3.59rem',
}));

const FilterX = styled('div')<{ selected: boolean }>(({ selected }) => ({
  height: '2.22575rem',
  textAlign: 'center',
  color: selected ? '#FEC962' : '#ADB5BD',
  fontSize: '1.5625rem',
  fontWeight: 600,
  borderBottom: selected ? '2px solid #FEC962' : '2px solid #ADB5BD',
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
