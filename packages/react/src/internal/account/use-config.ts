import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type ConfigResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { useQuerySmart } from 'graz'

type ConfigMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.config>,
  { account_id: unknown }
>

type ConfigMsgBuilderParameters = Parameters<typeof ProxyQueryMsgBuilder.config>

type UseConfigArgs = { contractAddress?: string }

function buildConfigMsg(...args: ConfigMsgBuilderParameters): ConfigMsg {
  return ProxyQueryMsgBuilder.config(...args) as ConfigMsg
}

export function useConfig({ contractAddress }: UseConfigArgs) {
  const { data: config, ...restOutput } = useQuerySmart<ConfigResponse, Error>(
    contractAddress,
    buildConfigMsg(),
  )

  return { config, ...restOutput }
}
