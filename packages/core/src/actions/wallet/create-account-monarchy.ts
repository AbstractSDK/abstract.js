import { OverrideProperties } from 'type-fest'
import { accountIdToParameter } from '../../utils'
import { CreateAccountParameters, createAccount } from './create-account'

export type CreateAccountMonarchyParameters = OverrideProperties<
  CreateAccountParameters,
  {
    owner: string
  }
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
