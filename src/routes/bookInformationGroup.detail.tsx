import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import BookDetailA from '../components/kiosk/a/book-detail';
import BookDetailB from '../components/kiosk/b/book-detail';
import BookDetailC from '../components/kiosk/c/book-detail';

export const Route = createFileRoute('/bookInformationGroup/detail')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [BookDetailA, BookDetailB, BookDetailC];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
