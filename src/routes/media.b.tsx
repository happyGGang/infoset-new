import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/media/b/main';
import Notice from '../components/media/b/notice';
import BookInformation from '../components/media/b/book-information';
import Promotion from '../components/media/b/promotion';
import HoursInformation from '../components/media/b/hours-information';
import Return from '../components/media/b/return';
import Event from '../components/media/b/event';
import Line from '../components/media/b/line';

export const Route = createFileRoute('/media/b')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const media_b = [
    Main,
    Notice,
    BookInformation,
    Promotion,
    HoursInformation,
    Return,
    Event,
    Line,
  ];
  const SelectedComponent = media_b[selectedItem || 0];

  return <SelectedComponent />;
}
