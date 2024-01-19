import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerClient } from '../../wallet/get-manager-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export type GetManagerClientFromApiParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

export async function getManagerClientFromApi({
  args: { accountId, signingCosmWasmClient, apiUrl, sender },
}: GetManagerClientFromApiParameters) {
  const { managerAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient: signingCosmWasmClient,
      apiUrl,
    },
  })

  return getManagerClient({
    args: { signingCosmWasmClient, sender, managerAddress },
  })
}
