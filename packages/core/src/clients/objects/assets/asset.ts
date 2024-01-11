import { CW20Asset } from './cw20-asset'
import { NativeAsset } from './native-asset'

export type Asset = NativeAsset | CW20Asset
