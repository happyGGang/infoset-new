import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_course_bg.svg';
import { Swiper } from 'swiper/react';
import backgroundX from '../../../../assets/img/kiosk_c_x_course_bg.svg';
import arrow from '../../../../assets/icon/swiper-arrow.svg';

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
  width: '19.77293rem',
  height: '32.88963rem',
  margin: '4.39rem 0 0 1.98rem',
  '.swiper-pagination': {
    bottom: '0.6rem',
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

const ItemWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.53rem',
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
}));

const Column = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& .recruit': {
    width: '3.18564rem',
    height: '1.86744rem',
    borderRadius: '0rem 0.65913rem 0rem 0rem',
    backgroundColor: '#1C1C1C',
  },
  '& .candidate': {
    width: '3.18564rem',
    height: '1.86744rem',
    borderRadius: '0rem 0rem 0.65913rem 0rem',
    backgroundColor: '#888',
  },
  '& .count_label': {
    fontSize: '0.3515rem',
    marginLeft: '0.44rem',
    marginTop: '0.27rem',
    marginBottom: '0.04rem',
    lineHeight: 'normal',
    fontWeight: 500,
    color: '#FFFFFF',
  },
  '& .highlight': {
    fontSize: '0.725rem',
    lineHeight: 'normal',
    fontWeight: 700,
    color: '#00F6FF',
    fontFamily: 'Century Gothic',
  },
  '& .dash': {
    fontSize: '0.725rem',
    lineHeight: 'normal',
    fontWeight: 700,
    color: '#ADB5BD',
    fontFamily: 'Century Gothic',
  },
  '& .count': {
    fontSize: '0.725rem',
    marginLeft: '0.44rem',
    lineHeight: 'normal',
    fontWeight: 700,
    color: '#FFFFFF',
    fontFamily: 'Century Gothic',
  },
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  borderRadius: '0.65913rem',
  backgroundColor: '#FFFFFF',
  height: '3.73488rem',
  cursor: 'pointer',
  '& .badge': {
    borderRadius: '50%',
    width: '2.197rem',
    height: '2.197rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.48331rem',
    marginLeft: '0.77rem',
    marginTop: '0.77rem',
    marginRight: '0.53rem',
    fontWeight: 600,
    whiteSpace: 'pre-line',
  },
  '& .title': {
    marginRight: '1.23rem',
    marginTop: '0.66rem',
    width: '11.86375rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: '#191F28',
    fontSize: '0.65913rem',
    fontWeight: 600,
    letterSpacing: '-0.0165rem',
    marginBottom: '0.04rem',
    lineHeight: 'normal',
  },
  '& .label': {
    color: '#6B7684',
    fontSize: '0.48331rem',
    fontWeight: 500,
    fontFamily: 'Pretendard',
    marginTop: '0.22rem',
    marginRight: '0.26rem',
    lineHeight: 'normal',
  },
  '& .value': {
    color: '#191F28',
    fontSize: '0.48331rem',
    fontWeight: 500,
    fontFamily: 'Pretendard',
    marginTop: '0.22rem',
    lineHeight: 'normal',
  },
  '& .closed': {
    backgroundColor: '#EFF1F3',
    color: '#6B7684',
  },
  '& .upcoming': {
    backgroundColor: '#F1B55C1A',
    color: '#F1B55C',
  },
  '& .waiting': {
    backgroundColor: '#2F65CD1A',
    color: '#2F65CD',
  },
  '& .ongoing': {
    backgroundColor: '#0299511A',
    color: '#029951',
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
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '3.125rem',
    height: '3.125rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    fontSize: 0,
    left: '6.5rem',
    border: 'none',
    '&::after': {
      display: 'none',
    },
  },
  '.swiper-button-next': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '3.125rem',
    height: '3.125rem',
    zIndex: 10,
    fontSize: 0,
    border: 'none',
    '&::after': {
      display: 'none',
    },
  },
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '60.78125rem',
  height: '30.9375rem',
  margin: '6.58rem 0 0 10.23rem',
  '.swiper-pagination': {
    bottom: '0',
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

const ItemWrapperX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.39rem',
}));

const WrapperX = styled('div')(() => ({
  display: 'flex',
  '& .recruit': {
    width: '6.50391rem',
    height: '5.46875rem',
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
  },
  '& .candidate': {
    alignItems: 'center',
    width: '6.50391rem',
    height: '5.46875rem',
    borderRadius: '0rem 1.17188rem 1.17188rem 0rem',
    backgroundColor: '#888',
  },
  '& .count_label': {
    fontSize: '0.625rem',
    marginTop: '1.52rem',
    lineHeight: 'normal',
    fontWeight: 500,
    color: '#FFFFFF',
    fontFamily: 'Pretendard',
  },
  '& .highlight': {
    fontSize: '1.28906rem',
    lineHeight: 'normal',
    fontWeight: 700,
    color: '#00F6FF',
    fontFamily: 'Century Gothic',
  },
  '& .dash': {
    fontSize: '1.28906rem',
    lineHeight: 'normal',
    fontWeight: 700,
    color: '#ADB5BD',
    fontFamily: 'Century Gothic',
  },
  '& .count': {
    fontSize: '1.28906rem',
    lineHeight: 'normal',
    fontWeight: 700,
    color: '#FFFFFF',
    fontFamily: 'Century Gothic',
  },
}));

const ColumnX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const SlideItemX = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '1.17188rem',
  backgroundColor: '#FFFFFF',
  height: '5.46875rem',
  cursor: 'pointer',
  '& .badge': {
    fontFamily: 'Pretendard',
    borderRadius: '50%',
    width: '3.90625rem',
    height: '3.90625rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.85938rem',
    marginLeft: '1.37rem',
    marginTop: '0.78rem',
    marginRight: '0.94rem',
    fontWeight: 600,
    whiteSpace: 'pre-line',
  },
  '& .title': {
    marginRight: '1.23rem',
    marginTop: '1.31rem',
    width: '21.09375rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: '#191F28',
    fontSize: '1.17188rem',
    fontWeight: 600,
    letterSpacing: '-0.02931rem',
    fontFamily: 'Pretendard',
    marginBottom: '0.04rem',
    lineHeight: 'normal',
  },
  '& .label': {
    color: '#6B7684',
    fontSize: '0.85938rem',
    fontWeight: 500,
    fontFamily: 'Pretendard',
    marginTop: '0.47rem',
    marginRight: '0.47rem',
    lineHeight: 'normal',
  },
  '& .value': {
    color: '#191F28',
    fontSize: '0.85938rem',
    fontWeight: 500,
    fontFamily: 'Pretendard',
    marginTop: '0.47rem',
    lineHeight: 'normal',
    marginRight: '1.17rem',
  },
  '& .closed': {
    backgroundColor: '#EFF1F3',
    color: '#6B7684',
  },
  '& .upcoming': {
    backgroundColor: '#F1B55C1A',
    color: '#F1B55C',
  },
  '& .waiting': {
    backgroundColor: '#2F65CD1A',
    color: '#2F65CD',
  },
  '& .ongoing': {
    backgroundColor: '#0299511A',
    color: '#029951',
  },
}));

export {
  Container,
  CustomSwiper,
  ItemWrapper,
  SlideItem,
  Wrapper,
  Column,
  ContainerX,
  CustomSwiperX,
  ItemWrapperX,
  SlideItemX,
  WrapperX,
  ColumnX,
};
