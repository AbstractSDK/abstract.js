import { getManagerClient } from '../../wallet/get-manager-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseAccountWalletParameters } from './types'

export type GetManagerClientFromApiParameters = BaseAccountWalletParameters

export async function getManagerClientFromApi({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
}: GetManagerClientFromApiParameters) {
  const { managerAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  return getManagerClient({
    signingCosmWasmClient,
    sender,
    managerAddress,
  })
}
