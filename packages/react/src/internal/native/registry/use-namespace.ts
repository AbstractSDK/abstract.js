import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type NamespaceResponse } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type NamespaceMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.namespace>,
  { namespace: unknown }
>

type NamespaceMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.namespace
>

type UseNamespaceArgs = {
  contractAddress?: string
} & NamespaceMsgBuilderParameters[0]

function buildNamespaceMsg(
  ...args: NamespaceMsgBuilderParameters
): NamespaceMsg {
  return RegistryQueryMsgBuilder.namespace(...args) as NamespaceMsg
}

export function useNamespace({
  contractAddress,
  ...restInput
}: UseNamespaceArgs) {
  const { data: namespace, ...restOutput } = useQuerySmart<
    NamespaceResponse,
    Error
  >({ address: contractAddress, queryMsg: buildNamespaceMsg(restInput) })

  return { namespace, ...restOutput }
}
