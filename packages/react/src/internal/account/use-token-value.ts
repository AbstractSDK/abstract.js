import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type TokenValueResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { useQuerySmart } from 'graz'

type TokenValueMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.tokenValue>,
  { token_value: unknown }
>

type TokenValueMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.tokenValue
>

type UseTokenValueArgs = {
  contractAddress?: string
} & TokenValueMsgBuilderParameters[0]

function buildTokenValueMsg(
  ...args: TokenValueMsgBuilderParameters
): TokenValueMsg {
  return ProxyQueryMsgBuilder.tokenValue(...args) as TokenValueMsg
}

export function useTokenValue({
  contractAddress,
  ...restInput
}: UseTokenValueArgs) {
  const { data: tokenValue, ...restOutput } = useQuerySmart<
    TokenValueResponse,
    Error
  >({ address: contractAddress, queryMsg: buildTokenValueMsg(restInput) })

  return { tokenValue, ...restOutput }
}
