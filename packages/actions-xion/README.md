# XION Actions

> Abstract.js actions for interacting with XION

## Install

```bash
npm install --save @abstract-money/actions-xion
```

## Usage

### Xion Public Client
```tsx
import { useConfig } from '@abstract-money/react'
import { xionPublicActions } from '@abstract-money/actions-xion`
import { useQuery } from '@tanstack/react-query'

const config = useConfig();
const publicClient = config.usePublicClient({ chainName: 'xiontestnet' })
const cosmWasmClient = config.provider.useCosmWasmClient({ chainName: 'xiontestnet' })
const publicXionClient = publicClient.extend(() => xionPublicActions(cosmWasmClient, 'https://believathon.api.abstract.money'))

const { data: xionEoaAccount } = useQuery({
  queryKey: ['xionAccount', ownerAddress],
  queryFn: async () => {
    if (!publicXionClient) throw new Error('no xion client')
    publicXionClient.getXionAccountByExternalOwner({ owner: "OWNER_ADDRESS" })
  },
  enabled: !!publicXionClient
})

```

### Xion Wallet Client
```tsx
import { useConfig } from '@abstract-money/react'
import { xionWalletActions } from '@abstract-money/actions-xion`

const config = useConfig();
const walletClient = config.useWalletClient({ chainName: 'xiontestnet' })
const sender = config.provider.useSenderAddress({ chainName: 'xiontestnet' })
const signingCosmWasmClient = config.provider.useCosmWasmClient({ chainName: 'xiontestnet' })
const xionClient = publicClient
  .extend(() => xionWalletActions(signingCosmWasmClient, sender, 'https://believathon.api.abstract.money')

const createXionAccount = async () => {
  return await publicXionClient.createXionAccountExternalOwner({ name: 'My Account', owner: sender })
}

createXionAccount()

```

## License

MIT © [adairrr](https://github.com/adairrr)
