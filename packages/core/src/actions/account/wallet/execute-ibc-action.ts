import { IbcClientTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { CommonModuleNames } from '../../public/types'
import { getModuleAddress } from '../public/get-module-address'
import { executeOnModule } from './execute-on-module'
import { BaseAccountWalletParameters } from './types'

export type ExecuteIbcActionParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters & {
    msg: IbcClientTypes.ExecuteMsg
  }
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
 * @param funds
 */
export async function executeIbcAction({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  msg,
  fee,
  memo,
  funds,
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

  return executeOnModule({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId: abstractModuleId(CommonModuleNames.IBC_CLIENT),
    moduleType: 'native',
    moduleMsg: msg,
    moduleFunds: funds,
    fee,
    memo,
    // We pass in no funds here because we want to send them along with the module funds
    funds: [],
  })
}
