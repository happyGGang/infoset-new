import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import BigdataA from '../components/smart/a/bigdata';
import BigdataB from '../components/smart/b/bigdata';

export const Route = createFileRoute('/bookInformationGroup/bigdata')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [BigdataA, BigdataB];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
