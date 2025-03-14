import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import FacilityA from '../components/kiosk/a/facility';
import FacilityB from '../components/kiosk/b/facility';
import FacilityC from '../components/kiosk/c/facility';

export const Route = createFileRoute('/informationGroup/facility')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [FacilityA, FacilityB, FacilityC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
