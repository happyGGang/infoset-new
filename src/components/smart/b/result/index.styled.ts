import { styled } from '@mui/material';
import background from '../../../../assets/img/smart_a_y_result_bg.svg';
import backgroundX from '../../../../assets/img/smart_a_x_result_bg.svg';
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
    bottom: '6.63rem',
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
  '& .move': {
    width: '9.45625rem',
    height: '2.05rem',
    position: 'absolute',
    bottom: '4.18rem',
    right: '0.88rem',
    cursor: 'pointer',
  },
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.75931rem',
    height: '1.75931rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    top: '22.16rem',
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
    top: '22.16rem',
    position: 'absolute',
    zIndex: 10,
    '&::after': {
      display: 'none',
    },
  },
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '19.89414rem',
  height: '32.39502rem',
  paddingLeft: '0.05rem',
  margin: '4.18rem 0 0 2.6rem',
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
    height: '7.00419rem',
    borderRadius: ' 0.26388rem',
    boxShadow: '0px 1.759px 5.278px 0px rgba(25, 33, 61, 0.20)',
    marginBottom: '0.31rem',
  },
  '& .title': {
    color: '#95CACF',
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
    color: '#8B95A1',
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
    bottom: '3.7rem',
    right: '33.59rem',
    color: '#666',
    fontFamily: 'Pretendard',
    fontWeight: 500,
    letterSpacing: '-0.01756rem',
    fontSize: '0.70313rem',
    '& span': {
      color: '#FFF',
    },
  },
  '& .move': {
    width: '16.79688rem',
    height: '3.6rem',
    position: 'absolute',
    bottom: '1.16rem',
    right: '1.95rem',
    cursor: 'pointer',
  },
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '3.125rem',
    height: '3.125rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    top: '22.16rem',
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
    top: '22.16rem',
    right: '2rem',
    position: 'absolute',
    zIndex: 10,
    '&::after': {
      display: 'none',
    },
  },
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '58.59375rem',
  height: '28.57031rem',
  paddingLeft: '1rem',
  margin: '7.41rem 0 0 11.33rem',
}));

const GridX = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridRowGap: '1.17rem',
  gridColumnGap: '3rem',
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
    color: '#95CACF',
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
  CustomSwiper,
  Grid,
  SlideItem,
  ContainerX,
  CustomSwiperX,
  GridX,
  SlideItemX,
};
