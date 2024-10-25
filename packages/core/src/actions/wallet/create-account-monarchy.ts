import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CamelCasedProperties, Merge, OverrideProperties } from 'type-fest'
import { AccountTypes, RegistryTypes } from '../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../types/parameters'
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
    Omit<
      OverrideProperties<
        AccountTypes.InstantiateMsg,
        {
          account_id?: RegistryTypes.AccountId
          install_modules?: Merge<
            AccountTypes.ModuleInstallConfig['module'],
            Pick<AccountTypes.ModuleInstallConfig, 'init_msg'>
          >[]
        }
      >,
      'owner'
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
    installModules: installModules.map(({ init_msg, ...module }) => ({
      init_msg,
      module,
    })),
    namespace,
    accountId: accountId ? accountIdToParameter(accountId) : undefined,
    enableIbc,
    fee,
    memo,
    funds,
  })
}
