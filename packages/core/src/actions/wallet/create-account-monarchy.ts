import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CamelCasedProperties } from 'type-fest'
import { AccountTypes } from '../../codegen/abstract'
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
    enableIbc?: boolean
  } & CamelCasedProperties<
    WithOptional<Omit<AccountTypes.InstantiateMsg, 'owner'>, 'install_modules'>
  >
>

/**
 *
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param installModules
 * @param baseAsset
 * @param description
 * @param name
 * @param namespace
 * @param link
 * @param owner
 * @param accountId
 * @param enableIbc only compatible with versions 0.23+
 * @param fee
 * @param memo
 * @param funds
 */
export async function createAccountMonarchy({
  signingCosmWasmClient,
  apiUrl,
  sender,
  installModules = [],
  description,
  name,
  namespace,
  link,
  owner,
  accountId,
  enableIbc,
  fee,
  memo,
  funds,
}: CreateAccountMonarchyParameters) {
  return createAccount({
    signingCosmWasmClient,
    apiUrl,
    sender,
    owner: {
      Monarchy: {
        monarch: owner,
      },
    },
    name,
    description,
    link,
    installModules,
    namespace,
    accountId: accountId ? accountIdToParameter(accountId) : undefined,
    enableIbc,
    fee,
    memo,
    funds,
  })
}
