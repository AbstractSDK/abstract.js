import { Cw20IcsTypes, Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type PortMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.port>,
  { all_accounts: unknown }
>

type PortMsgBuilderParameters = Parameters<typeof Cw20IcsQueryMsgBuilder.port>

type UsePortArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildPortMsg(...args: PortMsgBuilderParameters): PortMsg {
  return Cw20IcsQueryMsgBuilder.port(...args) as PortMsg
}

export function usePort({ contractAddress, client }: UsePortArgs) {
  const { data: accounts, ...restOutput } = useQuerySmart<
    Cw20IcsTypes.PortResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildPortMsg(),
  })

  return { accounts, ...restOutput }
}
