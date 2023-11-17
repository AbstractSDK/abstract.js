import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ChannelsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type ChannelsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.channels>,
  { channels: unknown }
>

type ChannelsMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.channels
>

type UseChannelsArgs = {
  contractAddress?: string
} & ChannelsMsgBuilderParameters[0]

function buildChannelsMsg(...args: ChannelsMsgBuilderParameters): ChannelsMsg {
  return AnsHostQueryMsgBuilder.channels(...args) as ChannelsMsg
}

export function useChannels({
  contractAddress,
  ...restInput
}: UseChannelsArgs) {
  const { data: channels, ...restOutput } = useQuerySmart<
    ChannelsResponse,
    Error
  >(contractAddress, buildChannelsMsg(restInput))

  return { channels, ...restOutput }
}
