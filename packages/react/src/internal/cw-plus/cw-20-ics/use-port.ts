import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type PortResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { useQuerySmart } from 'graz'

type PortMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.port>,
  { all_accounts: unknown }
>

type PortMsgBuilderParameters = Parameters<typeof Cw20IcsQueryMsgBuilder.port>

type UsePortArgs = { contractAddress?: string }

function buildPortMsg(...args: PortMsgBuilderParameters): PortMsg {
  return Cw20IcsQueryMsgBuilder.port(...args) as PortMsg
}

export function usePort({ contractAddress }: UsePortArgs) {
  const { data: accounts, ...restOutput } = useQuerySmart<PortResponse, Error>({
    address: contractAddress,
    queryMsg: buildPortMsg(),
  })

  return { accounts, ...restOutput }
}
