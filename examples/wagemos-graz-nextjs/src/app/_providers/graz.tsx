'use client'

import { GrazProvider as Provider } from 'graz'
import { mainnetChains, testnetChains } from 'graz/chains'
import { ComponentProps } from 'react'

export function GrazProvider(
  props: Pick<ComponentProps<typeof Provider>, 'children' | 'client'>,
) {
  return (
    <Provider
      client={props.client}
      grazOptions={{
        chains: [
          { ...mainnetChains.neutron, rpc: 'https://neutron-rpc.polkachu.com' },
          {
            ...testnetChains.neutrontestnet,
            rpc: 'https://neutron-testnet-rpc.polkachu.com',
          },
          mainnetChains.osmosis,
        ],
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
        },
      }}
      {...props}
    />
  )
}
