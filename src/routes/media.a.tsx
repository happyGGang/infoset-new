import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/media/a/main';
import Notice from '../components/media/a/notice';
import BookInformation from '../components/media/a/book-information';
import Promotion from '../components/media/a/promotion';
import HoursInformation from '../components/media/a/hours-information';
import Return from '../components/media/a/return';
import Event from '../components/media/a/event';
import Line from '../components/media/a/line';

export const Route = createFileRoute('/media/a')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const media_a = [
    Main,
    Notice,
    BookInformation,
    Promotion,
    HoursInformation,
    Return,
    Event,
    Line,
  ];
  const SelectedComponent = media_a[selectedItem || 0];

  return <SelectedComponent />;
}
