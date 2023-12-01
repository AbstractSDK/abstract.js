import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ConfigResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
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
  const { data: config, ...restOutput } = useQuerySmart<ConfigResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildConfigMsg(),
  })

  return { config, ...restOutput }
}
