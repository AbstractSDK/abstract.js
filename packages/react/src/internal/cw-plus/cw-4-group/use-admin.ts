import { Cw4GroupQueryMsgBuilder, Cw4GroupTypes } from '@abstract-money/core'
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
  const { data: admin, ...restOutput } = useQuerySmart<
    Cw4GroupTypes.AdminResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAdminMsg(),
  })

  return { admin, ...restOutput }
}
