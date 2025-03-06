import { styled } from '@mui/material';
import background from '../../../../assets/img/smart_a_y_bigdata_bg.svg';
import backgroundX from '../../../../assets/img/smart_a_x_bigdata_bg.svg';
import { Swiper } from 'swiper/react';
import arrow from '../../../../assets/icon/swiper-arrow.svg';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  flexDirection: 'column',
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
  '& .pagination': {
    position: 'absolute',
    bottom: '8.84rem',
    right: '11.42rem',
    color: '#666',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    letterSpacing: '-0.011rem',
    fontSize: '0.43981rem',
    '& span': {
      color: '#FFF',
    },
  },
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.75931rem',
    height: '1.75931rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    top: '23.16rem',
    position: 'absolute',
    '&::after': {
      display: 'none',
    },
  },
  '.swiper-button-next': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.75931rem',
    height: '1.75931rem',
    top: '23.16rem',
    position: 'absolute',
    zIndex: 10,
    '&::after': {
      display: 'none',
    },
  },
}));

const Tabs = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '18.69256rem',
  marginTop: '8.83rem',
  marginLeft: '2.53rem',
}));

const TabItem = styled('div')(() => ({
  borderRadius: '6.25rem',
  height: '1.75931rem',
  width: '3.51863rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.54981rem',
  lineHeight: 'normal',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '18.69256rem',
  height: '19.5756rem',
  margin: '1.76rem 0 0 2.53rem',
  paddingLeft: '0.3rem',
}));

const Grid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridRowGap: '1.1rem',
  gridColumnGap: '1.3rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '4.83806rem',
    height: '7.00419rem',
    borderRadius: ' 0.26388rem',
    boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.20)',
    marginBottom: '0.31rem',
  },
  '& .title': {
    color: '#95CACF',
    padding: '0.09rem 0',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: ' -0.01319rem',
    fontSize: '0.52781rem',
    marginBottom: '0.09rem',
    width: '4.66rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    padding: '0.09rem 0',
    color: '#8B95A1',
    fontFamily: 'Pretendard',
    fontWeight: 400,
    letterSpacing: '-0.011rem',
    fontSize: '0.43981rem',
    marginBottom: '0.09rem',
    width: '4.66rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  flexDirection: 'column',
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
  '& .pagination': {
    position: 'absolute',
    bottom: '3.66rem',
    right: '33.52rem',
    color: '#666',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    letterSpacing: '-0.0195rem',
    fontSize: ' 0.78125rem',
    '& span': {
      color: '#FFF',
    },
  },
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '3.125rem',
    height: '3.125rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    top: '25.16rem',
    left: '7.7rem',
    position: 'absolute',
    '&::after': {
      display: 'none',
    },
  },
  '.swiper-button-next': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '3.125rem',
    height: '3.125rem',
    top: '25.16rem',
    right: '2rem',
    position: 'absolute',
    zIndex: 10,
    '&::after': {
      display: 'none',
    },
  },
}));

const TabsX = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '33.20313rem',
  marginTop: '14.36rem',
  marginLeft: '24.02rem',
}));

const TabItemX = styled('div')(() => ({
  borderRadius: '1.95313rem',
  height: '3.125rem',
  width: '6.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.97656rem',
  lineHeight: 'normal',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '58.59375rem',
  height: '16.472rem',
  margin: '2.08rem 0 0 11.33rem',
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
    color: '#95CACF',
    fontFamily: 'Pretendard',
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
    color: '#8B95A1',
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

export {
  Container,
  ContainerX,
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
};
