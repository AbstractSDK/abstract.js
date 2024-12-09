'use client'

import { GrazProvider as Provider } from 'graz'
import {
  mainnetChains,
  mainnetChainsArray,
  testnetChains,
  testnetChainsArray,
} from 'graz/chains'
import { ComponentProps } from 'react'

export function GrazProvider(
  props: Pick<ComponentProps<typeof Provider>, 'children' | 'client'>,
) {
  return (
    <Provider
      client={props.client}
      grazOptions={{
        chains: [...mainnetChainsArray, ...testnetChainsArray],
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
          [testnetChains.neutrontestnet.chainId]: {
            gas: {
              price: '0.1',
              denom: 'untrn',
            },
          },
          [testnetChains.xiontestnet.chainId]: {
            gas: {
              price: '0.001',
              denom: 'uxion',
            },
          },
        },
      }}
      {...props}
    />
  )
}
