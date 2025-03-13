import { styled } from '@mui/material';
import print from '../../assets/icon/print.svg';
import close from '../../assets/icon/close.svg';

const PopupContainerX = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '75rem',
  height: '42.1875rem',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
}));

const PopupContentX = styled('div')(() => ({
  marginTop: '6.74rem',
  marginLeft: '23.05rem',
  backgroundColor: '#fff',
  borderRadius: '1.17188rem',
  position: 'relative',
  width: '35.15625rem',
  height: '28.71094rem',
  '& img': {
    width: '31.64063rem',
    height: '19.16019rem',
    marginLeft: '1.76rem',
    objectFit: 'cover',
  },
}));

const HeaderX = styled('div')(() => ({
  borderRadius: '1.17188rem 1.17188rem 0 0',
  textAlign: 'center',
  padding: '2.11rem 0 0.75rem 0',
  color: '#242424',
  fontWeight: 600,
  fontSize: '1.40625rem',
}));

const ActionWrapperX = styled('div')(() => ({
  borderTop: '1px solid #E5E8EB',
  display: 'flex',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
}));

const CloseButtonX = styled('div')(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.25rem',
  width: '50%',
  gap: '0.39rem',
  position: 'relative',
  '& .label': {
    color: '#242424',
    fontSize: '1.17188rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
  '& .icon': {
    width: '1.5625rem',
    height: '1.5625rem',
    background: `url(${close}) center center no-repeat`,
    backgroundSize: 'cover',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '1.5rem',
    right: '0',
    width: '0.03906rem',
    height: '1.36719rem',
    backgroundColor: '#A2A2A2',
  },
}));

const PrintButtonX = styled('div')(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.25em',
  width: '50%',
  gap: '0.39rem',
  '& .label': {
    color: '#242424',
    fontSize: '1.17188rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
  '& .icon': {
    width: '1.5625rem',
    height: '1.5625rem',
    background: `url(${print}) center center no-repeat`,
    backgroundSize: 'cover',
  },
}));

const PopupContainer = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '23.7275rem',
  height: '42.18225rem',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
}));

const PopupContent = styled('div')(() => ({
  marginTop: '10.98rem',
  marginLeft: '1.98rem',
  backgroundColor: '#fff',
  borderRadius: '0.65913rem',
  position: 'relative',
  width: '19.77294rem',
  height: '16.14788rem',
  '& img': {
    width: '17.79563rem',
    height: '10.77625rem',
    marginLeft: '0.99rem',
    objectFit: 'cover',
  },
}));

const Header = styled('div')(() => ({
  borderRadius: '0.65913rem 0.65913rem 0 0',
  textAlign: 'center',
  padding: '1.19rem 0 0.44rem 0',
  color: '#242424',
  fontWeight: 600,
  fontSize: '0.79094rem',
}));

const ActionWrapper = styled('div')(() => ({
  borderTop: '1px solid #E5E8EB',
  display: 'flex',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
}));

const CloseButton = styled('div')(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.72rem',
  width: '50%',
  gap: '0.22rem',
  position: 'relative',
  marginBottom: '0.1rem',
  '& .title': {
    color: '#242424',
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
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0.71rem',
    right: '0',
    width: '0.022rem',
    height: '0.76894rem',
    backgroundColor: '#A2A2A2',
  },
}));

const PrintButton = styled('div')(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.66rem',
  width: '50%',
  gap: '0.22rem',
  marginBottom: '0.1rem',
  '& .title': {
    color: '#242424',
    fontSize: '0.65913rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
  '& .icon': {
    width: '0.87881rem',
    height: '0.87881rem',
    background: `url(${print}) center center no-repeat`,
    backgroundSize: 'cover',
  },
}));

export {
  PopupContainerX,
  HeaderX,
  PopupContentX,
  CloseButtonX,
  PrintButtonX,
  ActionWrapperX,
  PopupContainer,
  Header,
  PopupContent,
  CloseButton,
  PrintButton,
  ActionWrapper,
};
