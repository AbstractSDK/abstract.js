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
      let gasTokenName = ''
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
          gasTokenName = 'untrn'
          return { gasPrice: GasPrice.fromString(`.5${gasTokenName}`) }
        case 'neutrontestnet':
          gasTokenName = 'untrn'
          break
        case 'archwaytestnet':
          gasTokenName = 'aconst'
          return { gasPrice: GasPrice.fromString(`${1e12}${gasTokenName}`) }
        case 'archway':
          gasTokenName = 'aarch'
          return { gasPrice: GasPrice.fromString(`${1e12}${gasTokenName}`) }
      }
    },
  }
  return (
    <ChainProvider
      chains={chains.map((chain) => {
        const hasRpcs = !!chain.apis?.rpc?.length
        return {
          ...chain,
          apis: {
            ...chain.apis,
            rpc: hasRpcs
              ? [
                  chain.apis!.rpc!.find((rpc) =>
                    rpc.address.includes('polkachu'),
                  ) ?? chain.apis!.rpc![0],
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
            rpc: ['https://archway-rpc.polkachu.com'],
            isLazy: true,
          },
        },
      }}
      {...props}
    />
  )
}
