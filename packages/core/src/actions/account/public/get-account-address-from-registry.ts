import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getRegistryQueryClient } from '../../public/get-registry-query-client'

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

  const { accounts } = await registryQueryClient.accounts({
    accountIds: [accountIdToParameter(accountId)],
  })

  if (!accounts[0]) {
    throw new Error(`Account not found: ${accountId}`)
  }

  return {
    account: accounts[0],
  }
}
