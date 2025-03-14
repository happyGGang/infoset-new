import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import ChartA from '../components/smart/a/chart';
import ChartB from '../components/smart/b/chart';

export const Route = createFileRoute('/bookInformationGroup/chart')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [ChartA, ChartB];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
