import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getProxyClient } from '../../wallet/get-proxy-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export type GetProxyClientFromApiParameters = {
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  apiUrl: string
}

export async function getProxyClientFromApi({
  accountId,
  signingCosmWasmClient,
  sender,
  apiUrl,
}: GetProxyClientFromApiParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  return getProxyClient({
    signingCosmWasmClient,
    sender,
    proxyAddress,
  })
}
