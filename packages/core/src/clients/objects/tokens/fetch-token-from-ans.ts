import request from 'graphql-request'
import { AssetType, gql } from '../../../codegen/gql'
import { CW20Token } from './cw20-token'
import { NativeToken } from './native-token'

export async function fetchTokenFromAns(
  ansName: string,
  chain: string,
  apiURL: string,
) {
  const result = await request(
    apiURL,
    gql(
      `
  query AssetsQuery($chain: ID!, $filter: IdsFilter!) {
    ans(chain: $chain) {
      assets(filter: $filter) {
        id
        type
        address
      }
    }
  }
`,
    ),
    {
      chain,
      filter: {
        ids: [ansName],
      },
    },
  )

  const fetchedToken = result.ans.assets[0]
  if (!fetchedToken) {
    throw new Error(`Token ${ansName} not found on chain ${chain}`)
  }

  if (fetchedToken.type === AssetType.Native) {
    return {
      type: 'native',
      denom: fetchedToken.address,
    } satisfies NativeToken
  }

  if (fetchedToken.type === AssetType.Cw20) {
    return {
      type: 'cw20',
      address: fetchedToken.address,
    } satisfies CW20Token
  }
  throw new Error(`Unsupported token type: ${fetchedToken.type}`)
}
