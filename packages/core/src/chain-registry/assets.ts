import { assets as cosmosAssets } from 'chain-registry'
import { type Asset, type AssetList } from './types'

const PISCO_1_ASSET_LIST: AssetList = {
  chain_name: 'terra2testnet',
  assets: [
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom: 'uluna',
          exponent: 0,
        },
        {
          denom: 'luna',
          exponent: 6,
        },
      ],
      base: 'uluna',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
      },
      coingecko_id: 'terra-luna-2',
    },
  ],
}

const NIBIRU_TESTNET_ASSET_LIST: AssetList = {
  $schema: '../assetlist.schema.json',
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

const CONSTANTINE_1_ASSET_LIST: AssetList = {
  chain_name: 'archwaytestnet',
  assets: [
    {
      description: 'The native staking token of Archway.',
      denom_units: [
        {
          denom: 'uconst',
          exponent: 0,
        },
        {
          denom: 'const',
          exponent: 6,
        },
      ],
      base: 'uconst',
      name: 'Constantine',
      display: 'const',
      symbol: 'CONST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/wrchipman/2dtutorial/28cce3c6b30577e959242e719bd373da08d1f734/Assets/Mod%20Assets/Mod%20Resources/Sprites/Props/Archway.png',
        // png: '/assets/archway.png',
      },
      coingecko_id: 'terra-luna-2',
    },
  ],
}

const INJECTIVE_888_ASSET_LIST: AssetList = {
  chain_name: 'injectivetestnet',
  assets: [
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom: 'inj',
          exponent: 0,
        },
        {
          denom: 'INJ',
          exponent: 18,
        },
      ],
      base: 'inj',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
      },
      coingecko_id: 'injective-protocol',
    },
  ],
}

const BARYON_1_ASSETS: AssetList = {
  chain_name: 'neutrontestnet',
  assets: [
    {
      description:
        'The NTRN token is the native governance token for the Neutron chain.',
      denom_units: [
        {
          denom: 'untrn',
          exponent: 0,
        },
        {
          denom: 'ntrn',
          exponent: 6,
        },
      ],
      base: 'untrn',
      name: 'Neutron',
      display: 'NTRN',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://github.com/neutron-org/brandbook/blob/main/Logo/Icon/PNG/icon-white.png?raw=true',
        svg: 'https://raw.githubusercontent.com/neutron-org/brandbook/main/Logo/Icon/SVG/icon-white.svg',
      },
      coingecko_id: 'neutron-protocol',
    },
  ],
}

const PION_1_ASSETS: AssetList = {
  chain_name: 'neutrontestnet',
  assets: [
    {
      ...cosmosAssets
        .find(({ chain_name }) => chain_name === 'neutrontestnet')!
        .assets.find(({ symbol }) => symbol === 'NTRN')!,
      logo_URIs: {
        png: 'https://github.com/neutron-org/brandbook/blob/main/Logo/Icon/PNG/icon-white.png?raw=true',
        svg: 'https://raw.githubusercontent.com/neutron-org/brandbook/main/Logo/Icon/SVG/icon-white.svg',
      },
    },
  ],
}

const _NEUTRON_1_ASSETS: AssetList = {
  chain_name: 'neutron',
  assets: [
    {
      ...cosmosAssets
        .find(({ chain_name }) => chain_name === 'neutron')!
        .assets.find(({ symbol }) => symbol === 'NTRN')!,
      logo_URIs: {
        png: 'https://github.com/neutron-org/brandbook/blob/main/Logo/Icon/PNG/icon-white.png?raw=true',
        svg: 'https://raw.githubusercontent.com/neutron-org/brandbook/main/Logo/Icon/SVG/icon-white.svg',
      },
    },
  ],
}

export const assets: typeof cosmosAssets = [
  CONSTANTINE_1_ASSET_LIST,
  ...cosmosAssets,
  PION_1_ASSETS,
  PISCO_1_ASSET_LIST,
  INJECTIVE_888_ASSET_LIST,
  BARYON_1_ASSETS,
  NIBIRU_TESTNET_ASSET_LIST,
]
