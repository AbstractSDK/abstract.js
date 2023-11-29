import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type ConfigResponse } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type ConfigMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.config>,
  { config: unknown }
>

type ConfigMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.config
>

type UseConfigArgs = { contractAddress?: string }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return RegistryQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<ConfigResponse, Error>({
    address: contractAddress,
    queryMsg: buildConfigMsg(),
  })

  return { config, ...restOutput }
}
