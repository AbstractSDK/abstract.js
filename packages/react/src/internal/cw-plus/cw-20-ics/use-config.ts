import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type ConfigResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { useQuerySmart } from 'graz'

type ConfigMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.config>,
  { config: unknown }
>

type ConfigMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.config
>

type UseConfigArgs = { contractAddress?: string }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return Cw20IcsQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<ConfigResponse, Error>(
    contractAddress,
    buildConfigMsg(),
  )

  return { config, ...restOutput }
}
