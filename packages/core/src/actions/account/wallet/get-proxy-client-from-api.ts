import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getProxyClient } from '../../wallet/get-proxy-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export type GetProxyClientFromApiParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  apiUrl: string
}>

export async function getProxyClientFromApi({
  args: { accountId, signingCosmWasmClient, sender, apiUrl },
}: GetProxyClientFromApiParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient: signingCosmWasmClient,
      apiUrl,
    },
  })

  return getProxyClient({
    args: { signingCosmWasmClient, sender, proxyAddress },
  })
}
