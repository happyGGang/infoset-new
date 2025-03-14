import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import CourseA from '../components/kiosk/a/course';
import CourseB from '../components/kiosk/b/course';
import CourseC from '../components/kiosk/c/course';

export const Route = createFileRoute('/etc/courseList')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [CourseA, CourseB, CourseC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
