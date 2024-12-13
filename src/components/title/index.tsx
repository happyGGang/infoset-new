import React, { useMemo } from 'react';
import { CustomTitle } from './index.styled';
import { useLocation } from '@tanstack/react-router';
import { useSelectedItemStore } from '../../store/selected-item.store';
import {
  kiosk_title,
  library_title,
  media_title,
  smart_title,
} from '../../constants/title.constants';

const MenuTitle: React.FC = () => {
  const { pathname } = useLocation();
  const { selectedItem } = useSelectedItemStore();

  const list = useMemo(() => {
    if (pathname.startsWith('/media')) return media_title;
    if (pathname.startsWith('/kiosk')) return kiosk_title;
    if (pathname.startsWith('/smart')) return smart_title;
    return library_title;
  }, [pathname]);

  const selectedIndex = selectedItem ?? 0;

  return <CustomTitle>{list[selectedIndex]}</CustomTitle>;
};

export default MenuTitle;
