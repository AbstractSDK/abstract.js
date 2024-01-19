import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export type GetOwnerParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getOwner({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetOwnerParameters) {
  const managerQueryClient = await getManagerQueryClientFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })
  return managerQueryClient
    .ownership()
    .then((res) => res.owner ?? null)
    .catch((error) => {
      console.error('Failed to fetch the owner:', error)
      throw error
    })
}
