import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import EventA from '../components/library/a/event';
import EventB from '../components/library/b/event';
import EventC from '../components/library/c/event';

export const Route = createFileRoute('/informationGroup/event')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [EventA, EventB, EventC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
