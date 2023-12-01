import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type AssetBaseForAddr } from '@abstract-money/core/account/proxy/Proxy.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type TotalValueMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.totalValue>,
  { total_value: unknown }
>

type TotalValueMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.totalValue
>

type UseTotalValueArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildTotalValueMsg(
  ...args: TotalValueMsgBuilderParameters
): TotalValueMsg {
  return ProxyQueryMsgBuilder.totalValue(...args) as TotalValueMsg
}

export function useTotalValue({ contractAddress, client }: UseTotalValueArgs) {
  const { data: totalValue, ...restOutput } = useQuerySmart<
    AssetBaseForAddr,
    Error
  >({ address: contractAddress, client, queryMsg: buildTotalValueMsg() })

  return { totalValue, ...restOutput }
}
