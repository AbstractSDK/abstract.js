'use client'

import { GrazProviderProps, GrazProvider as Provider } from 'graz'
import { mainnetChains } from 'graz/chains'

export function GrazProvider(
  props: Pick<GrazProviderProps, 'children' | 'client'>,
) {
  return (
    <Provider
      client={props.client}
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
