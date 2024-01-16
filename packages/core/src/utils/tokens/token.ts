import { CW20Token } from './cw20/cw20-token'
import { NativeToken } from './native/native-token'

export type Token = NativeToken | CW20Token
