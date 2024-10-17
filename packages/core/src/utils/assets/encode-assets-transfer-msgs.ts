import { EncodedMsg } from '../encoding'
import { Asset } from './asset'
import { encodeCW20AssetTransferMsg } from './cw20/encode-cw20-asset-transfer-msg'
import { CW20Asset, isCW20Asset } from './cw20/types'
import { nativeAssetToCoin } from './native/native-asset-to-coin'
import { NativeAsset, isNativeAsset } from './native/types'

export function encodeAssetsTransfersMsgs<
  const TAssets extends readonly Asset[] = Asset[],
>(assets: TAssets, sender: string, recipient: string) {
  const nativeAssets: NativeAsset[] = []
  const cw20Assets: CW20Asset[] = []

  for (const asset of assets) {
    if (isNativeAsset(asset)) {
      nativeAssets.push(asset)
    } else if (isCW20Asset(asset)) {
      cw20Assets.push(asset)
    } else {
      throw new Error(
        `Asset type not supported: ${JSON.stringify(asset, null, 2)}`,
      )
    }
  }

  const msgs: EncodedMsg[] = []

  if (nativeAssets.length > 0) {
    const nativeCoins = nativeAssets.map((asset) => nativeAssetToCoin(asset))
    const sendMsg = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: sender,
        toAddress: recipient,
        // the denominations must be sorted alphabetically
        amount: nativeCoins.sort((a, b) => a.denom.localeCompare(b.denom)),
      },
    } as const
    msgs.push(sendMsg)
  }

  // add the rest of the messages
  cw20Assets.forEach((asset) => {
    msgs.push(encodeCW20AssetTransferMsg(asset, sender, recipient))
  })

  return msgs
}
