import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type ModulesListResponse } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type ModuleListMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.moduleList>,
  { module_list: unknown }
>

type ModuleListMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.moduleList
>

type UseModuleListArgs = {
  contractAddress?: string
} & ModuleListMsgBuilderParameters[0]

function buildModuleListMsg(
  ...args: ModuleListMsgBuilderParameters
): ModuleListMsg {
  return RegistryQueryMsgBuilder.moduleList(...args) as ModuleListMsg
}

export function useModuleList({
  contractAddress,
  ...restInput
}: UseModuleListArgs) {
  const { data: moduleList, ...restOutput } = useQuerySmart<
    ModulesListResponse,
    Error
  >(contractAddress, buildModuleListMsg(restInput))

  return { moduleList, ...restOutput }
}
