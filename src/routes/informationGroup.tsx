import * as React from 'react';
import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/informationGroup')({
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/informationGroup/welcomeMessage' });
  }, []);

  return <div></div>;
}
