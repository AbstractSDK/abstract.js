import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { getAccountQueryClient } from '../../public/get-account-query-client'
import { getAccountAddressFromApi } from './get-account-address-from-api'

export type GetAccountQueryClientFromApiParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}
export async function getAccountQueryClientFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetAccountQueryClientFromApiParameters) {
  const { account } = await getAccountAddressFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  return getAccountQueryClient({ cosmWasmClient, accountAddress: account })
}
