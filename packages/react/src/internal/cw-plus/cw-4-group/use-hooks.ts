import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type HooksResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { useQuerySmart } from 'graz'

type HooksMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.hooks>,
  { hooks: unknown }
>

type HooksMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.hooks
>

type UseHooksArgs = { contractAddress?: string }

function buildHooksMsg(...args: HooksMsgBuilderParameters): HooksMsg {
  return Cw4GroupQueryMsgBuilder.hooks(...args) as HooksMsg
}

export function useHooks({ contractAddress }: UseHooksArgs) {
  const { data: hooks, ...restOutput } = useQuerySmart<HooksResponse, Error>(
    contractAddress,
    buildHooksMsg(),
  )

  return { hooks, ...restOutput }
}
