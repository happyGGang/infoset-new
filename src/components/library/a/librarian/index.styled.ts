import { styled } from '@mui/material';
import background from '../../../../assets/img/library_a_librarian_bg.svg';
import { Swiper } from 'swiper/react';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
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
  '.time_date_wrapper': {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '1.32rem',
    right: '2.2rem',
  },
}));

const Time = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: '0.83506rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

const Date = styled('div')(() => ({
  color: '#FFF',
  fontSize: '0.30763rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '19rem',
  height: '34.76444rem',
  paddingLeft: '0.05rem',
  margin: '4.83rem 0 0 2.7rem',
  '.swiper-pagination': {
    bottom: '0',
    left: '-0.4rem',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.26363rem',
    height: '0.26363rem',
    background: '#8B95A1',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#FFFFFF',
  },
}));

const Grid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridRowGap: '1.54rem',
  gridColumnGap: '2.2rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& img': {
    width: '7.73519rem',
    height: '11.15231rem',
    borderRadius: '0.4395rem',
    boxShadow: '0px 1.758px 5.273px 0px rgba(25, 33, 61, 0.20)',
    marginBottom: '0.49rem',
  },
  '& .title': {
    color: '#95CACF',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.01975rem',
    fontSize: '0.79113rem',
    marginBottom: '0.13rem',
    padding: '0 0.14rem 0 0.14rem',
    width: '7.73519rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#8B95A1',
    fontWeight: 500,
    letterSpacing: '-0.0165rem',
    fontSize: '0.65925rem',
    marginBottom: '0.13rem',
    padding: '0 0.14rem 0 0.14rem',
    width: '7.73519rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export { Container, Date, Time, CustomSwiper, Grid, SlideItem };
