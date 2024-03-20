import { AnsId } from '../utils/tokens/ans/types'
import { getAnsTokensFromApi } from './get-ans-tokens-from-api'

export type GetAnsTokenFromApiParameters = {
  apiUrl: string
  chainName: string
  id: AnsId
}

export async function getAnsTokenFromApi({
  apiUrl,
  chainName,
  id,
}: GetAnsTokenFromApiParameters) {
  const result = await getAnsTokensFromApi({
    apiUrl,
    chainName,
    ids: [id],
  }).then((tokens) => tokens[0])
  if (!result) throw new Error(`Cannot find token with id ${id}`)
  return result
}
