import { VersionControlTypes } from '../codegen/abstract/index'
import type { Evaluate } from '../types/utils'
import { ABSTRACT_API_URL, versionControlAccountIdToString } from '../utils'
import { type Client } from './create-client'
import { WalletClientConfig, createWalletClient } from './create-wallet-client'
import {
  type AccountWalletActions,
  accountWalletActions,
} from './decorators/account-wallet'
import { WalletActions } from './decorators/wallet'

export type AccountWalletClientConfig = WalletClientConfig & {
  accountId: VersionControlTypes.AccountId
}

/**
 * A signing client interact with a specific account in the Abstract infrastructure.
 */
export type AccountWalletClient = Evaluate<
  Client<AccountWalletActions & WalletActions>
>

export function createAccountWalletClient(
  parameters: AccountWalletClientConfig,
): AccountWalletClient {
  const accountIdString = versionControlAccountIdToString(parameters.accountId)
  // TODO: the sender may need to be included in the URL
  const {
    key = `account-wallet-${accountIdString}`,
    name = `AccountWallet Client (${accountIdString})`,
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
