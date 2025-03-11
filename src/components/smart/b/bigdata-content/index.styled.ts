import { styled } from '@mui/material';
import { Swiper } from 'swiper/react';

const Tabs = styled('div')(() => ({
  display: 'flex',
  height: '1.75931rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '19.2rem',
  marginTop: '1.33rem',
  background: '#8B95A1',
  borderRadius: '0.87963rem',
}));

const TabItem = styled('div')(() => ({
  height: '1.75931rem',
  width: '3.95844rem',
  display: 'flex',
  borderRadius: '0.87963rem',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.54981rem',
  lineHeight: 'normal',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  color: '#FFF',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '20rem',
  height: '29rem',
  margin: '1.54rem 0 0 0',
  paddingLeft: '0.3rem',
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
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridRowGap: '1.1rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '5.49781rem',
    height: '8.44463rem',
    borderRadius: ' 0.39581rem',
    boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.20)',
    marginBottom: '0.31rem',
  },
  '& .title': {
    color: '#191F28',
    padding: '0.09rem 0',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: ' -0.01319rem',
    fontSize: '0.57175rem',
    marginBottom: '0.09rem',
    width: '5.49781rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    padding: '0.09rem 0',
    color: '#6B7684',
    fontFamily: 'Pretendard',
    fontWeight: 400,
    letterSpacing: '-0.011rem',
    fontSize: '0.43981rem',
    marginBottom: '0.09rem',
    width: '5.49781rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

const TabsX = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '63rem',
  height: '3.125rem',
  marginTop: '1.38rem',
  borderRadius: '1.5625rem',
  background: '#8B95A1',
}));

const TabItemX = styled('div')(() => ({
  height: '3.125rem',
  width: '12.42188rem',
  display: 'flex',
  borderRadius: '1.5625rem',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.97656rem',
  lineHeight: 'normal',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  color: '#FFF',
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '63.2rem',
  height: '17.1rem',
  margin: '1.56rem 0 0 0',
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
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridColumnGap: '2.5rem',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '8.00781rem',
    height: '12.30469rem',
    borderRadius: ' 0.54688rem',
    boxShadow: '3.25px 3.25px 5px 1.5px rgba(0, 0, 0, 0.20)',
    marginBottom: '0.78rem',
  },
  '& .title': {
    color: '#191F28',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: ' -0.02344rem',
    fontSize: '0.9375rem',
    marginBottom: '0.16rem',
    padding: '0 0.16rem 0 0.16rem',
    width: '8.00781rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#6B7684',
    fontFamily: 'Pretendard',
    fontWeight: 400,
    marginBottom: '0.16rem',
    letterSpacing: '-0.011rem',
    fontSize: '0.70313rem',
    padding: '0 0.16rem 0 0.16rem',
    width: '8.00781rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

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

export {
  Tabs,
  TabItem,
  CustomSwiper,
  Grid,
  SlideItem,
  TabsX,
  TabItemX,
  CustomSwiperX,
  GridX,
  SlideItemX,
  Title,
  Caption,
  TitleX,
  CaptionX,
};
