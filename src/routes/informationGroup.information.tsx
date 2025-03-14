import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import InformationA from '../components/kiosk/a/information';
import InformationB from '../components/kiosk/b/information';
import InformationC from '../components/kiosk/c/information';

export const Route = createFileRoute('/informationGroup/information')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [InformationA, InformationB, InformationC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
