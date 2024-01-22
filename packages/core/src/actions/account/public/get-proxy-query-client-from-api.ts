import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getProxyQueryClient } from '../../public/get-proxy-query-client'
import { getAccountBaseAddressesFromApi } from './get-account-base-addresses-from-api'

export type GetProxyQueryClientFromApiParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getProxyQueryClientFromApi({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetProxyQueryClientFromApiParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })

  return getProxyQueryClient({ args: { cosmWasmClient, proxyAddress } })
}
