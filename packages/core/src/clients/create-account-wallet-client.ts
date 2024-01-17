import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../codegen/abstract/index'
import type { Prettify } from '../types/utils'
import { type Client, type ClientConfig, createClient } from './create-client'
import {
  type AccountWalletActions,
  accountWalletActions,
} from './decorators/account-wallet'

export type AccountWalletClientConfig = ClientConfig & {
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
}

export type AccountWalletClient = Prettify<Client<AccountWalletActions>>

export function createAccountWalletClient(
  parameters: AccountWalletClientConfig,
): AccountWalletClient {
  const {
    key = 'account-wallet',
    name = 'AccountWallet Client',
    accountId,
    signingCosmWasmClient,
  } = parameters
  const client = createClient({
    ...parameters,
    key,
    name,
  })
  return client.extend((client) =>
    accountWalletActions(accountId, signingCosmWasmClient, client),
  )
}
