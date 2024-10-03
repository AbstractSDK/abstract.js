import { getAccountClient } from '../../wallet/get-account-client'
import { getAccountAddressFromApi } from '../public/get-account-address-from-api'
import { BaseAccountWalletParameters } from './types'

export type GetAccountClientFromApiParameters = BaseAccountWalletParameters

export async function getAccountClientFromApi({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
}: GetAccountClientFromApiParameters) {
  const { account } = await getAccountAddressFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  return getAccountClient({
    signingCosmWasmClient,
    sender,
    accountAddress: account,
  })
}
