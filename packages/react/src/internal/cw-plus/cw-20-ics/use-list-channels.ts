import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type ListChannelsResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
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
    ListChannelsResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildListChannelsMsg() })

  return { channels, ...restOutput }
}
