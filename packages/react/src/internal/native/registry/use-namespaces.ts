import { RegistryQueryMsgBuilder, RegistryTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type NamespacesMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.namespaces>,
  { namespaces: unknown }
>

type NamespacesMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.namespaces
>

type UseNamespacesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & NamespacesMsgBuilderParameters[0]

function buildNamespacesMsg(
  ...args: NamespacesMsgBuilderParameters
): NamespacesMsg {
  return RegistryQueryMsgBuilder.namespaces(...args) as NamespacesMsg
}

export function useNamespaces({
  contractAddress,
  client,
  ...restInput
}: UseNamespacesArgs) {
  const { data: namespaces, ...restOutput } = useQuerySmart<
    RegistryTypes.NamespacesResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildNamespacesMsg(restInput),
  })

  return { namespaces, ...restOutput }
}
