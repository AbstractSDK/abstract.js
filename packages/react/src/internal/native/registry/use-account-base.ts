import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type AccountBaseResponse } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type AccountBaseMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.accountBase>,
  { account_base: unknown }
>

type AccountBaseMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.accountBase
>

type UseAccountBaseArgs = {
  contractAddress?: string
} & AccountBaseMsgBuilderParameters[0]

function buildAccountBaseMsg(
  ...args: AccountBaseMsgBuilderParameters
): AccountBaseMsg {
  return RegistryQueryMsgBuilder.accountBase(...args) as AccountBaseMsg
}

export function useAccountBase({
  contractAddress,
  ...restInput
}: UseAccountBaseArgs) {
  const { data: accountBase, ...restOutput } = useQuerySmart<
    AccountBaseResponse,
    Error
  >(contractAddress, buildAccountBaseMsg(restInput))

  return { accountBase, ...restOutput }
}
