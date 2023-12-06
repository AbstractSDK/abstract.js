import { RegistryQueryMsgBuilder, RegistryTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type NamespaceListMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.namespaceList>,
  { namespace_list: unknown }
>

type NamespaceListMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.namespaceList
>

type UseNamespaceListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & NamespaceListMsgBuilderParameters[0]

function buildNamespaceListMsg(
  ...args: NamespaceListMsgBuilderParameters
): NamespaceListMsg {
  return RegistryQueryMsgBuilder.namespaceList(...args) as NamespaceListMsg
}

export function useNamespaceList({
  contractAddress,
  client,
  ...restInput
}: UseNamespaceListArgs) {
  const { data: namespaceList, ...restOutput } = useQuerySmart<
    RegistryTypes.NamespaceResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildNamespaceListMsg(restInput),
  })

  return { namespaceList, ...restOutput }
}
