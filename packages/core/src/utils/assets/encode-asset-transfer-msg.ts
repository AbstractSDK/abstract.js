import { Asset } from './asset'
import { isCW20Asset } from './cw20/cw20-asset'
import { encodeCW20AssetTransferMsg } from './cw20/encode-cw20-asset-transfer-msg'
import { encodeNativeAssetTransferMsg } from './native/encode-native-asset-transfer-msg'
import { isNativeAsset } from './native/native-asset'

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
