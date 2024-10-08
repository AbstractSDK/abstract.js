import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getRegistryQueryClient } from '../../public/get-registry-query-client'
import { getRegistryQueryClientFromApi } from '../../public/get-registry-query-client-from-api'

export type GetAccountAddressFromRegistryParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  registryAddress: string
}

export async function getAccountAddressFromRegistry({
  accountId,
  cosmWasmClient,
  registryAddress,
}: GetAccountAddressFromRegistryParameters) {
  const registryQueryClient = getRegistryQueryClient({
    cosmWasmClient,
    registryAddress,
  })

  const { account } = await registryQueryClient.account({
    accountId: accountIdToParameter(accountId),
  })

  return {
    account,
  }
}
