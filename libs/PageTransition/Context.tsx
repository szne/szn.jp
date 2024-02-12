'use client'

import { usePathname } from 'next/navigation'
import { MekuriContext } from '@funtech-inc/mekuri'

export const PageTransitionContext = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <MekuriContext
      millisecond={1000}
      scrollRestoration={{
        scrollRestoration: 'restore',
        onEnter: (pos) => {
          window.scrollTo({ top: pos })
        },
      }}
      mode='wait'
      trigger={pathname}
    >
      {children}
    </MekuriContext>
  )
}
