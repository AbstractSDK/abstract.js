import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerClient } from '../../wallet/get-manager-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export type GetManagerClientFromApiParameters = {
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}

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
