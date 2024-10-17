import { AccountTypes, IbcClientTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { executeIbcAction } from './execute-ibc-action'
import { BaseAccountWalletParameters } from './types'

export type ExecuteOnRemoteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
      hostChainName: string
      accountMsg: MaybeArray<AccountTypes.ExecuteMsg>
    }
  >,
  'funds'
>

/**
 * Execute one message on a remote chain on the remote account itself as the account.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param accountMsg
 * @param callbackInfo
 * @param hostChainName
 * @param fee
 * @param memo
 */
export async function executeOnRemoteAccount({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  accountMsg,
  hostChainName,
  fee,
  memo,
}: ExecuteOnRemoteParameters) {
  const remoteAction: IbcClientTypes.ExecuteMsg = {
    remote_action: {
      host_chain: hostChainName,
      action: {
        dispatch: {
          account_msgs: Array.isArray(accountMsg) ? accountMsg : [accountMsg],
        },
      },
    },
  }

  return executeIbcAction({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    msg: remoteAction,
    fee,
    memo,
  })
}
