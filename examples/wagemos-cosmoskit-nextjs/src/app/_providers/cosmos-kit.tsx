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
        case 'localosmosis':
          return {
            gasPrice: GasPrice.fromString('0.01untrn'),
          }
      }
    },
  }
  return (
    <ChainProvider
      chains={chains}
      assetLists={assets}
      wallets={wallets}
      signerOptions={signerOptions}
      {...props}
    />
  )
}
