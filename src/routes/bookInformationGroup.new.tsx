import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bookInformationGroup/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /bookInformationGroup/new!'
}
