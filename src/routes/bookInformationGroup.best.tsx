import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bookInformationGroup/best')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /bookInformationGroup/best!'
}
