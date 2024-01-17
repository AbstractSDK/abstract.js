import { Prettify } from 'src/types/utils'
import { AnsToken } from 'src/utils/tokens/ans/types'
import { Asset } from '../asset'

export type AnsAsset<T extends string = string> = Prettify<AnsToken<T> & Asset>
