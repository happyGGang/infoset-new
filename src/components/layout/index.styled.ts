import { styled } from '@mui/material';
import { Link } from '@tanstack/react-router';
import zoom from '../../assets/icon/zoom.svg';
import tilt from '../../assets/icon/tilt.svg';

const Container = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  background: '#222',
  display: 'flex',
  overflow: 'hidden',
}));

const Navigation = styled('div')(() => ({
  width: '12.5rem',
  height: '100vh',
  background: '#080808',
  display: 'flex',
  flexDirection: 'column',
}));

const MenuList = styled('div')(() => ({
  display: 'flex',
  marginTop: '5.81rem',
  flexDirection: 'column',
  gap: '2.5rem',
  alignItems: 'center',
}));

const Menu = styled(Link)<{ active: string }>(({ active }) => ({
  textAlign: 'center',
  color: active === 'true' ? '#FFFFFF' : '#8B95A1',
  fontSize: '1rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
}));

const Title = styled('div')(() => ({
  color: '#FFFFFF',
  fontSize: '1.25rem',
  fontWeight: 600,
  padding: '3rem 3rem 2.38rem 3rem',
  textAlign: 'center',
  whiteSpace: 'nowrap',
}));

const Content = styled('div')(() => ({
  background: '#222',
  width: 'calc(100% - 25rem)',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Index = styled('div')(() => ({
  width: '12.5rem',
  height: '100vh',
  background: '#222',
  borderLeft: '1px solid rgba(255, 255, 255, 0.10)',
  paddingRight: '0.63rem',
}));

const Pagination = styled('div')(() => ({
  color: '#8B95A1',
  fontFamily: 'Roboto',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal',
  letterSpacing: '0.04375rem',
  padding: '0.75rem 1.25rem',
  marginTop: '7.3rem',
  marginLeft: '3.8rem',
  marginBottom: '2.69rem',
  '& span': {
    color: '#FFFFFF',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
}));

const Scroll = styled('div')(() => ({
  width: '10.42vw',
  height: '56.5rem',
  background: '#222',
  display: 'flex',
  overflowY: 'scroll',
  flexDirection: 'column',
  gap: '1rem',
}));

const IndexItem = styled('img')<{ selected: boolean }>(({ selected }) => ({
  width: '7.5rem',
  border: `2px solid ${selected ? '#40EBEB' : 'transparent'}`,
  cursor: 'pointer',
  transition: 'border 0.2s ease',
  marginLeft: '2.5rem',
}));

const TabPanel = styled('div')(() => ({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  marginTop: '2.5rem',
  marginBottom: '2rem',
}));

const Tab = styled('div')<{ selected: boolean }>(({ selected }) => ({
  margin: '0.75rem 1.25rem 0.75rem 1.25rem',
  borderBottom: selected ? '0.1rem solid #FFFFFF' : 'none',
  paddingBottom: '0.62rem',
  color: selected ? '#FFFFFF' : '#6B7684',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: selected ? 600 : 400,
}));

const ArrowRight = styled('img')(() => ({
  width: '3rem',
  height: '3rem',
  position: 'absolute',
  top: '50%',
  right: '4.5rem',
  cursor: 'pointer',
}));

const ArrowLeft = styled('img')(() => ({
  width: '3rem',
  height: '3rem',
  top: '50%',
  left: '4.5rem',
  position: 'absolute',
  cursor: 'pointer',
}));

const Wrapper = styled('div')(() => ({
  position: 'absolute',
  bottom: '5%',
  display: 'flex',
  gap: '1rem',
}));

const Zoom = styled('div')(() => ({
  width: '3rem',
  height: '3rem',
  cursor: 'pointer',
  background: `url(${zoom}) center center no-repeat`,
  backgroundSize: 'cover',
}));

const Tilt = styled('div')(() => ({
  width: '3rem',
  height: '3rem',
  cursor: 'pointer',
  background: `url(${tilt}) center center no-repeat`,
  backgroundSize: 'cover',
}));

export {
  Container,
  Content,
  Navigation,
  Title,
  Index,
  MenuList,
  Menu,
  Scroll,
  IndexItem,
  Pagination,
  TabPanel,
  Tab,
  ArrowRight,
  ArrowLeft,
  Zoom,
  Tilt,
  Wrapper,
};
