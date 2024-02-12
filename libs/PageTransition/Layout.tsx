'use client'

import { MekuriFreezer, Mekuri } from '@funtech-inc/mekuri'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { usePathname } from 'next/navigation'

export const PageTransitionLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <Mekuri>
      <MekuriFreezer key={pathname} routerContext={LayoutRouterContext}>
        {children}
      </MekuriFreezer>
    </Mekuri>
  )
}
