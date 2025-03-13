import { styled } from '@mui/material';
import { Swiper } from 'swiper/react';

const Title = styled('div')(() => ({
  fontSize: '1.3195rem',
  color: '#242424',
  fontWeight: 600,
  letterSpacing: '-0.033rem',
  lineHeight: '130%',
  textAlign: 'center',
  marginBottom: '0.32rem',
}));

const Caption = styled('div')(() => ({
  marginBottom: '1.18rem',
  fontWeight: '500',
  color: '#6B7684',
  fontSize: '0.65875rem',
  letterSpacing: '-0.0165rem',
  textAlign: 'center',
}));

const TitleX = styled('div')(() => ({
  fontSize: '2.34375rem',
  color: '#242424',
  fontWeight: 600,
  letterSpacing: '-0.033rem',
  lineHeight: '130%',
  textAlign: 'center',
  marginBottom: '0.55rem',
}));

const CaptionX = styled('div')(() => ({
  marginBottom: '1.38rem',
  fontWeight: '500',
  color: '#6B7684',
  fontSize: '1.17188rem',
  letterSpacing: '-0.0165rem',
  textAlign: 'center',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '18.69256rem',
  height: '32.39502rem',
  margin: '0 0 0 0.5rem',
  '.swiper-pagination': {
    left: '-0.4rem',
    bottom: '5.5rem',
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
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridRowGap: '1.1rem',
  gridColumnGap: '0.5rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '3.95844rem',
    height: '5.93763rem',
    borderRadius: ' 0.26388rem',
    boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.20)',
    marginBottom: '0.44rem',
  },
  '& .title': {
    color: '#191F28',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: ' -0.01319rem',
    fontSize: '0.52781rem',
    marginBottom: '0.09rem',
    width: ' 3.91444rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#6B7684',
    fontWeight: 400,
    letterSpacing: '-0.011rem',
    fontSize: '0.43981rem',
    marginBottom: '0.09rem',
    width: '3.91444rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '58.59375rem',
  height: '20rem',
  margin: '2.14rem 0 0 2rem',
  paddingTop: '1rem',
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
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridColumnGap: '3rem',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '8.59375rem',
    height: '12.44144rem',
    borderRadius: ' 0.46875rem',
    boxShadow: '3.25px 3.25px 5px 1.5px rgba(0, 0, 0, 0.20)',
    marginBottom: '0.78rem',
  },
  '& .title': {
    color: '#191F28',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: ' -0.02344rem',
    fontSize: '0.9375rem',
    marginBottom: '0.16rem',
    padding: '0 0.16rem 0 0.16rem',
    width: '8.59375rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#6B7684',
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

export {
  CustomSwiper,
  Grid,
  SlideItem,
  CustomSwiperX,
  GridX,
  SlideItemX,
  Title,
  Caption,
  TitleX,
  CaptionX,
};
