import { IbcClientTypes, ManagerTypes } from '../../../codegen/abstract'
import { CallbackInfo } from '../../../codegen/abstract/cosmwasm-codegen/IbcClient.types'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { executeIbcAction } from './execute-ibc-action'
import { BaseWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnRemoteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
      managerMsg: MaybeArray<ManagerTypes.ExecuteMsg>
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
export async function executeOnRemoteManager({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  managerMsg,
  hostChainName,
  fee,
  memo,
}: ExecuteOnRemoteParameters) {
  const remoteAction: IbcClientTypes.ExecuteMsg = {
    remote_action: {
      host_chain: hostChainName,
      action: {
        dispatch: {
          manager_msgs: Array.isArray(managerMsg) ? managerMsg : [managerMsg],
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
