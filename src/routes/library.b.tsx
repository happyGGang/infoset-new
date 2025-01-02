import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/library/b/main';
import Notice from '../components/library/b/notice';
import Information from '../components/library/b/information';
import Facility from '../components/library/b/facility';
import Event from '../components/library/b/event';
import Living from '../components/library/b/living';
import Return from '../components/library/b/return';
import New from '../components/library/b/new';
import Best from '../components/library/b/best';
import Librarian from '../components/library/b/librarian';

export const Route = createFileRoute('/library/b')({
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
