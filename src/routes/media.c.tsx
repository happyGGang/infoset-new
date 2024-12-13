import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/media/c/main';
import Notice from '../components/media/c/notice';
import BookInformation from '../components/media/c/book-information';
import Promotion from '../components/media/c/promotion';
import HoursInformation from '../components/media/c/hours-information';
import Return from '../components/media/c/return';
import Event from '../components/media/c/event';
import Line from '../components/media/c/line';

export const Route = createFileRoute('/media/c')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const media_c = [
    Main,
    Notice,
    BookInformation,
    Promotion,
    HoursInformation,
    Return,
    Event,
    Line,
  ];
  const SelectedComponent = media_c[selectedItem || 0];

  return <SelectedComponent />;
}
