import { Asset } from './asset'
import { isCW20Asset } from './cw20-asset'
import { getCW20AssetTransferMsg } from './get-cw20-asset-transfer-msg'
import { getNativeAssetTransferMsg } from './get-native-asset-transfer-msg'
import { isNativeAsset } from './native-asset'

export function getAssetTransferMsg(
  asset: Asset,
  sender: string,
  recipient: string,
) {
  if (isNativeAsset(asset)) {
    return getNativeAssetTransferMsg(asset, sender, recipient)
  }
  if (isCW20Asset(asset)) {
    return getCW20AssetTransferMsg(asset, sender, recipient)
  }
  throw new Error(`Asset type not supported: ${JSON.stringify(asset, null, 2)}`)
}
