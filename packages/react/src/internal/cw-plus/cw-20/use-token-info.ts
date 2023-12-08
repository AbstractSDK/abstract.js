import { Cw20QueryMsgBuilder, Cw20Types } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type TokenInfoMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.tokenInfo>,
  { token_info: unknown }
>

type TokenInfoMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.tokenInfo
>

type UseTokenInfoArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildTokenInfoMsg(
  ...args: TokenInfoMsgBuilderParameters
): TokenInfoMsg {
  return Cw20QueryMsgBuilder.tokenInfo(...args) as TokenInfoMsg
}

export function useTokenInfo({ contractAddress, client }: UseTokenInfoArgs) {
  const { data: tokenInfo, ...restOutput } = useQuerySmart<
    Cw20Types.TokenInfoResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildTokenInfoMsg() })

  return { tokenInfo, ...restOutput }
}
