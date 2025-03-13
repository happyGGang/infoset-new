import { styled } from '@mui/material';
import background from '../../../../assets/img/library_a_facility_bg.svg';
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
  '.time_date_wrapper': {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '1.32rem',
    right: '2.2rem',
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
    fontWeight: 200,
    fontSize: '3.73575rem',
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
  height: '13.9603rem',
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

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.66rem 0.44rem 0.66rem 0.44rem',
  cursor: 'pointer',
  borderRadius: '0.26363rem',
  '& .title': {
    textAlign: 'left',
    color: '#FFF',
    fontSize: '1.3185rem',
    fontWeight: 600,
    marginBottom: '0.89rem',
  },
  '.caption': {
    padding: '0.65925rem 0.879rem',
    color: '#EFF1F3',
    fontSize: '0.57138rem',
    fontWeight: 500,
    lineHeight: '150%',
    borderRadius: '0.52738rem',
    background: 'rgba(0, 0, 0, 0.30)',
    marginTop: '0.52rem',
  },
  '.list': {
    display: 'flex',
    gap: '0.35rem',
    marginBottom: '0.22rem',
    '& img': {
      marginTop: '0.09rem',
      width: '0.74713rem',
      height: '0.74713rem',
    },
    '& div': {
      color: '#FFF',
      fontSize: '0.65925rem',
      fontWeight: 500,
      lineHeight: '140%',
      letterSpacing: '-0.0165rem',
    },
  },
}));

const FilteringList = styled('div')(() => ({
  display: 'flex',
  gap: '3.4502rem',
  marginLeft: '7.07rem',
  marginTop: '1.97rem',
}));

const Filter = styled('div')<{ selected: boolean }>(({ selected }) => ({
  height: '1.22906rem',
  textAlign: 'center',
  color: selected ? '#FEC962' : '#ADB5BD',
  fontSize: '0.87881rem',
  fontWeight: 600,
  borderBottom: selected ? '2px solid #FEC962' : '2px solid #ADB5BD',
}));

const Time = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'Century Gothic',
  fontSize: '0.83506rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

const Date = styled('div')(() => ({
  color: '#FFF',
  fontSize: '0.30763rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

export {
  Container,
  Map,
  CustomSwiper,
  SlideItem,
  FilteringList,
  Filter,
  Time,
  Date,
};
