import { WithArgs } from '../types/with-args'
import { AnsId } from '../utils/tokens/ans/types'
import { getAnsTokensFromApi } from './get-ans-tokens-from-api'

export type GetAnsTokenFromApiParameters = WithArgs<{
  apiUrl: string
  chainName: string
  id: AnsId
}>

export async function getAnsTokenFromApi({
  args: { apiUrl, chainName, id },
}: GetAnsTokenFromApiParameters) {
  const result = await getAnsTokensFromApi({
    args: { apiUrl, chainName, ids: [id] },
  }).then((tokens) => tokens[0])
  if (!result) throw new Error(`Cannot find token with id ${id}`)
  return result
}
