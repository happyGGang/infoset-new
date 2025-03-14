import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import NewB from '../components/kiosk/b/new';
import NewC from '../components/kiosk/c/new';
import NewA from '../components/kiosk/a/new';

export const Route = createFileRoute('/bookInformationGroup/new')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [NewA, NewB, NewC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
