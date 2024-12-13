import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_facility_bg.svg';
import arrow from '../../../../assets/icon/swiper-arrow.svg';
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
  width: '19.82094rem',
  height: '13.94956rem',
  marginTop: '4.83rem',
  marginLeft: '1.96rem',
  '& img': {
    width: '19.82094rem',
    height: '13.94956rem',
  },
  '& div': {
    color: '#191F28',
    position: 'absolute',
    bottom: '0',
    left: '0.43rem',
    fontWeight: 300,
    fontFamily: 'Pretendard',
    fontSize: '3.21431rem',
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
  width: '23.72625rem',
  height: '15.14756rem',
  margin: '0.77rem 0 0 0',
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.7575rem',
    height: '1.7575rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    '&::after': {
      display: 'none',
    },
  },
  '.swiper-button-next': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.7575rem',
    height: '1.7575rem',
    zIndex: 10,
    '&::after': {
      display: 'none',
    },
  },
}));

const Grid = styled('div')(() => ({
  display: 'grid',
  paddingLeft: '2.53rem',
  width: '18.6735rem',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridRowGap: '0.2rem',
  gridColumnGap: '1.45rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  width: '8.61175rem',
  '& .header': {
    display: 'flex',
  },
  '& img': {
    marginTop: '0.34rem',
    width: '8.61175rem',
    height: '3.32825rem',
    borderRadius: '0.08788rem',
  },
  '& .index': {
    color: '#8B95A1',
    fontFamily: 'Roboto Flex',
    fontSize: '1.09844rem',
    lineHeight: '120%',
    fontWeight: 300,
  },
  '& .title': {
    marginLeft: '0.3rem',
    marginTop: '0.3rem',
    color: '#191F28',
    fontFamily: 'Pretendard',
    fontSize: '0.48331rem',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  '& .title_en': {
    marginLeft: '0.3rem',
    color: '#6B7684',
    fontFamily: 'Roboto',
    fontSize: '0.28556rem',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '140%',
  },
}));

const FilteringList = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.26rem',
  marginRight: '2.53rem',
  marginTop: '0.25rem',
}));

const Filter = styled('div')<{ selected: boolean }>(({ selected }) => ({
  height: '1.97719rem',
  width: '1.97719rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.08788rem',
  color: selected ? '#FFFFFF' : '#191F28',
  fontSize: '0.52725rem',
  fontWeight: 600,
  fontFamily: 'Pretendard',
  backgroundColor: selected ? '#309BDF' : '#D9D9D9',
  cursor: 'pointer',
}));

export { Container, Map, CustomSwiper, SlideItem, Grid, FilteringList, Filter };
