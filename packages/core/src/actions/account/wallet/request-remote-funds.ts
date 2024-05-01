import { IbcClientTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { executeIbcAction } from './execute-ibc-action'
import { BaseWalletParameters } from './types'

export type RequestFundsFromRemoteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
    }
  >,
  'funds'
>

/**
 * Request funds from a remote chain.
 * @param accountId
 * @param subAccountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param fee
 * @param memo
 */
export async function requestFundsFromRemote({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  hostChainName,
  fee,
  memo,
}: RequestFundsFromRemoteParameters) {
  const requestFundsMsg: IbcClientTypes.ExecuteMsg = {
    remote_action: {
      host_chain: hostChainName,
      action: {
        helpers: 'send_all_back',
      },
      callback_info: null,
    },
  }

  return executeIbcAction({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    msgs: requestFundsMsg,
    fee,
    memo,
  })
}
