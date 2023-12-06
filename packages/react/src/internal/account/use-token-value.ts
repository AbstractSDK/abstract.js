import { ProxyQueryMsgBuilder, ProxyTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type TokenValueMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.tokenValue>,
  { token_value: unknown }
>

type TokenValueMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.tokenValue
>

type UseTokenValueArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & TokenValueMsgBuilderParameters[0]

function buildTokenValueMsg(
  ...args: TokenValueMsgBuilderParameters
): TokenValueMsg {
  return ProxyQueryMsgBuilder.tokenValue(...args) as TokenValueMsg
}

export function useTokenValue({
  contractAddress,
  client,
  ...restInput
}: UseTokenValueArgs) {
  const { data: tokenValue, ...restOutput } = useQuerySmart<
    ProxyTypes.TokenValueResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildTokenValueMsg(restInput),
  })

  return { tokenValue, ...restOutput }
}
