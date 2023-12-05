import { Cw4GroupTypes, Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type HooksMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.hooks>,
  { hooks: unknown }
>

type HooksMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.hooks
>

type UseHooksArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildHooksMsg(...args: HooksMsgBuilderParameters): HooksMsg {
  return Cw4GroupQueryMsgBuilder.hooks(...args) as HooksMsg
}

export function useHooks({ contractAddress, client }: UseHooksArgs) {
  const { data: hooks, ...restOutput } = useQuerySmart<
    Cw4GroupTypes.HooksResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildHooksMsg(),
  })

  return { hooks, ...restOutput }
}
