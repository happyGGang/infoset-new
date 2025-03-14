import { styled } from '@mui/material';
import background from '../../../../assets/img/library_a_best_bg.svg';
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
  '.time_date_wrapper': {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '1.32rem',
    right: '2.2rem',
  },
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '19.338rem',
  height: '34.76rem',
  paddingLeft: '0.05rem',
  margin: '4.83rem 0 0 1.25rem',
  '.swiper-pagination': {
    bottom: '0',
    left: '0.8rem',
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
    background: '#FFF',
  },
}));

const Grid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.33rem',
  paddingLeft: '0.9rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  gap: '1.32rem',
  cursor: 'pointer',
  alignItems: 'center',
  '& img': {
    width: '3.77969rem',
    height: '5.44981rem',
    borderRadius: '0.26369rem',
    boxShadow: '5.063px 5.063px 20.252px 2.025px rgba(0, 0, 0, 0.20)',
    objectFit: 'cover',
  },
  '& .title': {
    color: '#191F28',
    fontWeight: 500,
    fontSize: '0.879rem',
    marginBottom: '0.31rem',
    width: '13.84425rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#191F28',
    fontWeight: 500,
    fontSize: '0.65925rem',
    letterSpacing: '-0.0165rem',
    width: '13.84425rem',
    marginBottom: '0.31rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .publisher': {
    color: '#4E5968',
    fontWeight: 500,
    fontSize: '0.65925rem',
    marginBottom: '0.44rem',
  },
  '& .detail': {
    color: '#191F28',
    fontWeight: 500,
    fontSize: '0.52738rem',
    marginBottom: '0.22rem',
    letterSpacing: '-0.01319rem',
    '& span': {
      color: '#6B7684',
      fontWeight: 400,
      fontSize: '0.52738rem',
      marginRight: '0.22rem',
    },
  },
  '& .badge': {
    width: '1.53825rem',
    height: '1.53825rem',
    borderRadius: '50%',
    backgroundColor: '#E71D36',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    lineHeight: 'normal',
    fontSize: '0.52738rem',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    top: '0',
    right: '14.2rem',
    position: 'absolute',
  },
}));

const Time = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'Montserrat',
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

export { Container, CustomSwiper, Grid, SlideItem, Time, Date };
