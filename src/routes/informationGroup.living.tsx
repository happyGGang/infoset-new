import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import LivingA from '../components/library/a/living';
import LivingB from '../components/library/b/living';
import LivingC from '../components/library/c/living';

export const Route = createFileRoute('/informationGroup/living')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [LivingA, LivingB, LivingC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
