import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type TokenInfoResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { useQuerySmart } from 'graz'

type TokenInfoMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.tokenInfo>,
  { token_info: unknown }
>

type TokenInfoMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.tokenInfo
>

type UseTokenInfoArgs = { contractAddress?: string }

function buildTokenInfoMsg(
  ...args: TokenInfoMsgBuilderParameters
): TokenInfoMsg {
  return Cw20QueryMsgBuilder.tokenInfo(...args) as TokenInfoMsg
}

export function useTokenInfo({ contractAddress }: UseTokenInfoArgs) {
  const { data: tokenInfo, ...restOutput } = useQuerySmart<
    TokenInfoResponse,
    Error
  >({ address: contractAddress, queryMsg: buildTokenInfoMsg() })

  return { tokenInfo, ...restOutput }
}
