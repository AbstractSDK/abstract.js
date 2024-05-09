import { IbcClientTypes, ManagerTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { executeIbcAction } from './execute-ibc-action'
import { BaseWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnRemoteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
      managerMsg: ManagerTypes.ExecuteMsg
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
 * @param hostChainName
 * @param fee
 * @param memo
 */
export async function executeOnRemote({
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
          manager_msgs: [managerMsg],
        },
      },
    },
  }

  return executeIbcAction({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    msgs: [remoteAction],
    fee,
    memo,
  })
}
