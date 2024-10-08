import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getRegistryQueryClientFromApi } from '../../public/get-registry-query-client-from-api'

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
  const { account } = await registryQueryClient.account({
    accountId: accountIdToParameter(accountId),
  })
  return {
    account,
  }
}
