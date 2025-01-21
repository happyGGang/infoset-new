import { styled } from '@mui/material';
import background from '../../../../assets/img/library_c_facility_bg.svg';
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
  width: '20.254rem',
  marginTop: '4.5rem',
  marginLeft: '1.75rem',
  '& img': {
    width: '20.254rem',
    objectFit: 'fit-content',
  },
  '& div': {
    color: '#191F28',
    position: 'absolute',
    bottom: '0',
    left: '0.64rem',
    fontWeight: 300,
    fontFamily: 'Pretendard',
    fontSize: '3.21525rem',
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
  height: '18.28325rem',
  paddingLeft: '0.05rem',
  margin: '0 0 0 1.98rem',
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
    background: '#333D4B',
  },
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.66rem 0.44rem 0.66rem 0.44rem',
  cursor: 'pointer',
  borderRadius: '0.26363rem',
  '& .title_wrapper': {
    marginTop: '0.3rem',
    display: 'flex',
    gap: '0.26rem',
    alignItems: 'center',
    marginBottom: '0.36rem',
    '.index': {
      color: '#8B95A1',
      fontWeight: 300,
      fontSize: '1.53825rem',
      lineHeight: 'normal',
    },
    '.title': {
      color: '#191F28',
      fontSize: '0.879rem',
      lineHeight: 'normal',
      fontWeight: 600,
    },
    '.title_en': {
      color: '#6B7684',
      fontSize: '0.37713rem',
      fontWeight: 400,
      lineHeight: '140%',
      textTransform: 'uppercase',
    },
  },
  '.facility_img': {
    width: '18.67875rem',
    height: '3.32919rem',
    borderRadius: '0.21975rem',
    marginBottom: '0.66rem',
    objectFit: 'cover',
  },
  '.caption': {
    padding: '0.65925rem 0.879rem',
    color: '#4E5968',
    fontSize: '0.57138rem',
    fontWeight: 500,
    lineHeight: '150%',
    borderRadius: '0.52738rem',
    background: '#EFF1F3',
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
  gap: '0.26rem',
  marginLeft: '14.75rem',
}));

const Filter = styled('div')<{ selected: boolean }>(({ selected }) => ({
  height: '1.97775rem',
  width: '1.97775rem',
  textAlign: 'center',
  color: selected ? '#FFF' : '#191F28',
  fontSize: '0.52738rem',
  fontWeight: 600,
  fontFamily: 'Pretendard',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.08788rem',
  background: selected ? '#309BDF' : '#D9D9D9',
}));

export { Container, Map, CustomSwiper, SlideItem, FilteringList, Filter };
