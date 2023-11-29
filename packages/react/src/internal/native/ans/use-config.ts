import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ConfigResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type ConfigMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.config>,
  { config: unknown }
>

type ConfigMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.config
>

type UseConfigArgs = { contractAddress?: string }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return AnsHostQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<ConfigResponse, Error>({
    address: contractAddress,
    queryMsg: buildConfigMsg(),
  })

  return { config, ...restOutput }
}
