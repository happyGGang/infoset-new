import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/library/c/main';
import Notice from '../components/library/c/notice';
import Information from '../components/library/c/information';
import Facility from '../components/library/c/facility';
import Event from '../components/library/c/event';
import Living from '../components/library/c/living';
import Return from '../components/library/c/return';
import New from '../components/library/c/new';
import Best from '../components/library/c/best';
import Librarian from '../components/library/c/librarian';

export const Route = createFileRoute('/library/c')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const library_a = [
    Main,
    Notice,
    Information,
    Facility,
    Event,
    Living,
    Return,
    New,
    Best,
    Librarian,
  ];
  const SelectedComponent = library_a[selectedItem || 0];

  return <SelectedComponent />;
}
