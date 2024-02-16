'use client'

import { GrazProvider as Provider } from 'graz'
import { mainnetChains } from 'graz/chains'
import { PropsWithChildren } from 'react'

export function GrazProvider(props: PropsWithChildren) {
  return (
    <Provider
      grazOptions={{
        chains: [mainnetChains.neutron, mainnetChains.osmosis],
        chainsConfig: {
          [mainnetChains.osmosis.chainId]: {
            gas: {
              price: '0.25',
              denom: 'osmo',
            },
          },
          [mainnetChains.neutron.chainId]: {
            gas: {
              price: '0.1',
              denom: 'untrn',
            },
          },
        },
      }}
      {...props}
    />
  )
}
