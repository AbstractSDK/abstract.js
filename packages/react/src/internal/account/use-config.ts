import { ProxyQueryMsgBuilder, ProxyTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type ConfigMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.config>,
  { account_id: unknown }
>

type ConfigMsgBuilderParameters = Parameters<typeof ProxyQueryMsgBuilder.config>

type UseConfigArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return ProxyQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress, client }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<
    ProxyTypes.ConfigResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildConfigMsg(),
  })

  return { config, ...restOutput }
}
