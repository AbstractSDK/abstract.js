import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type AdminResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AdminMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.admin>,
  { admin: unknown }
>

type AdminMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.admin
>

type UseAdminArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildAdminMsg(...args: AdminMsgBuilderParameters): AdminMsg {
  return Cw4GroupQueryMsgBuilder.admin(...args) as AdminMsg
}

export function useAdmin({ contractAddress, client }: UseAdminArgs) {
  const { data: admin, ...restOutput } = useQuerySmart<AdminResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildAdminMsg(),
  })

  return { admin, ...restOutput }
}
