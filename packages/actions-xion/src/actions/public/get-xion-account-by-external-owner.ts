import { getRegistryQueryClientFromApi } from '@abstract-money/core/actions'
import {
  AccountQueryClient,
  RegistryTypes,
} from '@abstract-money/core/codegen/abstract'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { predictXionAccountIdByExternalOwner } from './predict-xion-account-id-by-external-owner'

interface XionAbstractAccountByOwner {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  owner: string
}

/**
 * @unstable
 * @param cosmWasmClient
 * @param owner
 * @param apiUrl
 * @param rpcEndpoint
 */
export async function getXionAccountByExternalOwner({
  cosmWasmClient,
  apiUrl,
  owner,
}: XionAbstractAccountByOwner): Promise<
  { client: AccountQueryClient; accountId: RegistryTypes.AccountId } | undefined
> {
  const registryQueryClient = await getRegistryQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })

  try {
    const accountId = await predictXionAccountIdByExternalOwner({
      owner,
      cosmWasmClient,
    })

    const { accounts } = await registryQueryClient.accounts({
      accountIds: [accountId],
    })

    if (accounts.length > 0) {
      const client = new AccountQueryClient(
        registryQueryClient.client,
        accounts[0]!,
      )
      return {
        client,
        accountId,
      }
    }
  } catch (e) {
    console.debug('Error getting account by owner', e)
    return undefined
  }
  return undefined
}
