import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import KioskWelcomeMessageA from '../components/kiosk/a/main';
import KioskWelcomeMessageB from '../components/kiosk/b/main';
import KioskWelcomeMessageC from '../components/kiosk/c/main';

export const Route = createFileRoute('/informationGroup/welcomeMessage')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [
    KioskWelcomeMessageA,
    KioskWelcomeMessageB,
    KioskWelcomeMessageC,
  ];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
