import { getManagerClient } from '../../wallet/get-manager-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseWalletParameters } from './types'

export type GetManagerClientFromApiParameters = BaseWalletParameters

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
