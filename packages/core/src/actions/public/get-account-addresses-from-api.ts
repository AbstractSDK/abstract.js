import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../codegen/abstract'
import { accountIdToParameter } from '../../utils/account-id'
import { getRegistryQueryClientFromApi } from './get-registry-query-client-from-api'

export type GetAccountsBaseAddressesFromApiParameters = {
  accountIds: RegistryTypes.AccountId[]
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAccountAddressesFromApi({
  accountIds,
  cosmWasmClient,
  apiUrl,
}: GetAccountsBaseAddressesFromApiParameters) {
  const registryQueryClient = await getRegistryQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })
  return await Promise.all(
    accountIds.map((accountId) =>
      registryQueryClient
        .account({
          accountId: accountIdToParameter(accountId),
        })
        .then(({ account }) => ({
          account,
        })),
    ),
  )
}
