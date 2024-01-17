import { AssetQueryQuery, AssetType } from '../../../codegen/gql/graphql'
import { AnsToken } from './types'

export function ansTokenFromApi(
  token: AssetQueryQuery['ans']['assets'][number],
) {
  if (token.type === AssetType.Cw1155)
    throw new Error('CW1155 tokens are not supported')

  if (token.type === AssetType.Cw20) {
    return {
      type: 'cw20',
      address: token.address,
      id: token.id,
    } satisfies AnsToken
  }

  return {
    type: 'native',
    denom: token.address,
    id: token.id,
  } satisfies AnsToken
}
