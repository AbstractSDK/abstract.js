import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type AssetBaseForAddr } from '@abstract-money/core/account/proxy/Proxy.types'
import { useQuerySmart } from 'graz'

type TotalValueMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.totalValue>,
  { total_value: unknown }
>

type TotalValueMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.totalValue
>

type UseTotalValueArgs = { contractAddress?: string }

function buildTotalValueMsg(
  ...args: TotalValueMsgBuilderParameters
): TotalValueMsg {
  return ProxyQueryMsgBuilder.totalValue(...args) as TotalValueMsg
}

export function useTotalValue({ contractAddress }: UseTotalValueArgs) {
  const { data: totalValue, ...restOutput } = useQuerySmart<
    AssetBaseForAddr,
    Error
  >({ address: contractAddress, queryMsg: buildTotalValueMsg() })

  return { totalValue, ...restOutput }
}
