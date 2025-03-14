import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import BestA from '../components/kiosk/a/best';
import BestB from '../components/kiosk/b/best';
import BestC from '../components/kiosk/c/best';

export const Route = createFileRoute('/bookInformationGroup/best')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [BestA, BestB, BestC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
