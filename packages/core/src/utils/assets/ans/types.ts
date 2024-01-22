import { Prettify } from '../../../types/utils'
import { AnsToken } from '../../../utils/tokens/ans/types'
import { Asset } from '../asset'

export type AnsAsset<T extends string = string> = Prettify<AnsToken<T> & Asset>
