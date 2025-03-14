import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSelectedItemStore } from '../store/selected-item.store';
import MediaWelcomeMessageC from '../components/media/c/main';
import MediaWelcomeMessageA from '../components/media/a/main';
import MediaWelcomeMessageB from '../components/media/b/main';
import KioskWelcomeMessageA from '../components/kiosk/a/main';
import KioskWelcomeMessageB from '../components/kiosk/b/main';
import KioskWelcomeMessageC from '../components/kiosk/c/main';

export const Route = createFileRoute('/informationGroup/welcomeMessage')({
  component: RouteComponent,
});

function RouteComponent() {
  const { selectedItem } = useSelectedItemStore();
  const smart_b = [
    MediaWelcomeMessageA,
    MediaWelcomeMessageB,
    MediaWelcomeMessageC,
    KioskWelcomeMessageA,
    KioskWelcomeMessageB,
    KioskWelcomeMessageC,
  ];
  const SelectedComponent = smart_b[selectedItem || 0];

  return <SelectedComponent />;
}
