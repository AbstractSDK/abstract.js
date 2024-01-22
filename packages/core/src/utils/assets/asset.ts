import { CW20Asset } from './cw20/types'
import { NativeAsset } from './native/types'

export type Asset = NativeAsset | CW20Asset
