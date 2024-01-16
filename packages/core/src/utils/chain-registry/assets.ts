import { assets as cosmosAssets } from 'chain-registry'

// @TODO: Needs a pr to `chain-registry`
const NIBIRU_TESTNET_ASSET_LIST = {
  $schema: '../assetlist.schemaon',
  chain_name: 'nibirutestnet',
  assets: [
    {
      description: 'The native staking and governance token of Nibiru',
      denom_units: [
        {
          denom: 'unibi',
          exponent: 6,
        },
      ],
      base: 'unibi',
      name: 'NIBI',
      display: 'unibi',
      symbol: 'NIBI',
    },
  ],
}

export const assets: typeof cosmosAssets = [
  ...cosmosAssets,
  NIBIRU_TESTNET_ASSET_LIST,
] satisfies typeof cosmosAssets[number][]
