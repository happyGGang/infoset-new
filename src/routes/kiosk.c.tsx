import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/kiosk/c/main';
import Notice from '../components/kiosk/c/notice';
import Information from '../components/kiosk/c/information';
import Facility from '../components/kiosk/c/facility';
import New from '../components/kiosk/c/new';
import Best from '../components/kiosk/c/best';
import BookDetail from '../components/kiosk/c/book-detail';
import Course from '../components/kiosk/c/course';
import CourseDetail from '../components/kiosk/c/course-detail';
import Apply from '../components/kiosk/c/apply';

export const Route = createFileRoute('/kiosk/c')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const kiosk_c = [
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
  const SelectedComponent = kiosk_c[selectedItem || 0];

  return <SelectedComponent />;
}
