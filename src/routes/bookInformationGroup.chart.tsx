import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bookInformationGroup/chart')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /bookInformationGroup/chart!'
}
