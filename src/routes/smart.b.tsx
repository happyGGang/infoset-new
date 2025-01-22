import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/smart/b/main';
import Chart from '../components/smart/b/chart';
import Result from '../components/smart/b/result';
import Custom from '../components/smart/b/custom';
import Librarian from '../components/smart/b/librarian';
import Bigdata from '../components/smart/b/bigdata';
import Detail from '../components/smart/b/detail';

export const Route = createFileRoute('/smart/b')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [Main, Chart, Result, Custom, Librarian, Bigdata, Detail];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
