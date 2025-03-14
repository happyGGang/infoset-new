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
import {
  indexMapping,
  media_a,
  welcomeMessage,
} from '../../constants/index.constants';
import arrowRight from '../../assets/img/navigation_arrow_right.svg';
import arrowLeft from '../../assets/img/navigation_arrow_left.svg';
import { useSelectedItemStore } from '../../store/selected-item.store';
import MenuTitle from '../title';
import { useOrientationStore } from '../../store/landscape-mode.store';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { toggleSelectedItem, selectedItem } = useSelectedItemStore();
  const { toggleLandscape } = useOrientationStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const index = useMemo(
    () => indexMapping[pathname as keyof typeof indexMapping] || welcomeMessage,
    [pathname]
  );

  const menu = useMemo(
    () => [
      { path: 'informationGroup/welcomeMessage', label: '인포메이션 GROUP' },
      { path: 'bookInformationGroup/new', label: '도서정보 GROUP' },
      { path: 'gallery/digitalGallery', label: '디지털갤러리' },
      { path: 'etc/courseList', label: '기타' },
    ],
    []
  );

  const tabList = useMemo(() => {
    switch (true) {
      case pathname.startsWith('/informationGroup/'):
        return [
          { key: 'welcomeMessage', label: '환영메세지' },
          { key: 'promotion', label: '홍보동영상' },
          { key: 'notice', label: '공지사항' },
          { key: 'information', label: '이용안내' },
          { key: 'facility', label: '시설안내' },
          { key: 'event', label: '행사안내' },
          { key: 'living', label: '생활정보' },
        ];
      case pathname.startsWith('/bookInformationGroup/'):
        return [
          { key: 'new', label: '신착도서' },
          { key: 'best', label: '대출베스트' },
          { key: 'librarian', label: '사서추천' },
          { key: 'chart', label: '능동형추천' },
          { key: 'custom', label: '맞춤형추천' },
          { key: 'bigdata', label: '빅데이터추천' },
          { key: 'detail', label: '도서상세' },
        ];
      case pathname.startsWith('/gallery/'):
        return [{ key: 'digital_gallery', label: '디지털갤러리' }];
      case pathname.startsWith('/etc/'):
        return [
          { key: 'courseList', label: '강좌목록' },
          { key: 'courseRegistration', label: '강좌신청' },
          { key: 'return', label: '대출반납일' },
          { key: 'line', label: '책속한줄' },
        ];
      default:
        return [];
    }
  }, [pathname]);

  const handleTabClick = (key: string) => {
    const basePath = pathname.split('/').slice(0, -1).join('/');
    navigate({ to: `${basePath}/${key}` });
  };

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
          {menu.map(({ path, label }) => {
            const isActive = pathname.includes(path.split('/')[0]);
            return (
              <Menu
                key={path}
                to={path}
                active={isActive ? 'true' : 'false'}
                onClick={() => {
                  setCurrentIndex(0);
                  toggleLandscape(false);
                }}
              >
                {label}
              </Menu>
            );
          })}
        </MenuList>
      </Navigation>
      <Content>
        <TabPanel>
          {tabList.map((tab) => {
            const lastPath = pathname.split('/').pop();
            return (
              <Tab
                key={tab.label}
                onClick={() => {
                  handleTabClick(tab.key);
                  toggleLandscape(false);
                }}
                selected={lastPath === tab.key}
              >
                {tab.label}
              </Tab>
            );
          })}
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
          <Tilt onClick={() => toggleLandscape()} />
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
              loading="lazy"
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
