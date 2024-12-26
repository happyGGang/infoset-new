import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/library/a/main';
import Notice from '../components/library/a/notice';
import Information from '../components/library/a/information';
import Facility from '../components/library/a/facility';
import Event from '../components/library/a/event';
import Living from '../components/library/a/living';
import Return from '../components/library/a/return';
import New from '../components/library/a/new';
import Best from '../components/library/a/best';
import Librarian from '../components/library/a/librarian';

export const Route = createFileRoute('/library/a')({
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
