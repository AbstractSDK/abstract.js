import { ManagerQueryMsgBuilder, ManagerTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type ModuleInfosMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.moduleInfos>,
  { module_infos: unknown }
>

type ModuleInfosMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.moduleInfos
>

type UseModuleInfosArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ModuleInfosMsgBuilderParameters[0]

function buildModuleInfosMsg(
  ...args: ModuleInfosMsgBuilderParameters
): ModuleInfosMsg {
  return ManagerQueryMsgBuilder.moduleInfos(...args) as ModuleInfosMsg
}

export function useModuleInfos({
  contractAddress,
  client,
  ...restInput
}: UseModuleInfosArgs) {
  const { data: moduleInfos, ...restOutput } = useQuerySmart<
    ManagerTypes.ModuleInfosResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildModuleInfosMsg(restInput),
  })

  return { moduleInfos, ...restOutput }
}
