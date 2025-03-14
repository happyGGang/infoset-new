import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bookInformationGroup/librarian')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /bookInformationGroup/librarian!'
}
