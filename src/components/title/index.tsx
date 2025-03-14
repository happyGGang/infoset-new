import React, { useMemo } from 'react';
import { CustomTitle } from './index.styled';
import { useLocation } from '@tanstack/react-router';
import { useSelectedItemStore } from '../../store/selected-item.store';
import {
  best_title,
  bigdata_title,
  chart_title,
  courseList_title,
  courseRegistration_title,
  custom_title,
  detail_title,
  event_title,
  facility_title,
  information_title,
  librarian_title,
  line_title,
  living_title,
  new_title,
  notice_title,
  promotion_title,
  return_title,
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

    if (pathname.split('/').pop() === 'new') return new_title;

    if (pathname.split('/').pop() === 'best') return best_title;

    if (pathname.split('/').pop() === 'librarian') return librarian_title;

    if (pathname.split('/').pop() === 'chart') return chart_title;

    if (pathname.split('/').pop() === 'custom') return custom_title;

    if (pathname.split('/').pop() === 'bigdata') return bigdata_title;

    if (pathname.split('/').pop() === 'detail') return detail_title;

    if (pathname.split('/').pop() === 'digitalGallery') return ['디지털갤러리'];

    if (pathname.split('/').pop() === 'courseList') return courseList_title;

    if (pathname.split('/').pop() === 'courseRegistration')
      return courseRegistration_title;

    if (pathname.split('/').pop() === 'return') return return_title;

    if (pathname.split('/').pop() === 'line') return line_title;

    return welcomeMessage_title;
  }, [pathname]);

  const selectedIndex = selectedItem ?? 0;

  return <CustomTitle>{list[selectedIndex]}</CustomTitle>;
};

export default MenuTitle;
