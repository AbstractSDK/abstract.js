import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ChannelListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type ChannelListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.channelList>,
  { channel_list: unknown }
>

type ChannelListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.channelList
>

type UseChannelListArgs = {
  contractAddress?: string
} & ChannelListMsgBuilderParameters[0]

function buildChannelListMsg(
  ...args: ChannelListMsgBuilderParameters
): ChannelListMsg {
  return AnsHostQueryMsgBuilder.channelList(...args) as ChannelListMsg
}

export function useChannelList({
  contractAddress,
  ...restInput
}: UseChannelListArgs) {
  const { data: channelList, ...restOutput } = useQuerySmart<
    ChannelListResponse,
    Error
  >(contractAddress, buildChannelListMsg(restInput))

  return { channelList, ...restOutput }
}
