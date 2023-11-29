'use client'

import { GrazProvider as Provider } from 'graz'
import { mainnetChains } from 'graz/chains'
import { PropsWithChildren } from 'react'

export function GrazProvider(props: PropsWithChildren) {
  return (
    <Provider
      grazOptions={{
        chains: [mainnetChains.neutron],
      }}
      {...props}
    />
  )
}
