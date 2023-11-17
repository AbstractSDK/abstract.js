import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type NamespaceResponse } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type NamespaceListMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.namespaceList>,
  { namespace_list: unknown }
>

type NamespaceListMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.namespaceList
>

type UseNamespaceListArgs = {
  contractAddress?: string
} & NamespaceListMsgBuilderParameters[0]

function buildNamespaceListMsg(
  ...args: NamespaceListMsgBuilderParameters
): NamespaceListMsg {
  return RegistryQueryMsgBuilder.namespaceList(...args) as NamespaceListMsg
}

export function useNamespaceList({
  contractAddress,
  ...restInput
}: UseNamespaceListArgs) {
  const { data: namespaceList, ...restOutput } = useQuerySmart<
    NamespaceResponse,
    Error
  >(contractAddress, buildNamespaceListMsg(restInput))

  return { namespaceList, ...restOutput }
}
