import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/kiosk/a/main';
import Notice from '../components/kiosk/a/notice';
import Information from '../components/kiosk/a/information';
import Facility from '../components/kiosk/a/facility';
import New from '../components/kiosk/a/new';
import Best from '../components/kiosk/a/best';
import BookDetail from '../components/kiosk/a/book-detail';
import Course from '../components/kiosk/a/course';
import CourseDetail from '../components/kiosk/a/course-detail';
import Apply from '../components/kiosk/a/apply';

export const Route = createFileRoute('/kiosk/a')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const kiosk_a = [
    Main,
    Notice,
    Information,
    Facility,
    New,
    Best,
    BookDetail,
    Course,
    CourseDetail,
    Apply,
  ];
  const SelectedComponent = kiosk_a[selectedItem || 0];

  return <SelectedComponent />;
}
