import { AnsHostTypes, AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ChannelsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.channels>,
  { channels: unknown }
>

type ChannelsMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.channels
>

type UseChannelsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ChannelsMsgBuilderParameters[0]

function buildChannelsMsg(...args: ChannelsMsgBuilderParameters): ChannelsMsg {
  return AnsHostQueryMsgBuilder.channels(...args) as ChannelsMsg
}

export function useChannels({
  contractAddress,
  client,
  ...restInput
}: UseChannelsArgs) {
  const { data: channels, ...restOutput } = useQuerySmart<
    AnsHostTypes.ChannelsResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildChannelsMsg(restInput) })

  return { channels, ...restOutput }
}
