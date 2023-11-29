import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type InfoResponse } from '@abstract-money/core/account/manager/Manager.types'
import { useQuerySmart } from 'graz'

type InfoMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.info>,
  { info: unknown }
>

type InfoMsgBuilderParameters = Parameters<typeof ManagerQueryMsgBuilder.info>

type UseInfoArgs = { contractAddress?: string }

function buildInfoMsg(...args: InfoMsgBuilderParameters): InfoMsg {
  return ManagerQueryMsgBuilder.info(...args) as InfoMsg
}

export function useInfo({ contractAddress }: UseInfoArgs) {
  const { data: info, ...restOutput } = useQuerySmart<InfoResponse, Error>({
    address: contractAddress,
    queryMsg: buildInfoMsg(),
  })

  return { info, ...restOutput }
}
