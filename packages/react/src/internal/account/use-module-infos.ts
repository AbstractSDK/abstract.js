import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type ModuleInfosResponse } from '@abstract-money/core/account/manager/Manager.types'
import { useQuerySmart } from 'graz'

type ModuleInfosMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.moduleInfos>,
  { module_infos: unknown }
>

type ModuleInfosMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.moduleInfos
>

type UseModuleInfosArgs = {
  contractAddress?: string
} & ModuleInfosMsgBuilderParameters[0]

function buildModuleInfosMsg(
  ...args: ModuleInfosMsgBuilderParameters
): ModuleInfosMsg {
  return ManagerQueryMsgBuilder.moduleInfos(...args) as ModuleInfosMsg
}

export function useModuleInfos({
  contractAddress,
  ...restInput
}: UseModuleInfosArgs) {
  const { data: moduleInfos, ...restOutput } = useQuerySmart<
    ModuleInfosResponse,
    Error
  >(contractAddress, buildModuleInfosMsg(restInput))

  return { moduleInfos, ...restOutput }
}
