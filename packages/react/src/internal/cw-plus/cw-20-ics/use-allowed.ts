import { Cw20IcsTypes, Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AllowedMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.allowed>,
  { allowed: unknown }
>

type AllowedMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.allowed
>

type UseAllowedArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AllowedMsgBuilderParameters[0]

function buildAllowedMsg(...args: AllowedMsgBuilderParameters): AllowedMsg {
  return Cw20IcsQueryMsgBuilder.allowed(...args) as AllowedMsg
}

export function useAllowed({
  contractAddress,
  client,
  ...restInput
}: UseAllowedArgs) {
  const { data: allowed, ...restOutput } = useQuerySmart<
    Cw20IcsTypes.AllowedResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildAllowedMsg(restInput) })

  return { allowed, ...restOutput }
}
