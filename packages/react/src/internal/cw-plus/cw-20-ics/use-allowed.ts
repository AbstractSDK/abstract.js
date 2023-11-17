import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type AllowedResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { useQuerySmart } from 'graz'

type AllowedMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.allowed>,
  { allowed: unknown }
>

type AllowedMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.allowed
>

type UseAllowedArgs = {
  contractAddress?: string
} & AllowedMsgBuilderParameters[0]

function buildAllowedMsg(...args: AllowedMsgBuilderParameters): AllowedMsg {
  return Cw20IcsQueryMsgBuilder.allowed(...args) as AllowedMsg
}

export function useAllowed({ contractAddress, ...restInput }: UseAllowedArgs) {
  const { data: allowed, ...restOutput } = useQuerySmart<
    AllowedResponse,
    Error
  >(contractAddress, buildAllowedMsg(restInput))

  return { allowed, ...restOutput }
}
