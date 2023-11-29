import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type ChannelResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { useQuerySmart } from 'graz'

type ChannelMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.channel>,
  { channel: unknown }
>

type ChannelMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.channel
>

type UseChannelArgs = {
  contractAddress?: string
} & ChannelMsgBuilderParameters[0]

function buildChannelMsg(...args: ChannelMsgBuilderParameters): ChannelMsg {
  return Cw20IcsQueryMsgBuilder.channel(...args) as ChannelMsg
}

export function useChannel({ contractAddress, ...restInput }: UseChannelArgs) {
  const { data: channel, ...restOutput } = useQuerySmart<
    ChannelResponse,
    Error
  >({ address: contractAddress, queryMsg: buildChannelMsg(restInput) })

  return { channel, ...restOutput }
}
