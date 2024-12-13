import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_course_detail_bg.svg';

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

const Button = styled('div')(() => ({
  width: '19.77293rem',
  height: '2.41669rem',
  marginTop: '33.53987rem',
  marginLeft: '1.98rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#FFFFFF',
  fontSize: '0.747rem',
  fontWeight: 700,
  fontFamily: 'Pretendard',
  background: '#2E80EE',
  borderRadius: '0.43938rem',
}));

export { Container, Button };
