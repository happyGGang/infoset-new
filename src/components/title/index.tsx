import React, { useMemo } from 'react';
import { CustomTitle } from './index.styled';
import { useLocation } from '@tanstack/react-router';
import { useSelectedItemStore } from '../../store/selected-item.store';
import {
  event_title,
  facility_title,
  information_title,
  living_title,
  notice_title,
  promotion_title,
  welcomeMessage_title,
} from '../../constants/title.constants';

const MenuTitle: React.FC = () => {
  const { pathname } = useLocation();
  const { selectedItem } = useSelectedItemStore();

  const list = useMemo(() => {
    if (pathname.split('/').pop() === 'welcomeMessage')
      return welcomeMessage_title;

    if (pathname.split('/').pop() === 'promotion') return promotion_title;

    if (pathname.split('/').pop() === 'notice') return notice_title;

    if (pathname.split('/').pop() === 'information') return information_title;

    if (pathname.split('/').pop() === 'facility') return facility_title;

    if (pathname.split('/').pop() === 'event') return event_title;

    if (pathname.split('/').pop() === 'living') return living_title;

    return welcomeMessage_title;
  }, [pathname]);

  const selectedIndex = selectedItem ?? 0;

  return <CustomTitle>{list[selectedIndex]}</CustomTitle>;
};

export default MenuTitle;
