import { ManagerTypes, ManagerQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type ModuleAddressesMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.moduleAddresses>,
  { module_addresses: unknown }
>

type ModuleAddressesMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.moduleAddresses
>

type UseModuleAddressesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ModuleAddressesMsgBuilderParameters[0]

function buildModuleAddressesMsg(
  ...args: ModuleAddressesMsgBuilderParameters
): ModuleAddressesMsg {
  return ManagerQueryMsgBuilder.moduleAddresses(...args) as ModuleAddressesMsg
}

export function useModuleAddresses({
  contractAddress,
  client,
  ...restInput
}: UseModuleAddressesArgs) {
  const { data: moduleAddresses, ...restOutput } = useQuerySmart<
    ManagerTypes.ModuleAddressesResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildModuleAddressesMsg(restInput),
  })

  return { moduleAddresses, ...restOutput }
}
