import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type ModuleVersionsResponse } from '@abstract-money/core/account/manager/Manager.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type ModuleVersionsMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.moduleVersions>,
  { module_versions: unknown }
>

type ModuleVersionsMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.moduleVersions
>

type UseModuleVersionsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ModuleVersionsMsgBuilderParameters[0]

function buildModuleVersionsMsg(
  ...args: ModuleVersionsMsgBuilderParameters
): ModuleVersionsMsg {
  return ManagerQueryMsgBuilder.moduleVersions(...args) as ModuleVersionsMsg
}

export function useModuleVersions({
  contractAddress,
  client,
  ...restInput
}: UseModuleVersionsArgs) {
  const { data: moduleVersions, ...restOutput } = useQuerySmart<
    ModuleVersionsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildModuleVersionsMsg(restInput),
  })

  return { moduleVersions, ...restOutput }
}
