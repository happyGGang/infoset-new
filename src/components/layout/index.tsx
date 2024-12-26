import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import {
  Container,
  Content,
  Index,
  Title,
  MenuList,
  Menu,
  Scroll,
  IndexItem,
  Pagination,
  TabPanel,
  Tab,
  ArrowRight,
  ArrowLeft,
  Navigation,
  Zoom,
  Tilt,
  Wrapper,
} from './index.styled';
import { indexMapping, media_a } from '../../constants/index.constants';
import arrowRight from '../../assets/img/navigation_arrow_right.svg';
import arrowLeft from '../../assets/img/navigation_arrow_left.svg';
import { useSelectedItemStore } from '../../store/selected-item.store';
import MenuTitle from '../title';
import { useZoomModeStore } from '../../store/zoom-mode';
import { useOrientationStore } from '../../store/landscape-mode.store';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { toggleSelectedItem, selectedItem } = useSelectedItemStore();
  const { toggleZoomMode } = useZoomModeStore();
  const { toggleLandscape } = useOrientationStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const index = useMemo(
    () => indexMapping[pathname as keyof typeof indexMapping] || media_a,
    [pathname]
  );

  const menu = useMemo(
    () => [
      { path: '/media', label: '미디어월' },
      { path: '/kiosk', label: '이용안내키오스크' },
      { path: '/smart', label: '스마트추천도서' },
      { path: '/library', label: '라이브러리보드' },
    ],
    []
  );

  const handleTabClick = (tab: string) =>
    navigate({ to: pathname.replace(/(\/[a-z]+)\/[a-z]/, `$1/${tab}`) });

  const handleArrowClick = (direction: 'left' | 'right') => {
    const newIndex =
      (currentIndex + (direction === 'left' ? -1 : 1) + index.length) %
      index.length;
    setCurrentIndex(newIndex);
    toggleSelectedItem(newIndex);
  };

  useEffect(() => {
    setCurrentIndex(0);
    toggleSelectedItem(0);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handleArrowClick('left');
        toggleLandscape(false);
      } else if (event.key === 'ArrowRight') {
        handleArrowClick('right');
        toggleLandscape(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, index.length]);

  return (
    <Container>
      <Navigation>
        <Title>인포셋도서관</Title>
        <MenuList>
          {menu.map(({ path, label }) => (
            <Menu
              key={path}
              to={`${path}/a`}
              active={pathname.startsWith(path) ? 'true' : 'false'}
              onClick={() => {
                setCurrentIndex(0);
                toggleLandscape(false);
              }}
            >
              {label}
            </Menu>
          ))}
        </MenuList>
      </Navigation>
      <Content>
        <TabPanel>
          {['a', 'b', 'c'].map((tab) => (
            <Tab
              key={tab}
              onClick={() => {
                handleTabClick(tab);
                toggleLandscape(false);
              }}
              selected={pathname.endsWith(`/${tab}`)}
            >
              Type {tab.toUpperCase()}
            </Tab>
          ))}
        </TabPanel>
        <MenuTitle />
        <ArrowLeft
          src={arrowLeft}
          alt="Previous"
          onClick={() => {
            toggleLandscape(false);
            handleArrowClick('left');
          }}
        />
        {children}
        <Wrapper>
          <Zoom onClick={() => toggleZoomMode(true)} />
          {!pathname.startsWith(`/media/`) &&
            !pathname.startsWith(`/library/`) && (
              <Tilt onClick={() => toggleLandscape()} />
            )}
        </Wrapper>
        <ArrowRight
          src={arrowRight}
          alt="Next"
          onClick={() => {
            toggleLandscape(false);
            handleArrowClick('right');
          }}
        />
      </Content>
      <Index>
        <Pagination>
          <span>{currentIndex + 1}</span> / {index.length}
        </Pagination>
        <Scroll>
          {index.map((item, idx) => (
            <IndexItem
              key={idx}
              src={item}
              alt=""
              selected={idx === selectedItem}
              onClick={() => {
                setCurrentIndex(idx);
                toggleSelectedItem(idx);
                toggleLandscape(false);
              }}
            />
          ))}
        </Scroll>
      </Index>
    </Container>
  );
};

export default Layout;
