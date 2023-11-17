import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type ModuleAddressesResponse } from '@abstract-money/core/account/manager/Manager.types'
import { useQuerySmart } from 'graz'

type ModuleAddressesMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.moduleAddresses>,
  { module_addresses: unknown }
>

type ModuleAddressesMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.moduleAddresses
>

type UseModuleAddressesArgs = {
  contractAddress?: string
} & ModuleAddressesMsgBuilderParameters[0]

function buildModuleAddressesMsg(
  ...args: ModuleAddressesMsgBuilderParameters
): ModuleAddressesMsg {
  return ManagerQueryMsgBuilder.moduleAddresses(...args) as ModuleAddressesMsg
}

export function useModuleAddresses({
  contractAddress,
  ...restInput
}: UseModuleAddressesArgs) {
  const { data: moduleAddresses, ...restOutput } = useQuerySmart<
    ModuleAddressesResponse,
    Error
  >(contractAddress, buildModuleAddressesMsg(restInput))

  return { moduleAddresses, ...restOutput }
}
