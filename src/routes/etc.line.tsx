import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/etc/line')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /etc/line!'
}
