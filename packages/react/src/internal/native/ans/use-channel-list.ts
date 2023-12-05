import { AnsHostTypes, AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ChannelListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.channelList>,
  { channel_list: unknown }
>

type ChannelListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.channelList
>

type UseChannelListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ChannelListMsgBuilderParameters[0]

function buildChannelListMsg(
  ...args: ChannelListMsgBuilderParameters
): ChannelListMsg {
  return AnsHostQueryMsgBuilder.channelList(...args) as ChannelListMsg
}

export function useChannelList({
  contractAddress,
  client,
  ...restInput
}: UseChannelListArgs) {
  const { data: channelList, ...restOutput } = useQuerySmart<
    AnsHostTypes.ChannelListResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildChannelListMsg(restInput),
  })

  return { channelList, ...restOutput }
}
