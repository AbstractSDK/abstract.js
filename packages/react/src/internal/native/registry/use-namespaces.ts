import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type NamespacesResponse } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type NamespacesMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.namespaces>,
  { namespaces: unknown }
>

type NamespacesMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.namespaces
>

type UseNamespacesArgs = {
  contractAddress?: string
} & NamespacesMsgBuilderParameters[0]

function buildNamespacesMsg(
  ...args: NamespacesMsgBuilderParameters
): NamespacesMsg {
  return RegistryQueryMsgBuilder.namespaces(...args) as NamespacesMsg
}

export function useNamespaces({
  contractAddress,
  ...restInput
}: UseNamespacesArgs) {
  const { data: namespaces, ...restOutput } = useQuerySmart<
    NamespacesResponse,
    Error
  >(contractAddress, buildNamespacesMsg(restInput))

  return { namespaces, ...restOutput }
}
