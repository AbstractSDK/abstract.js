import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type ModuleVersionsResponse } from '@abstract-money/core/account/manager/Manager.types'
import { useQuerySmart } from 'graz'

type ModuleVersionsMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.moduleVersions>,
  { module_versions: unknown }
>

type ModuleVersionsMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.moduleVersions
>

type UseModuleVersionsArgs = {
  contractAddress?: string
} & ModuleVersionsMsgBuilderParameters[0]

function buildModuleVersionsMsg(
  ...args: ModuleVersionsMsgBuilderParameters
): ModuleVersionsMsg {
  return ManagerQueryMsgBuilder.moduleVersions(...args) as ModuleVersionsMsg
}

export function useModuleVersions({
  contractAddress,
  ...restInput
}: UseModuleVersionsArgs) {
  const { data: moduleVersions, ...restOutput } = useQuerySmart<
    ModuleVersionsResponse,
    Error
  >(contractAddress, buildModuleVersionsMsg(restInput))

  return { moduleVersions, ...restOutput }
}
