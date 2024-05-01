import { IbcClientTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { Asset, assetToNativeAsset } from '../../../utils/assets'
import { executeIbcAction } from './execute-ibc-action'
import { BaseWalletParameters } from './types'

export type SendFundsToRemoteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
      assets: MaybeArray<Asset>
    }
  >,
  'funds'
>

/**
 * Send funds to a remote chain.
 * @param accountId
 * @param subAccountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param fee
 * @param memo
 */
export async function sendFundsToRemote({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  hostChainName,
  assets,
  fee,
  memo,
}: SendFundsToRemoteParameters) {
  const sendFundsMsg: IbcClientTypes.ExecuteMsg = {
    send_funds: {
      host_chain: hostChainName,
      funds: (Array.isArray(assets) ? assets : [assets]).map(
        assetToNativeAsset,
      ),
    },
  }

  return executeIbcAction({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    msgs: sendFundsMsg,
    fee,
    memo,
  })
}
