import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import ReturnA from '../components/library/a/return';
import ReturnB from '../components/library/b/return';
import ReturnC from '../components/library/c/return';

export const Route = createFileRoute('/etc/return')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [ReturnA, ReturnB, ReturnC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
