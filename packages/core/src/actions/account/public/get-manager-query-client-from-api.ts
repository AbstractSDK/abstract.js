import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getManagerQueryClient } from '../../public/get-manager-query-client'
import { getAccountBaseAddressesFromApi } from './get-account-base-addresses-from-api'

export type GetManagerQueryClientFromApiParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>
export async function getManagerQueryClientFromApi({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetManagerQueryClientFromApiParameters) {
  const { managerAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })

  return getManagerQueryClient({ args: { cosmWasmClient, managerAddress } })
}
