import { IbcClientTypes, ManagerTypes } from '../../../codegen/abstract'
import { CallbackInfo } from '../../../codegen/abstract/cosmwasm-codegen/IbcClient.types'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { executeIbcAction } from './execute-ibc-action'
import { BaseWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnRemoteParameters = Omit<
  WithArgsAndCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
      managerMsg: ManagerTypes.ExecuteMsg
      callbackInfo?: CallbackInfo
    }
  >,
  'funds'
>

/**
 * Execute one message on a remote chain.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param managerMsg
 * @param callbackInfo
 * @param hostChainName
 * @param fee
 * @param memo
 */
export async function executeOnRemote({
  args: {
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    managerMsg,
    callbackInfo,
    hostChainName,
  },
  fee,
  memo,
}: ExecuteOnRemoteParameters) {
  const remoteAction: IbcClientTypes.ExecuteMsg = {
    remote_action: {
      host_chain: hostChainName,
      action: {
        dispatch: {
          manager_msg: managerMsg,
        },
      },
      callback_info: callbackInfo,
    },
  }

  return executeIbcAction({
    args: {
      accountId,
      signingCosmWasmClient,
      apiUrl,
      sender,
      msgs: [remoteAction],
    },
    fee,
    memo,
  })
}
