import { chains as chainRegistryChains } from 'chain-registry'

const LOCAL_JUNO_CHAIN = {
  $schema: '../../chain.schema.json',
  chain_name: 'localjuno',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'LocalJuno',
  chain_id: 'localjuno',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujunox',
        low_gas_price: 0.03,
        average_gas_price: 0.04,
        high_gas_price: 0.05,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujunox',
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'http://127.0.0.1:26657',
      },
    ],
    rest: [
      {
        address: 'http://127.0.0.1:1317',
      },
    ],
    grpc: [
      {
        address: 'http://127.0.0.1:9090',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZStaking Tools',
      url: 'https://testnet.ezstaking.tools/juno-testnet',
      tx_page: 'https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}',
    },
  ],
}

// @TODO: needs a PR in chain-registry
const NIBIRU_TESTNET_CHAIN = {
  $schema: '../chain.schema.json',
  chain_name: 'nibirutestnet',
  chain_id: 'nibiru-itn-3',
  pretty_name: 'Nibiru Chain',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'nibi',
  daemon_name: 'nibid',
  node_home: '$HOME/.nibid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'unibi',
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'unibi',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/NibiruChain/nibiru',
    genesis: {
      genesis_url: '',
    },
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-t.nibiru.nodestake.top',
        provider: 'nodestake',
      },
      {
        address: 'https://nibiru-testnet.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://rpc-nibiru.nodeist.net',
        provider: 'nodeist',
      },
    ],
    rest: [
      {
        address: 'https://api-t.nibiru.nodestake.top',
        provider: 'nodestake',
      },
      {
        address: 'https://nibiru-testnet.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://api-nibiru.nodeist.net',
        provider: 'nodeist',
      },
    ],
    grpc: [
      {
        address: 'https://grpc-t.nibiru.nodestake.top',
        provider: 'nodestake',
      },
      {
        address: 'https://nibiru-testnet.grpc.kjnodes.com:13990',
        provider: 'kjnodes',
      },
    ],
  },
  explorers: [
    {
      kind: 'nibirufi',
      url: 'https://explorer.nibiru.fi',
      tx_page: 'https://explorer.nibiru.fi/nibiru-itn-2/tx/${txHash}',
    },
  ],
}

export const chains = [
  // remove harpoon 4 in favor of manual entry
  ...chainRegistryChains.filter(
    ({ chain_id }) =>
      !['uni-6', 'pisco-1', 'archway-1', 'neutron-1'].includes(chain_id),
  ),
  LOCAL_JUNO_CHAIN,
  NIBIRU_TESTNET_CHAIN,
] satisfies typeof chainRegistryChains[number][]
