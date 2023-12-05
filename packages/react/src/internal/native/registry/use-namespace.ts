import { RegistryTypes, RegistryQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type NamespaceMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.namespace>,
  { namespace: unknown }
>

type NamespaceMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.namespace
>

type UseNamespaceArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & NamespaceMsgBuilderParameters[0]

function buildNamespaceMsg(
  ...args: NamespaceMsgBuilderParameters
): NamespaceMsg {
  return RegistryQueryMsgBuilder.namespace(...args) as NamespaceMsg
}

export function useNamespace({
  contractAddress,
  client,
  ...restInput
}: UseNamespaceArgs) {
  const { data: namespace, ...restOutput } = useQuerySmart<
    RegistryTypes.NamespaceResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildNamespaceMsg(restInput),
  })

  return { namespace, ...restOutput }
}
