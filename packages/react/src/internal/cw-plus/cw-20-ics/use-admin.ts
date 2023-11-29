import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type AdminResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { useQuerySmart } from 'graz'

type AdminMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.admin>,
  { admin: unknown }
>

type AdminMsgBuilderParameters = Parameters<typeof Cw20IcsQueryMsgBuilder.admin>

type UseAdminArgs = { contractAddress?: string }

function buildAdminMsg(...args: AdminMsgBuilderParameters): AdminMsg {
  return Cw20IcsQueryMsgBuilder.admin(...args) as AdminMsg
}

export function useAdmin({ contractAddress }: UseAdminArgs) {
  const { data: admin, ...restOutput } = useQuerySmart<AdminResponse, Error>({
    address: contractAddress,
    queryMsg: buildAdminMsg(),
  })

  return { admin, ...restOutput }
}
