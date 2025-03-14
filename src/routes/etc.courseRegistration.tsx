import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import ApplyA from '../components/kiosk/a/apply';
import ApplyB from '../components/kiosk/b/apply';
import ApplyC from '../components/kiosk/c/apply';

export const Route = createFileRoute('/etc/courseRegistration')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [ApplyA, ApplyB, ApplyC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
