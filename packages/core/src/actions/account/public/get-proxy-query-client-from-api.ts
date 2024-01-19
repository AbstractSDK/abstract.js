import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
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
