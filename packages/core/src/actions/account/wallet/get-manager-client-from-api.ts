import { WithArgs } from '../../../types/with-args'
import { getManagerClient } from '../../wallet/get-manager-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseWalletParameters } from './types'

export type GetManagerClientFromApiParameters = WithArgs<BaseWalletParameters>

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
