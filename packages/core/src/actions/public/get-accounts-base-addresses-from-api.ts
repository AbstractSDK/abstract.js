import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../codegen/abstract'
import { accountIdToParameter } from '../../utils/account-id'
import { getVersionControlQueryClientFromApi } from './get-version-control-query-client-from-api'

export type GetAccountsBaseAddressesFromApiParameters = {
  accountIds: VersionControlTypes.AccountId[]
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAccountsBaseAddressesFromApi({
  accountIds,
  cosmWasmClient,
  apiUrl,
}: GetAccountsBaseAddressesFromApiParameters) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })
  return await Promise.all(
    accountIds.map((accountId) =>
      versionControlQueryClient
        .accountBase({
          accountId: accountIdToParameter(accountId),
        })
        .then(({ account_base: accountBase }) => ({
          managerAddress: accountBase.manager,
          proxyAddress: accountBase.proxy,
        })),
    ),
  )
}
