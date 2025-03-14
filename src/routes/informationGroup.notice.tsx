import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import NoticeC from '../components/kiosk/c/notice';
import NoticeB from '../components/kiosk/b/notice';
import NoticeA from '../components/kiosk/a/notice';

export const Route = createFileRoute('/informationGroup/notice')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [NoticeA, NoticeB, NoticeC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
