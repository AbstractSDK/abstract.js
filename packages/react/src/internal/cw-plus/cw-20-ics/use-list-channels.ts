import { Cw20IcsTypes, Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ListChannelsMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.listChannels>,
  { list_channels: unknown }
>

type ListChannelsMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.listChannels
>

type UseListChannelsArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildListChannelsMsg(
  ...args: ListChannelsMsgBuilderParameters
): ListChannelsMsg {
  return Cw20IcsQueryMsgBuilder.listChannels(...args) as ListChannelsMsg
}

export function useListChannels({
  contractAddress,
  client,
}: UseListChannelsArgs) {
  const { data: channels, ...restOutput } = useQuerySmart<
    Cw20IcsTypes.ListChannelsResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildListChannelsMsg() })

  return { channels, ...restOutput }
}
