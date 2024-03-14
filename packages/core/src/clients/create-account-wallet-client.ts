import { VersionControlTypes } from '../codegen/abstract/index'
import type { Evaluate } from '../types/utils'
import { ABSTRACT_API_URL } from '../utils'
import { type Client } from './create-client'
import { WalletClientConfig, createWalletClient } from './create-wallet-client'
import {
  type AccountWalletActions,
  accountWalletActions,
} from './decorators/account-wallet'

export type AccountWalletClientConfig = WalletClientConfig & {
  accountId: VersionControlTypes.AccountId
}

export type AccountWalletClient = Evaluate<Client<AccountWalletActions>>

export function createAccountWalletClient(
  parameters: AccountWalletClientConfig,
): AccountWalletClient {
  const {
    key = 'account-wallet',
    name = 'AccountWallet Client',
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl = ABSTRACT_API_URL,
  } = parameters
  const client = createWalletClient({
    ...parameters,
    key,
    name,
  })
  return client.extend(() =>
    accountWalletActions(accountId, signingCosmWasmClient, sender, apiUrl),
  )
}
