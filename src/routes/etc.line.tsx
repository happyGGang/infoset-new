import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import LineB from '../components/media/b/line';
import LineC from '../components/media/c/line';
import LineA from '../components/media/a/line';

export const Route = createFileRoute('/etc/line')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [LineA, LineB, LineC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
