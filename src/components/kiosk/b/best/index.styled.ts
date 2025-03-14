import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_b_y_best_bg.svg';
import { Swiper } from 'swiper/react';
import backgroundX from '../../../../assets/img/kiosk_b_x_best_bg.svg';

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
  margin: '4.94rem 0 0 2.01rem',
  '.swiper-pagination': {
    bottom: '0.3rem',
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
    background: '#191F28',
  },
}));

const Grid = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '1.79rem',
  paddingTop: '1.1rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
  '&:first-of-type': {
    marginRight: '1.72rem',
    '& img': {
      width: '9.00769rem',
      height: '13.84106rem',
      borderRadius: '0.43938rem',
      boxShadow: '3.515px 3.515px 12.303px 0.879px rgba(0, 0, 0, 0.20)',
    },
    '& .title': {
      width: '9.00769rem',
    },
    '& .writer': {
      width: '9.00769rem',
    },
    '& .badge': {
      width: '2.197rem',
      height: '2.197rem',
      borderRadius: '50%',
      backgroundColor: '#000000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
      fontSize: '0.79094rem',
      fontWeight: 700,
      fontFamily: 'SpoqaHanSansNeo-Regular',
      top: '-1.1rem',
      left: '3.41rem',
      position: 'absolute',
    },
  },
  '&:nth-of-type(2)': {
    marginRight: 0,
    '& img': {
      width: '9.00769rem',
      height: '13.84106rem',
      borderRadius: '0.43938rem',
      boxShadow: '3.515px 3.515px 12.303px 0.879px rgba(0, 0, 0, 0.20)',
    },
    '& .title': {
      width: '9.00769rem',
    },
    '& .writer': {
      width: '9.00769rem',
    },
    '& .badge': {
      width: '2.197rem',
      height: '2.197rem',
      borderRadius: '50%',
      backgroundColor: '#000000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
      fontSize: '0.79094rem',
      fontWeight: 700,
      fontFamily: 'SpoqaHanSansNeo-Regular',
      top: '-1.1rem',
      left: '3.41rem',
      position: 'absolute',
    },
  },
  '&:last-child': {
    marginRight: '0',
  },
  marginRight: '1.42rem',
  '& img': {
    width: '5.63531rem',
    height: '8.65169rem',
    borderRadius: '0.32956rem',
    boxShadow: '3.515px 3.515px 12.303px 0.879px rgba(0, 0, 0, 0.20)',
    marginBottom: '0.55rem',
    objectFit: 'cover',
  },
  '& .title': {
    color: '#191F28',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    fontSize: '0.65913rem',
    marginBottom: '0.22rem',
    width: '5.63531rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#4E5968',
    fontWeight: 400,
    fontSize: '0.54925rem',
    width: '5.63531rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .badge': {
    width: '1.75763rem',
    height: '1.75763rem',
    borderRadius: '50%',
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: '0.65913rem',
    fontWeight: 700,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    top: '-0.88rem',
    left: '1.94rem',
    position: 'absolute',
  },
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
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

const CustomSwiperX = styled(Swiper)(() => ({
  width: '63.71875rem',
  height: '25rem',
  margin: '8.21rem 0 0 9.77rem',
  '.swiper-pagination': {
    bottom: '0',
    left: '-1rem',
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
  display: 'flex',
  gap: '2.49rem',
  paddingTop: '1.56rem',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
  '& img': {
    width: '10.35156rem',
    height: '16.01563rem',
    borderRadius: ' 0.58594rem',
    boxShadow: '6.25px 9.375px 18.75px 0px rgba(0, 0, 0, 0.15)',
    marginBottom: '1.15em',
    objectFit: 'cover',
  },
  '& .title': {
    color: '#191F28',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    fontSize: '1.17188rem',
    marginBottom: '0.47rem',
    width: '10.35156rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#4E5968',
    fontWeight: 400,
    fontSize: '0.97656rem',
    width: '10.35156rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .badge': {
    width: '3.125rem',
    height: '3.125rem',
    borderRadius: '50%',
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: '1.17188rem',
    fontWeight: 700,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    top: '-1.56rem',
    left: '3.61rem',
    position: 'absolute',
  },
}));

export {
  Container,
  CustomSwiper,
  Grid,
  SlideItem,
  ContainerX,
  CustomSwiperX,
  GridX,
  SlideItemX,
};
