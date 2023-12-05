import { Cw20IcsTypes, Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ChannelMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.channel>,
  { channel: unknown }
>

type ChannelMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.channel
>

type UseChannelArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ChannelMsgBuilderParameters[0]

function buildChannelMsg(...args: ChannelMsgBuilderParameters): ChannelMsg {
  return Cw20IcsQueryMsgBuilder.channel(...args) as ChannelMsg
}

export function useChannel({
  contractAddress,
  client,
  ...restInput
}: UseChannelArgs) {
  const { data: channel, ...restOutput } = useQuerySmart<
    Cw20IcsTypes.ChannelResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildChannelMsg(restInput) })

  return { channel, ...restOutput }
}
