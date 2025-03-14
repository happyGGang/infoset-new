import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import PromotionA from '../components/media/a/promotion';
import PromotionB from '../components/media/b/promotion';
import PromotionC from '../components/media/c/promotion';

export const Route = createFileRoute('/informationGroup/promotion')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [PromotionA, PromotionB, PromotionC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
