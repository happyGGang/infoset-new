import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery/digitalGallery')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /gallery/digitalGallery!'
}
