import { CW20Token } from './cw20/types'
import { NativeToken } from './native/types'

export type Token = NativeToken | CW20Token
