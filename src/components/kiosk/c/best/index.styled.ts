import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_best_bg.svg';
import { Swiper } from 'swiper/react';
import backgroundX from '../../../../assets/img/kiosk_c_x_best_bg.svg';

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

const CustomSwiper = styled(Swiper)(() => ({
  width: '20.73997rem',
  height: '31.85rem',
  paddingLeft: '0.05rem',
  margin: '4.83rem 0 0 2.53rem',
  '.swiper-pagination': {
    bottom: '0',
    left: '-0.5rem',
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

const Grid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.95rem',
  paddingLeft: '0.95rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  gap: '0.66rem',
  cursor: 'pointer',
  '& img': {
    width: '3.4rem',
    height: '4.943rem',
    borderRadius: '0.2125rem',
    boxShadow: '0px 1.757px 5.273px 0px rgba(25, 33, 61, 0.20)',
    marginBottom: '0.55rem',
    objectFit: 'cover',
  },
  '& .title': {
    marginTop: '0.3rem',
    color: '#191F28',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    fontSize: '0.74694rem',
    marginBottom: '0.26rem',
    width: '14.15225rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#4E5968',
    fontWeight: 500,
    fontSize: '0.52725rem',
    width: '14.15225rem',
    marginBottom: '0.26rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .publisher': {
    color: '#4E5968',
    fontWeight: 500,
    fontSize: '0.52725rem',
    marginBottom: '0.53rem',
  },
  '& .detail': {
    color: '#191F28',
    fontWeight: 500,
    fontSize: '0.43938rem',
    marginBottom: '0.22rem',
    '& span': {
      color: '#6B7684',
      fontWeight: 400,
      fontSize: '0.43938rem',
      letterSpacing: '-0.011rem',
      marginRight: '0.44rem',
    },
  },
  '& .badge': {
    width: '1.53781rem',
    height: '1.53781rem',
    borderRadius: '50%',
    backgroundColor: '#E71D36',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    lineHeight: 'normal',
    fontSize: '0.54919rem',
    fontWeight: 700,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    top: '1.36rem',
    left: '-0.8rem',
    position: 'absolute',
  },
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
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

const GridX = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridRowGap: '1.17rem',
  marginTop: '6' + '.25rem',
  marginLeft: '11.33rem',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  position: 'relative',
  '& img': {
    width: '7.8125rem',
    height: '11.30863rem',
    borderRadius: '0.46875rem',
    boxShadow: '0px 3.125px 9.375px 0px rgba(25, 33, 61, 0.20)',
    marginBottom: '0.78rem',
  },
  '& .title': {
    color: '#191F28',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.02344rem',
    fontSize: '0.9375rem',
    marginBottom: '0.16rem',
    padding: '0 0.16rem 0 0.16rem',
    width: '7.30469rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#4E5968',
    fontWeight: 400,
    letterSpacing: '-0.0195rem',
    fontSize: '0.70313rem',
    marginBottom: '0.09rem',
    padding: '0 0.09rem 0 0.09rem',
    width: '7.30469rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .badge': {
    width: '2.73438rem',
    height: '2.73438rem',
    borderRadius: '50%',
    backgroundColor: '#E71D36',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    lineHeight: 'normal',
    fontSize: '0.97656rem',
    letterSpacing: '-0.02444rem',
    fontWeight: 700,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    top: '2.36rem',
    left: '-1.3rem',
    position: 'absolute',
  },
}));

export {
  Container,
  CustomSwiper,
  Grid,
  SlideItem,
  ContainerX,
  GridX,
  SlideItemX,
};
