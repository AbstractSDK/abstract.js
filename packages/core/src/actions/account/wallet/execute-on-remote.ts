import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  IbcClientTypes,
  ManagerTypes,
  ProxyTypes,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { CallbackInfo } from '../../../codegen/abstract/cosmwasm-codegen/IbcClient.types'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { executeOnModule } from './execute-on-module'
import { BaseWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteParameters = Omit<
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
}: ExecuteParameters) {
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

  const proxyMsg: ProxyTypes.ExecuteMsg = {
    ibc_action: {
      msgs: [remoteAction],
    },
  }

  return executeOnModule({
    args: {
      accountId,
      signingCosmWasmClient,
      apiUrl,
      sender,
      moduleId: 'abstract:proxy',
      moduleType: ModuleType.AccountBase,
      moduleMsg: proxyMsg,
    },
    fee,
    memo,
  })
}
