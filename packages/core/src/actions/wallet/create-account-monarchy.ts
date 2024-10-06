import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CamelCasedProperties, Merge } from 'type-fest'
import { OverrideProperties } from 'type-fest/source/override-properties'
import { AccountTypes, VersionControlTypes } from '../../codegen/abstract'
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
    WithOptional<
      Omit<
        OverrideProperties<
          AccountTypes.InstantiateMsg,
          { account_id?: VersionControlTypes.AccountId }
        >,
        'owner'
      >,
      'install_modules'
    >
  >
>

/**
 *
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param installModules
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
      monarchy: {
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
