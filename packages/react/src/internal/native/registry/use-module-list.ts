import { RegistryQueryMsgBuilder, RegistryTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ModuleListMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.moduleList>,
  { module_list: unknown }
>

type ModuleListMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.moduleList
>

type UseModuleListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ModuleListMsgBuilderParameters[0]

function buildModuleListMsg(
  ...args: ModuleListMsgBuilderParameters
): ModuleListMsg {
  return RegistryQueryMsgBuilder.moduleList(...args) as ModuleListMsg
}

export function useModuleList({
  contractAddress,
  client,
  ...restInput
}: UseModuleListArgs) {
  const { data: moduleList, ...restOutput } = useQuerySmart<
    RegistryTypes.ModulesListResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildModuleListMsg(restInput),
  })

  return { moduleList, ...restOutput }
}
