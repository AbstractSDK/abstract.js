import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type RegisteredDexesResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type RegisteredDexesMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.registeredDexes>,
  { registered_dexes: unknown }
>

type RegisteredDexesMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.registeredDexes
>

type UseRegisteredDexesArgs = { contractAddress?: string }

function buildRegisteredDexesMsg(
  ...args: RegisteredDexesMsgBuilderParameters
): RegisteredDexesMsg {
  return AnsHostQueryMsgBuilder.registeredDexes(...args) as RegisteredDexesMsg
}

export function useRegisteredDexes({
  contractAddress,
}: UseRegisteredDexesArgs) {
  const { data: registeredDexes, ...restOutput } = useQuerySmart<
    RegisteredDexesResponse,
    Error
  >({ address: contractAddress, queryMsg: buildRegisteredDexesMsg() })

  return { registeredDexes, ...restOutput }
}
