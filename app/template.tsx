'use client'
import { MekuriContext } from '@funtech-inc/mekuri'
import { usePathname } from 'next/navigation'
import React from 'react'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

export default function MotionWrapper({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
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
      trigger={pathName}
    >
      {children}
    </MekuriContext>
  )
}
