import { RegistryTypes, RegistryQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ModulesMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.modules>,
  { modules: unknown }
>

type ModulesMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.modules
>

type UseModulesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ModulesMsgBuilderParameters[0]

function buildModulesMsg(...args: ModulesMsgBuilderParameters): ModulesMsg {
  return RegistryQueryMsgBuilder.modules(...args) as ModulesMsg
}

export function useModules({
  contractAddress,
  client,
  ...restInput
}: UseModulesArgs) {
  const { data: modules, ...restOutput } = useQuerySmart<
    RegistryTypes.ModulesResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildModulesMsg(restInput) })

  return { modules, ...restOutput }
}
