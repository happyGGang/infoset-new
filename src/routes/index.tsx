import * as React from 'react';
import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/media/a' });
  }, []);

  return <div>media wall page</div>;
}
