import { IbcClientTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { CommonModuleNames } from '../../public/types'
import { getModuleAddress } from '../public/get-module-address'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type ExecuteIbcActionParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
      msg: IbcClientTypes.ExecuteMsg
    }
  >,
  'funds'
>

/**
 * Execute an IBC action directly as the Account. Must be called by the owner.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param msg
 * @param fee
 * @param memo
 */
export async function executeIbcAction({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  msg,
  fee,
  memo,
}: ExecuteIbcActionParameters) {
  const ibcClientAddress = getModuleAddress({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
    id: abstractModuleId(CommonModuleNames.IBC_CLIENT),
  })

  if (!ibcClientAddress) {
    throw new Error(
      `${abstractModuleId(CommonModuleNames.IBC_CLIENT)} is not installed`,
    )
  }

  const accountClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.ibcAction({ msg }, fee, memo)
}
