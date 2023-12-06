import { RegistryQueryMsgBuilder, RegistryTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ConfigMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.config>,
  { config: unknown }
>

type ConfigMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.config
>

type UseConfigArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return RegistryQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress, client }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<
    RegistryTypes.ConfigResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildConfigMsg(),
  })

  return { config, ...restOutput }
}
