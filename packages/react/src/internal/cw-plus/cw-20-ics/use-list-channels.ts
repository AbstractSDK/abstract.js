import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type ListChannelsResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { useQuerySmart } from 'graz'

type ListChannelsMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.listChannels>,
  { list_channels: unknown }
>

type ListChannelsMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.listChannels
>

type UseListChannelsArgs = { contractAddress?: string }

function buildListChannelsMsg(
  ...args: ListChannelsMsgBuilderParameters
): ListChannelsMsg {
  return Cw20IcsQueryMsgBuilder.listChannels(...args) as ListChannelsMsg
}

export function useListChannels({ contractAddress }: UseListChannelsArgs) {
  const { data: channels, ...restOutput } = useQuerySmart<
    ListChannelsResponse,
    Error
  >(contractAddress, buildListChannelsMsg())

  return { channels, ...restOutput }
}
