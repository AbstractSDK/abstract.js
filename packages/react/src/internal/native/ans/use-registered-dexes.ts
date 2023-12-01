import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type RegisteredDexesResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type RegisteredDexesMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.registeredDexes>,
  { registered_dexes: unknown }
>

type RegisteredDexesMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.registeredDexes
>

type UseRegisteredDexesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
}

function buildRegisteredDexesMsg(
  ...args: RegisteredDexesMsgBuilderParameters
): RegisteredDexesMsg {
  return AnsHostQueryMsgBuilder.registeredDexes(...args) as RegisteredDexesMsg
}

export function useRegisteredDexes({
  contractAddress,
  client,
}: UseRegisteredDexesArgs) {
  const { data: registeredDexes, ...restOutput } = useQuerySmart<
    RegisteredDexesResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildRegisteredDexesMsg() })

  return { registeredDexes, ...restOutput }
}
