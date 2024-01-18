import { AnsId } from '../utils/tokens/ans/types'
import { getAnsTokensFromApi } from './get-ans-tokens-from-api'

export async function getAnsTokenFromApi(
  apiUrl: string,
  chainId: string,
  id: AnsId,
) {
  const result = await getAnsTokensFromApi(apiUrl, chainId, [id]).then(
    (tokens) => tokens[0],
  )
  if (!result) throw new Error(`Cannot find token with id ${id}`)
  return result
}
