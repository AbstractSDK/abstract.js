import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountFactoryClient } from '../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../types/parameters'
import { WithOptional } from '../../types/utils'
import { accountIdToParameter } from '../../utils'
import { createAccount } from './create-account'

export type CreateAccountMonarchyParameters = WithCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    owner: string
  } & WithOptional<
    Omit<
      Parameters<typeof AccountFactoryClient.prototype.createAccount>[0],
      'governance'
    >,
    'installModules'
  >
>

export async function createAccountMonarchy({
  signingCosmWasmClient,
  apiUrl,
  sender,
  installModules = [],
  baseAsset,
  description,
  name,
  namespace,
  link,
  owner,
  accountId,
  fee,
  memo,
  funds,
}: CreateAccountMonarchyParameters) {
  return createAccount({
    signingCosmWasmClient,
    apiUrl,
    sender,
    governance: {
      Monarchy: {
        monarch: owner,
      },
    },
    name,
    description,
    link,
    installModules,
    baseAsset,
    namespace,
    accountId: accountId ? accountIdToParameter(accountId) : undefined,
    fee,
    memo,
    funds,
  })
}
