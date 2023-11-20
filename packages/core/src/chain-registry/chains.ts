import { chains as chainRegistryChains } from 'chain-registry'
import { type Chain as ChainRegistryChain } from './types'

const LOCAL_JUNO_CHAIN: ChainRegistryChain = {
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

const NIBIRU_TESTNET_CHAIN: ChainRegistryChain = {
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

const CONSTANTINE_1_CHAIN: ChainRegistryChain = {
  $schema: '../../chain.schema.json',
  chain_name: 'archwaytestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://archway.io/',
  pretty_name: 'Archway Testnet',
  chain_id: 'constantine-1',
  daemon_name: 'archwayd',
  node_home: '$HOME/.archway',
  bech32_prefix: 'archway',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uconst',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.0125,
        average_gas_price: 0.015,
        high_gas_price: 0.15,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uconst',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.constantine-1.archway.tech',
        provider: 'CryptoCrew',
      },
    ],
    rest: [
      {
        address: 'https://api.constantine-1.archway.tech',
        provider: 'polkachu',
      },
    ],
    grpc: [
      {
        address: 'grpc.constantine-1.archway.tech:443',
        provider: 'Polkachu',
      },
    ],
  },
  explorers: [
    {
      kind: 'finder',
      url: 'https://explorer.constantine-1.archway.tech',
      tx_page:
        'https://explorer.constantine-1.archway.tech/transactions/${txHash}',
    },
  ],
}

const PISCO_1_CHAIN: ChainRegistryChain = {
  $schema: '../../chain.schema.json',
  chain_name: 'terra2testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.terra.money/',
  pretty_name: 'Terra 2.0 Testnet',
  chain_id: 'pisco-1',
  daemon_name: 'terrad',
  node_home: '$HOME/.terra',
  bech32_prefix: 'terra',
  slip44: 330,
  fees: {
    fee_tokens: [
      {
        denom: 'uluna',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.0125,
        average_gas_price: 0.015,
        high_gas_price: 0.15,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uluna',
      },
    ],
  },
  peers: {
    seeds: [],
    // 8dcd9c39b9d4a4ad4483e4558c756072997097b3@65.108.224.83:26656,d39e5f88732ac318147b06c045502296af8a41b6@65.21.75.122:26656,69356f7e79c9fd84c3ae619a55deebd38b6afb8d@65.21.134.243:26656,1212da9116f94cf7c3291e76b12738e0962e0a2d@141.94.138.48:26656,448eeb45abd24156284320e1fdff3a8ca3a3e83d@95.217.61.42:26656,5c7b4e640a381060788e71868530501870565aa8@95.217.197.100:27656,8eb1eeb389062ed8aef579468b5cf678d9572f94@141.95.66.199:26312,2503e540a01f90ff1e1695a436bc184be24ee2c1@5.9.121.71:26656,c5728bfa1ebe6625bfe492d311c73b7c78fef1c0@116.203.36.94:46656,bc35dcbe37d3d060a48ceefa3c984fe97c56605d@195.201.61.185:26656,5a4cfb8fe5f59af5e6eaf9f980ece79864663e7c@142.132.151.99:15613,388b89412979a7ee4b075bb4d3aeda30900a50f0@51.222.248.200:29003,ee196c8a0916a489de5f478f975d43a7558b778d@34.228.224.60:26656,997c7ce88b650afc25e660b1b05892d4026b8473@5.9.123.206:26656,49309dc6665f6bb921358b141fd4e14f91fc0292@18.194.243.144:26656,e3b4fac2740a35f1b401591f018ce42ff58992fe@54.37.87.237:26656,948f35f9aa8817dc65fbc522ef685e9fd5beba72@198.244.179.125:30932,13138fbfc808f5c5de3832d5132f71923f174045@88.99.146.56:26656,3aad376cb911f1c66f39a37184e827cfc0fa6eb0@195.15.247.57:26656,0ab421af0a5cc15a50510e6a4885151eed685b8b@195.15.245.39:26656,e4705a86e48b838d439d043b396da287fce82575@195.15.247.218:26656,16d480f7c90e69fd78adcd394567c60fe118149e@142.132.153.6:16656,ba8c04500bcbf0c53fcab8ece14571bd330a6bf8@185.252.220.89:25002,5819ee584b7c72607028e0f4b7728f6980c24b42@141.95.72.94:16095,2911fd97f7edbc255cd7aa7c31ef905b5eab2fc8@8.210.36.66:26656,3a4c8f4d75781f39b558c3889157acfaa144a793@50.19.18.17:26656,8800c20c0f23b9eb86d70303785280501ad4e69d@168.119.150.243:26656,64cd4872abb00b67998c7cd4e4358f35219e2af1@15.235.49.45:26656,0622bc666a42ee26fd46eab50e85a7b36b8e33c7@14.56.1.81:26656,6be39166c43ec972a1e8e4227196d24a7fb83764@44.204.48.13:26656,e7f4428dea0c6019a8f1c790866243645e9742a0@18.222.244.119:26656,255162e755668e1f5ff85b95114bf2530471bb7d@37.120.245.44:26656,4552ad85b27151182b135e0347d2673f29566bef@185.183.33.143:26656,3b26c2935a8558a2d5455060d23461f352e9bdc1@13.214.186.229:26656,a1397499fe2d77f84057212f928bc98fb5ef2dc4@118.33.55.215:26656,a558107258800ee041292849e819682083a48eb0@44.211.191.29:26656,2bf890e8662e2bdaff997b5f30c7d50719e40b7b@107.21.250.114:26656,676168fbb6ed57834369a4933bf86a8fbca53cd6@34.239.232.196:26656,3f91e2a72058352342e14d5d84a3e3eed4282771@54.220.239.167:26656,1eb3ebfdfe7748b958bcbb9d94fd4f08d699936f@135.181.59.162:11756,83d50f890fdd12a5ccbdb4b8ed33e4ac3613bae0@34.205.15.50:26656,37a80dd85e57fe5fa7f448e0653eebff8cf73178@198.244.228.16:26312,6b9a9074f2ff1c4fafd764de8e4a163a6bb006c3@3.0.92.212:26656,72df78d72d0efdb76e096e3efb737cb4bb82da8b@13.213.74.127:26656,beea94b1073bf4442b8ed821ef2f537fcd924c40@15.235.53.182:26312,f679d64002ef3cc1faddf76873512d520cffdb52@3.38.214.243:26656,cc31bc68f3f1531cf5c1a5fac0674f9aaaf2895b@52.79.113.68:26656,c08d5b3d253bea18b24593a894a0aa6e168079d3@34.232.34.124:26656,c3b57f2d2e6cefb63aadd512c4e4d75ee506a2c6@159.203.61.19:26656,49c871e26f403f4f4db58de45ba729a4f7e21526@44.193.226.212:26656,75d165c16bf66c255b8ca7744ee53e46fbe7fe1a@35.173.218.205:26656,73dbc3b404a86db36d3d029776370ef855dc90e3@3.238.160.204:26656,3cf6fe54ebf581ac05afe30bcc88ef4f408f3b87@50.250.156.59:46666,1702940427154eb6dd703bd484820ccf2b874404@44.203.77.152:26656
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://terra-testnet-rpc.polkachu.com/',
        provider: 'CryptoCrew',
      },
    ],
    rest: [
      {
        address: 'https://terra-testnet-api.polkachu.com/',
        provider: 'polkachu',
      },
    ],
    grpc: [
      {
        address: 'terra-testnet-grpc.polkachu.com:11790',
        provider: 'Polkachu',
      },
    ],
  },
  explorers: [
    {
      kind: 'finder',
      url: 'http://finder.terra.money/testnet',
      tx_page: 'https://finder.terra.money/testnet/tx/${txHash}',
    },
  ],
}

const INJECTIVE_888_CHAIN: ChainRegistryChain = {
  $schema: '../chain.schema.json',
  chain_name: 'injectivetestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://injective.com/',
  pretty_name: 'Injective Testnet',
  chain_id: 'injective-888',
  bech32_prefix: 'inj',
  slip44: 60,
  daemon_name: 'injectived',
  node_home: '$HOME/.injectived',
  fees: {
    fee_tokens: [
      {
        denom: 'inj',
        low_gas_price: 0.0005,
        average_gas_price: 0.0007,
        high_gas_price: 0.0009,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'inj',
      },
    ],
  },
  peers: {
    seeds: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet.tm.injective.network',
        provider: 'Injective',
      },
    ],
    rest: [
      {
        address: 'https://testnet.lcd.injective.network',
        provider: 'injectiveprotocol',
      },
    ],
    grpc: [
      {
        address: 'testnet.chain.grpc.injective.network',
        provider: 'Injective',
      },
    ],
  },
  explorers: [
    {
      kind: 'injectiveprotocol',
      url: 'https://testnet.explorer.injective.network/',
      tx_page:
        'https://testnet.explorer.injective.network/transaction/${txHash}',
    },
  ],
}

const _HARPOON_4_CHAIN: ChainRegistryChain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kujiratestnet',
  chain_id: 'harpoon-4',
  pretty_name: 'Kujira Harpoon',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'kujira',
  daemon_name: 'kujirad',
  node_home: '$HOME/.kujira',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ukuji',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ukuji',
      },
    ],
  },

  apis: {
    rpc: [
      {
        address: 'https://kujira-testnet-rpc.polkachu.com',
        provider: 'polkachu',
      },
    ],
    rest: [
      {
        address: 'https://kujira-testnet-api.polkachu.com/',
        provider: 'polkachu',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://kujira.explorers.guru',
      tx_page: 'https://kujira.explorers.guru/transaction/${txHash}',
    },
  ],
}

const UNI_6_CHAIN: ChainRegistryChain = {
  $schema: '../../chain.schema.json',
  chain_name: 'junotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Juno Testnet',
  chain_id: 'uni-6',
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
    persistent_peers: [
      {
        id: 'ed90921d43ede634043d152d7a87e8881fb85e90',
        address: '65.108.77.106:26709',
        provider: 'EZStaking.io',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://uni-rpc.reece.sh',
        provider: 'Juno',
      },
      {
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    rest: [
      {
        address: 'https://api.uni.junonetwork.io',
        provider: 'Juno',
      },
      {
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    grpc: [
      {
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZStaking Tools',
      url: 'https://testnet.ezstaking.tools/juno-testnet',
      tx_page: 'https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}',
    },
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/juno-testnet',
      tx_page: 'https://testnet.mintscan.io/juno-testnet/txs/${txHash}',
    },
    {
      kind: 'NodesGuru',
      url: 'https://testnet.juno.explorers.guru/',
      tx_page: 'https://testnet.juno.explorers.guru/transaction/${txHash}',
    },
  ],
}

const ARCHWAY_1_CHAIN: ChainRegistryChain = {
  $schema: '../chain.schema.json',
  chain_name: 'archway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://archway.io/',
  pretty_name: 'Archway',
  chain_id: 'archway-1',
  bech32_prefix: 'archway',
  daemon_name: 'archwayd',
  node_home: '$HOME/.archway',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'aarch',
        fixed_min_gas_price: 900000000000,
        low_gas_price: 1000000000000,
        average_gas_price: 1500000000000,
        high_gas_price: 2000000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aarch',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
  },
  peers: {
    seeds: [
      {
        id: '3ba7bf08f00e228026177e9cdc027f6ef6eb2b39',
        address: '35.232.234.58:26656',
        provider: 'Archway Foundation',
      },
      {
        id: 'b308dda41e4db2ee00852d91846f981c49943d46',
        address: '161.97.96.91:46656',
        provider: 'AM Solutions',
      },
      {
        id: 'd2362ebcdd562500ac8c4cfa2214a89ad811033c',
        address: 'seeds.whispernode.com:11556',
        provider: 'WhisperNode🤐',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'archway-mainnet-seed.autostake.com:26946',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11556',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'b6c1198fa025ce24d26d90527c5d2b71f9399756',
        address: 'seed-node.mms.team:34656',
        provider: 'MMS',
      },
      {
        id: '6471ac9ff8474373e8055d45b6246fd8c5204890',
        address: 'archway.seed.mzonder.com:10756',
        provider: 'MZONDER',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'archway-mainnet-peer.autostake.com:26946',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'a477bfcef79f283d82e531ec1a6717677c8caf59',
        address: 'peer-archway.mms.team:56108',
        provider: 'MMS',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.archway.io',
        provider: 'Archway Foundation',
      },
    ],
    rest: [
      {
        address: 'https://api.mainnet.archway.io',
        provider: 'Archway Foundation',
      },
    ],
    grpc: [
      {
        address: 'grpc.mainnet.archway.io:443',
        provider: 'Archway Foundation',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/archway/',
      tx_page: 'https://mintscan.io/archway/txs/${txHash}',
      account_page: 'https://mintscan.io/archway/account/${accountAddress}',
    },
  ],
}

const NEUTRON_1_CHAIN: ChainRegistryChain = {
  $schema: '../chain.schema.json',
  chain_name: 'neutron',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Neutron',
  chain_id: 'neutron-1',
  bech32_prefix: 'neutron',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'untrn',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.05,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'untrn',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
  },
  peers: {
    seeds: [
      {
        id: '24f609fb5946ca3a979f40b7f54132c00104433e',
        address: 'p2p-erheim.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: 'b1c6fa570a184c56d0d736d260b8065d887e717c',
        address: 'p2p-kralum.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:19156',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'f4422e68f9a678838522d75fa8221985c723294d',
        address: 'seeds.whispernode.com:19156',
        provider: 'WhisperNode🤐',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'neutron-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'neutron-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'e5d2743d9a3de514e4f7b9461bf3f0c1500c58d9',
        address: 'neutron.peer.stakewith.us:39956',
        provider: 'StakeWithUs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-kralum.neutron-1.neutron.org',
        provider: 'Neutron',
      },
    ],
    rest: [
      {
        address: 'https://rest-kralum.neutron-1.neutron.org',
        provider: 'Neutron',
      },
    ],
    grpc: [
      {
        address: 'grpc-kralum.neutron-1.neutron.org:80',
        provider: 'Neutron',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/neutron',
      tx_page: 'https://www.mintscan.io/neutron/txs/${txHash}',
      account_page: 'https://www.mintscan.io/neutron/account/${accountAddress}',
    },
  ],
}

export const chains: ChainRegistryChain[] = [
  // remove harpoon 4 in favor of manual entry
  ...chainRegistryChains.filter(
    ({ chain_id }) =>
      !['uni-6', 'pisco-1', 'archway-1', 'neutron-1'].includes(chain_id),
  ),
  LOCAL_JUNO_CHAIN,
  PISCO_1_CHAIN,
  INJECTIVE_888_CHAIN,
  // HARPOON_4_CHAIN,
  UNI_6_CHAIN,
  CONSTANTINE_1_CHAIN,
  ARCHWAY_1_CHAIN,
  NEUTRON_1_CHAIN,
  NIBIRU_TESTNET_CHAIN,
]
