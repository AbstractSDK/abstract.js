import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type ModulesResponse } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type ModulesMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.modules>,
  { modules: unknown }
>

type ModulesMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.modules
>

type UseModulesArgs = {
  contractAddress?: string
} & ModulesMsgBuilderParameters[0]

function buildModulesMsg(...args: ModulesMsgBuilderParameters): ModulesMsg {
  return RegistryQueryMsgBuilder.modules(...args) as ModulesMsg
}

export function useModules({ contractAddress, ...restInput }: UseModulesArgs) {
  const { data: modules, ...restOutput } = useQuerySmart<
    ModulesResponse,
    Error
  >({ address: contractAddress, queryMsg: buildModulesMsg(restInput) })

  return { modules, ...restOutput }
}
