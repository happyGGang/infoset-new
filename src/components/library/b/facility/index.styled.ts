import { styled } from '@mui/material';
import background from '../../../../assets/img/library_b_facility_bg.svg';
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
  width: '20.32688rem',
  height: '14.77819rem',
  marginTop: '4.5rem',
  marginLeft: '1.7rem',
  '& img': {
    width: '19.82788rem',
    height: '13.94006rem',
  },
  '& div': {
    color: '#FFFFFF',
    position: 'absolute',
    top: '0',
    right: '0.27rem',
    fontWeight: 500,
    fontFamily: 'Pretendard',
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
  width: '19.775rem',
  height: '12.97638rem',
  margin: '1.08rem 0 0 2.02rem',
  '.swiper-pagination': {
    bottom: '0',
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

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.66rem 0.44rem 0.66rem 0.44rem',
  cursor: 'pointer',
  borderRadius: '0.26363rem',
  '& .title': {
    textAlign: 'left',
    color: '#191F28',
    fontFamily: 'Pretendard',
    fontSize: '1.3185rem',
    fontWeight: 600,
    marginBottom: '0.89rem',
  },
  '.caption': {
    padding: '0.65925rem 0.879rem',
    color: '#191F28',
    fontSize: '0.57138rem',
    fontWeight: 500,
    lineHeight: '150%',
    borderRadius: '0.52738rem',
    background: '#E5DDD8',
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
      color: '#191F28',
      fontSize: '0.65925rem',
      fontWeight: 500,
      lineHeight: '140%',
      letterSpacing: '-0.0165rem',
    },
  },
}));

const FilteringList = styled('div')(() => ({
  display: 'flex',
  gap: '0.88rem',
  marginLeft: '5.5rem',
  marginTop: '3.83rem',
}));

const Filter = styled('div')<{ selected: boolean }>(({ selected }) => ({
  height: '1.9415rem',
  textAlign: 'center',
  color: selected ? '#FFF' : '#8B95A1',
  width: '3.6995rem',
  backgroundColor: selected ? '#191F28' : 'none',
  fontSize: '0.87881rem',
  fontWeight: 600,
  fontFamily: 'Pretendard',
  borderRadius: '5.49375rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export { Container, Map, CustomSwiper, SlideItem, FilteringList, Filter };
