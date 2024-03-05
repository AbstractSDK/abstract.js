import { IbcClientTypes, ManagerClient } from '../../../codegen/abstract'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { executeIbcAction } from './execute-ibc-action'
import { BaseWalletParameters } from './types'

export type CreateRemoteAccountParameters = Omit<
  WithArgsAndCosmWasmSignOptions<
    BaseWalletParameters &
      Omit<
        Extract<IbcClientTypes.ExecuteMsg, { register: unknown }>['register'],
        'host_chain'
      > & {
        hostChainName: string
      }
  >,
  'funds'
>

/**
 * Create a remote account.
 * @param accountId
 * @param subAccountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param registerMsgParams
 * @param fee
 * @param memo
 */
export async function createRemoteAccount({
  args: {
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    hostChainName,
    ...registerMsgParams
  },
  fee,
  memo,
}: CreateRemoteAccountParameters) {
  const registerMsg: IbcClientTypes.ExecuteMsg = {
    register: {
      host_chain: hostChainName,
      ...registerMsgParams,
    },
  }

  return executeIbcAction({
    args: {
      accountId,
      signingCosmWasmClient,
      apiUrl,
      sender,
      msgs: registerMsg,
    },
    fee,
    memo,
  })
}
