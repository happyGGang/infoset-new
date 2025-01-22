import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import Main from '../components/smart/a/main';
import Chart from '../components/smart/a/chart';
import Result from '../components/smart/a/result';
import Custom from '../components/smart/a/custom';
import Librarian from '../components/smart/a/librarian';
import Bigdata from '../components/smart/a/bigdata';
import Detail from '../components/smart/a/detail';

export const Route = createFileRoute('/smart/a')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_a = [Main, Chart, Result, Custom, Librarian, Bigdata, Detail];
  const SelectedComponent = smart_a[selectedItem || 0];

  return <SelectedComponent />;
}
