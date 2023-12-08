import { AnsHostQueryMsgBuilder, AnsHostTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ConfigMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.config>,
  { config: unknown }
>

type ConfigMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.config
>

type UseConfigArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return AnsHostQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress, client }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<
    AnsHostTypes.ConfigResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildConfigMsg(),
  })

  return { config, ...restOutput }
}
