import { AccountId, chainIdToName } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'

export type GetAccountIdParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
}

/**
 * Get the account id with the chain name set.
 * @param accountId
 * @param cosmWasmClient
 */
export async function getAccountId({
  accountId,
  cosmWasmClient,
}: GetAccountIdParameters): Promise<AccountId> {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  return { ...accountId, chainName } satisfies AccountId
}
