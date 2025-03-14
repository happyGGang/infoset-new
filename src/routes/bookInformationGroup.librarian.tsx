import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import LibrarianA from '../components/smart/a/librarian';
import LibrarianB from '../components/smart/b/librarian';

export const Route = createFileRoute('/bookInformationGroup/librarian')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [LibrarianA, LibrarianB];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
