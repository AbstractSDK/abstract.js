import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type AdminResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { useQuerySmart } from 'graz'

type AdminMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.admin>,
  { admin: unknown }
>

type AdminMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.admin
>

type UseAdminArgs = { contractAddress?: string }

function buildAdminMsg(...args: AdminMsgBuilderParameters): AdminMsg {
  return Cw4GroupQueryMsgBuilder.admin(...args) as AdminMsg
}

export function useAdmin({ contractAddress }: UseAdminArgs) {
  const { data: admin, ...restOutput } = useQuerySmart<AdminResponse, Error>({
    address: contractAddress,
    queryMsg: buildAdminMsg(),
  })

  return { admin, ...restOutput }
}
