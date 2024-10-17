import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { getRegistryQueryClientFromApi } from '../../public/get-registry-query-client-from-api'
import { getAccountAddressFromRegistry } from './get-account-address-from-registry'

export type GetAccountAddressFromApiParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAccountAddressFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetAccountAddressFromApiParameters) {
  const registryQueryClient = await getRegistryQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })
  return getAccountAddressFromRegistry({
    accountId,
    cosmWasmClient,
    registryAddress: registryQueryClient.contractAddress,
  })
}
