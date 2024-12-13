import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/smart/b')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /smart/b!'
}
