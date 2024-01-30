import { AssetType, BalancesQuery } from '../../codegen/gql/graphql'
import { Token } from './token'

export function tokenFromApi(
  token: Pick<
    BalancesQuery['accountsByIds'][number]['balances'][number],
    'type' | 'denom'
  >,
): Token {
  if (token.type === AssetType.Cw1155)
    throw new Error('CW1155 tokens are not supported')

  if (token.type === AssetType.Cw20) {
    return {
      type: 'cw20',
      address: token.denom,
    } satisfies Token
  }

  return {
    type: 'native',
    denom: token.denom,
  } satisfies Token
}
