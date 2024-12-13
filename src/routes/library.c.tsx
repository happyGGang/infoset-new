import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/library/c')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /library/c!'
}
