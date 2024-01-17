import { Asset } from './asset'
import { encodeCW20AssetTransferMsg } from './cw20/encode-cw20-asset-transfer-msg'
import { isCW20Asset } from './cw20/types'
import { encodeNativeAssetTransferMsg } from './native/encode-native-asset-transfer-msg'
import { isNativeAsset } from './native/types'

export function encodeAssetTransferMsg(
  asset: Asset,
  sender: string,
  recipient: string,
) {
  if (isNativeAsset(asset)) {
    return encodeNativeAssetTransferMsg(asset, sender, recipient)
  }
  if (isCW20Asset(asset)) {
    return encodeCW20AssetTransferMsg(asset, sender, recipient)
  }
  throw new Error(`Asset type not supported: ${JSON.stringify(asset, null, 2)}`)
}
