import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import CustomA from '../components/smart/a/custom';
import CustomB from '../components/smart/b/custom';

export const Route = createFileRoute('/bookInformationGroup/custom')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [CustomA, CustomB];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
