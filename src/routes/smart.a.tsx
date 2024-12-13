import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/smart/a')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /smart/a!'
}
