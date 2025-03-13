import { styled } from '@mui/material';
import background from '../../../../assets/img/library_c_librarian_bg.svg';
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
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '19.89414rem',
  height: '33.39502rem',
  paddingLeft: '0.05rem',
  margin: '5rem 0 0 2.42rem',
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
    background: '#333D4B',
  },
}));

const Grid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridRowGap: '1.4rem',
  gridColumnGap: '0.5rem',
}));

const SlideItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '& img': {
    width: '5.27281rem',
    height: '7.60156rem',
    borderRadius: '0.26363rem',
    boxShadow: '0px 1.758px 5.273px 0px rgba(25, 33, 61, 0.20)',
    marginBottom: '0.44rem',
  },
  '& .title': {
    color: '#191F28',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.01319rem',
    fontSize: '0.52725rem',
    marginBottom: '0.09rem',
    padding: '0 0.09rem 0 0.09rem',
    width: '5.27281rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '& .writer': {
    color: '#4E5968',
    fontWeight: 400,
    letterSpacing: '-0.011rem',
    fontSize: '0.43938rem',
    marginBottom: '0.09rem',
    padding: '0 0.09rem 0 0.09rem',
    width: '5.27281rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export { Container, CustomSwiper, Grid, SlideItem };
