import { styled } from '@mui/material';
import check from '../../assets/icon/check.svg';
import close from '../../assets/icon/close.svg';

const PopupContainer = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '23.7275rem',
  height: '42.18225rem',
  backgroundColor: 'rgba(0, 0, 0, 0.70)',
  zIndex: 1000,
}));

const PopupContent = styled('div')(() => ({
  marginTop: '4.73rem',
  marginLeft: '1.98rem',
  backgroundColor: '#fff',
  borderRadius: '0.65913rem',
  position: 'relative',
  width: '19.77294rem',
  height: '27.22075rem',
  '& img': {
    width: '16.47744rem',
    height: '10.27338rem',
    borderRadius: '0.39544rem',
    marginTop: '1.37rem',
    marginLeft: '1.65rem',
    objectFit: 'cover',
    marginBottom: '0.88rem',
  },
  '& .wrapper': {
    display: 'flex',
    marginLeft: '1.38rem',
    gap: '0.35rem',
    marginBottom: '0.22rem',
  },
  '& .check': {
    width: '0.747rem',
    height: '0.747rem',
    marginBottom: '0.09rem',
    background: `url(${check}) center center no-repeat`,
    backgroundSize: 'cover',
  },
  '& .text': {
    color: '#191F28',
    fontSize: '0.48331rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    width: '15.9941rem',
    letterSpacing: '-0.0165rem',
    lineHeight: '140%',
  },
}));

const Header = styled('div')(() => ({
  borderRadius: '0.65913rem 0.65913rem 0 0',
  width: '19.77294rem',
  height: '3.29169rem',
  position: 'relative',
  '& .index': {
    fontSize: '0.48331rem',
    fontWeight: 400,
    marginLeft: '1.21rem',
    marginBottom: '0.1rem',
    paddingTop: '1.09rem',
  },
  '& .title': {
    fontSize: '0.747rem',
    fontWeight: 700,
    fontFamily: 'Pretendard-Bold',
    letterSpacing: '-0.01869rem',
    marginLeft: '1.21rem',
  },
}));

const CloseButton = styled('div')(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.72rem',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '18.35rem',
  gap: '0.21rem',
  borderTop: '1px solid #E5E8EB',
  '& .title': {
    color: '#FFFFFF',
    fontSize: '0.65913rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
  '& .icon': {
    width: '0.87881rem',
    height: '0.87881rem',
    background: `url(${close}) center center no-repeat`,
    backgroundSize: 'cover',
  },
}));

const PopupContainerX = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '75rem',
  height: '42.1875rem',
  backgroundColor: 'rgba(0, 0, 0, 0.70)',
  zIndex: 1000,
}));

const PopupContentX = styled('div')(() => ({
  marginTop: '5.16rem',
  marginLeft: '10.16rem',
  backgroundColor: '#fff',
  borderRadius: '1.17188rem',
  position: 'relative',
  width: '60.9375rem',
  height: '31.875rem',
  '& .row': {
    display: 'flex',
    gap: '1.56rem',
    marginTop: '2.75rem',
  },
  '& img': {
    width: '25.39063rem',
    height: '16.99219rem',
    borderRadius: '0.39544rem',
    marginLeft: '2.81rem',
    objectFit: 'cover',
    marginBottom: '2.73rem',
  },
  '& .wrapper': {
    display: 'flex',
    marginLeft: '1.38rem',
    gap: '0.41rem',
  },
  '& .check': {
    width: '1.32813rem',
    height: '1.32813rem',
    marginBottom: '0.2rem',
    background: `url(${check}) center center no-repeat`,
    backgroundSize: 'cover',
  },
  '& .text': {
    color: '#191F28',
    fontSize: '1.17188rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    width: '25.39063rem',
    letterSpacing: '-0.02931rem',
    lineHeight: '140%',
  },
}));

const HeaderX = styled('div')(() => ({
  borderRadius: '1.17188rem 1.17188rem 0 0',
  width: '60.9375rem',
  height: '5.85938rem',
  position: 'relative',
  '& .index': {
    fontSize: '0.85938rem',
    fontWeight: 400,
    marginLeft: '1.95rem',
    marginBottom: '0.18rem',
    paddingTop: '1.94rem',
  },
  '& .title': {
    fontSize: '1.32813rem',
    fontWeight: 700,
    fontFamily: 'Pretendard-Bold',
    letterSpacing: '-0.03319rem',
    marginLeft: '1.95rem',
  },
}));

const CloseButtonX = styled('div')(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.15rem',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '58.6rem',
  gap: '0.21rem',
  borderTop: '1px solid #E5E8EB',
  '& .title': {
    color: '#FFFFFF',
    fontSize: '1.17188rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
  '& .icon': {
    width: '1.48438rem',
    height: '1.48438rem',
    background: `url(${close}) center center no-repeat`,
    backgroundSize: 'cover',
  },
}));

export {
  PopupContainerX,
  HeaderX,
  PopupContentX,
  CloseButtonX,
  PopupContainer,
  Header,
  PopupContent,
  CloseButton,
};
