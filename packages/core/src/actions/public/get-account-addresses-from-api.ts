import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../codegen/abstract'
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
  return await registryQueryClient
    .accounts({
      accountIds,
    })
    .then(({ accounts }) => ({
      accounts,
    }))
}
