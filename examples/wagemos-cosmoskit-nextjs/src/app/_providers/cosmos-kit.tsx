'use client'

import { Chain } from '@chain-registry/types'
import { GasPrice } from '@cosmjs/stargate'
import { wallets } from '@cosmos-kit/keplr'
import { ChainProvider } from '@cosmos-kit/react'
import { assets, chains } from 'chain-registry'
import { ReactNode } from 'react'

export function CosmosKitProvider(props: { children: ReactNode }) {
  const signerOptions = {
    signingCosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'localjuno':
        case 'junotestnet':
          return { gasPrice: GasPrice.fromString('0.1ujunox') }
        case 'juno':
          return { gasPrice: GasPrice.fromString('0.1ujuno') }
        case 'osmosis':
        case 'osmosistestnet':
        case 'osmosistestnet5':
          return { gasPrice: GasPrice.fromString('0.035uosmo') }
        case 'neutron':
        case 'neutrontestnet':
          return { gasPrice: GasPrice.fromString('.5untrn') }
        case 'archwaytestnet':
          return { gasPrice: GasPrice.fromString(`${1e12}aconst`) }
        case 'archway':
          return { gasPrice: GasPrice.fromString(`${1e12}aarch`) }
      }
    },
  }
  return (
    <ChainProvider
      chains={chains.map((chain) => {
        return {
          ...chain,
          apis: {
            ...chain.apis,
            rpc: chain.apis?.rpc?.length
              ? [
                  chain.apis.rpc.find((rpc) =>
                    rpc.address.includes('polkachu'),
                  ) ?? chain.apis.rpc[0],
                ]
              : [],
          },
        }
      })}
      assetLists={assets}
      wallets={wallets}
      signerOptions={signerOptions}
      sessionOptions={{
        duration: 1000 * 60 * 60 * 24 * 7,
      }}
      endpointOptions={{
        isLazy: true,
        endpoints: {
          archway: {
            rpc: [
              'https://497eb440-0152-48f8-85ff-f0cf7c8a5632.archway-1.mesa-rpc.newmetric.xyz',
            ],
            // rpc: ['https://juno-rpc.polkachu.com'],
            // rpc: ['https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/1edd160f38824b5c019c1215d4aed47a'],
            isLazy: true,
          },
          juno: {
            rpc: [
              'https://497eb440-0152-48f8-85ff-f0cf7c8a5632.juno-1.mesa-rpc.newmetric.xyz',
            ],
            // rpc: ['https://archway-rpc.polkachu.com'],
            isLazy: true,
          },
          neutron: {
            // rpc: [
            //   'https://497eb440-0152-48f8-85ff-f0cf7c8a5632.neutron-1.mesa-rpc.newmetric.xyz',
            // ],
            rpc: ['https://neutron-rpc.polkachu.com'],
            isLazy: true,
          },
          osmosis: {
            rpc: [
              'https://497eb440-0152-48f8-85ff-f0cf7c8a5632.osmosis-1.mesa-rpc.newmetric.xyz',
            ],
            // rpc: ['https://osmosis-rpc.polkachu.com'],
            isLazy: true,
          },
        },
      }}
      {...props}
    />
  )
}
