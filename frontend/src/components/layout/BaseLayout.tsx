'use client'

import { Navigation } from './Navigation'

interface BaseLayoutProps {
  children: React.ReactNode
  showNavigation?: boolean
}

export function BaseLayout({ children, showNavigation = true }: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {showNavigation && <Navigation />}
      <main>{children}</main>
    </div>
  )
} 