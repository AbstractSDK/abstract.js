import { CW20Token } from './cw20-token'
import { NativeToken } from './native-token'

export type Token = NativeToken | CW20Token
