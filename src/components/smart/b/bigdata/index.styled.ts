import { styled, Tab, Tabs } from '@mui/material';
import background from '../../../../assets/img/smart_b_y_chart_bg.svg';
import backgroundX from '../../../../assets/img/smart_b_x_chart_bg.svg';

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
  overflow: 'hidden',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '& .back': {
    width: '1rem',
    height: '1rem',
    position: 'absolute',
    bottom: '1.1rem',
    left: '1.1rem',
  },
  '& .login': {
    cursor: 'pointer',
    position: 'absolute',
    bottom: '0.4rem',
    right: '1.1rem',
  },
  '& .tabpanel': {
    width: '19.1783rem',
    height: '100%',
    marginLeft: '2.29rem',
    marginTop: '1.48rem',
  },
}));

const CustomTabs = styled(Tabs)(() => ({
  marginTop: '4.3rem',
  marginLeft: '1.98rem',
  width: '19.75725rem',
  borderBottom: '1px solid #191F28',
  minHeight: '1.49rem',
  '& .MuiTabs-indicator': {
    backgroundColor: '#7B3AD8',
    maxHeight: '0.05rem',
  },
}));

const CustomTab = styled(Tab)(() => ({
  fontSize: '0.54881rem',
  color: '#6B7684',
  fontWeight: '600',
  width: '6.5rem',
  padding: '0 16px 0 12px',
  minHeight: '39px',
  minWidth: '6.6rem',
  '&.Mui-selected': {
    color: '#242424',
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
  overflow: 'hidden',
  animation: 'fadeIn 1s ease-out forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '& .back': {
    width: '1.8rem',
    height: '1.8rem',
    position: 'absolute',
    bottom: '1.1rem',
    left: '1.1rem',
  },
  '& .login': {
    cursor: 'pointer',
    width: '9rem',
    position: 'absolute',
    bottom: '0.2rem',
    right: '1.1rem',
  },
  '& .tabpanel': {
    width: '62.10938rem',
    height: '100%',
    marginLeft: '6.45rem',
    marginTop: '1.37rem',
  },
}));

const CustomTabsX = styled(Tabs)(() => ({
  marginTop: '6.62rem',
  marginLeft: '6.45rem',
  width: '62.10938rem',
  borderBottom: '1px solid #191F28',
  minHeight: '1.49rem',
  '& .MuiTabs-indicator': {
    backgroundColor: '#7B3AD8',
    maxHeight: '0.19rem',
  },
}));

const CustomTabX = styled(Tab)(() => ({
  fontSize: '0.97656rem',
  color: '#6B7684',
  fontWeight: '600',
  width: '20.5rem',
  maxWidth: '20.5rem',
  minHeight: '39px',
  minWidth: '20.7rem',
  '&.Mui-selected': {
    color: '#242424',
  },
}));

export {
  Container,
  CustomTabs,
  CustomTab,
  ContainerX,
  CustomTabsX,
  CustomTabX,
};
