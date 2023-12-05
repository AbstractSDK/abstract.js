import { Cw20IcsTypes, Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AdminMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.admin>,
  { admin: unknown }
>

type AdminMsgBuilderParameters = Parameters<typeof Cw20IcsQueryMsgBuilder.admin>

type UseAdminArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildAdminMsg(...args: AdminMsgBuilderParameters): AdminMsg {
  return Cw20IcsQueryMsgBuilder.admin(...args) as AdminMsg
}

export function useAdmin({ contractAddress, client }: UseAdminArgs) {
  const { data: admin, ...restOutput } = useQuerySmart<
    Cw20IcsTypes.AdminResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAdminMsg(),
  })

  return { admin, ...restOutput }
}
