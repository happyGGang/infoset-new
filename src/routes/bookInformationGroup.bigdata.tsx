import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bookInformationGroup/bigdata')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /bookInformationGroup/bigdata!'
}
