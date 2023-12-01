import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type InfoResponse } from '@abstract-money/core/account/manager/Manager.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type InfoMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.info>,
  { info: unknown }
>

type InfoMsgBuilderParameters = Parameters<typeof ManagerQueryMsgBuilder.info>

type UseInfoArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildInfoMsg(...args: InfoMsgBuilderParameters): InfoMsg {
  return ManagerQueryMsgBuilder.info(...args) as InfoMsg
}

export function useInfo({ contractAddress, client }: UseInfoArgs) {
  const { data: info, ...restOutput } = useQuerySmart<InfoResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildInfoMsg(),
  })

  return { info, ...restOutput }
}
