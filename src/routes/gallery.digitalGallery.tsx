import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import gallery from '../assets/img/gallery.jpg';

export const Route = createFileRoute('/gallery/digitalGallery')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <img
      src={gallery}
      alt=""
      style={{ width: '75rem', height: '42.1895rem' }}
    />
  );
}
