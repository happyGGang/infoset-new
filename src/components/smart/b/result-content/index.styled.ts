import { styled } from '@mui/material';
import { Swiper } from 'swiper/react';

const CustomSwiper = styled(Swiper)(() => ({
  width: '19.89414rem',
  height: '32.39502rem',
  paddingLeft: '0.05rem',
  margin: '1.54rem 0 0 0.3rem',
  '.swiper-pagination': {
    left: '-0.8rem',
    bottom: '1.6rem',
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
  gridRowGap: '1.1rem',
  gridColumnGap: '0.5rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '4.83806rem',
    height: '7.43306rem',
    borderRadius: ' 0.26388rem',
    boxShadow: '0px 1.759px 5.278px 0px rgba(25, 33, 61, 0.20)',
    marginBottom: '0.31rem',
  },
  '& .title': {
    color: '#191f28',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: ' -0.01319rem',
    fontSize: '0.52725rem',
    marginBottom: '0.09rem',
    padding: '0 0.09rem 0 0.09rem',
    width: '4.66215rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#6b7684',
    fontFamily: 'Pretendard',
    fontWeight: 400,
    letterSpacing: '-0.011rem',
    fontSize: '0.43938rem',
    marginBottom: '0.09rem',
    padding: '0 0.09rem 0 0.09rem',
    width: '4.66215rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '62.5rem',
  height: '29rem',
  paddingLeft: '1rem',
  margin: '1.52rem 0 0 -0.9rem',
  '.swiper-pagination': {
    bottom: '0rem',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.46875rem',
    height: '0.46875rem',
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
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridRowGap: '1.17rem',
  gridColumnGap: '4rem',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '6.95313rem',
    height: '10.05863rem',
    borderRadius: ' 0.46875rem',
    boxShadow: '3.25px 3.25px 10px 1.5px rgba(0, 0, 0, 0.20)',
    marginBottom: '0.55rem',
  },
  '& .title': {
    color: '#191f28',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: ' -0.02344rem',
    fontSize: '0.9375rem',
    marginBottom: '0.16rem',
    padding: '0 0.16rem 0 0.16rem',
    width: '6.64rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#6b7684',
    fontFamily: 'Pretendard',
    fontWeight: 400,
    marginBottom: '0.16rem',
    letterSpacing: '-0.011rem',
    fontSize: '0.70313rem',
    padding: '0 0.16rem 0 0.16rem',
    width: '6.64rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export { CustomSwiper, Grid, SlideItem, CustomSwiperX, GridX, SlideItemX };
