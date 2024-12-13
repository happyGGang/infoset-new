import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/kiosk/b/main';
import Notice from '../components/kiosk/b/notice';
import Information from '../components/kiosk/b/information';
import Facility from '../components/kiosk/b/facility';
import New from '../components/kiosk/b/new';
import Best from '../components/kiosk/b/best';
import BookDetail from '../components/kiosk/b/book-detail';
import Course from '../components/kiosk/b/course';
import CourseDetail from '../components/kiosk/b/course-detail';
import Apply from '../components/kiosk/b/apply';

export const Route = createFileRoute('/kiosk/b')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const kiosk_b = [
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
  const SelectedComponent = kiosk_b[selectedItem || 0];

  return <SelectedComponent />;
}
