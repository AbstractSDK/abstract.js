import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type ConfigResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ConfigMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.config>,
  { config: unknown }
>

type ConfigMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.config
>

type UseConfigArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return Cw20IcsQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress, client }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<ConfigResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildConfigMsg(),
  })

  return { config, ...restOutput }
}
