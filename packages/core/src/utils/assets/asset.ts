import { CW20Asset } from './cw20/cw20-asset'
import { NativeAsset } from './native/native-asset'

export type Asset = NativeAsset | CW20Asset
