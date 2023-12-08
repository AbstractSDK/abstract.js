import { AnsHostQueryMsgBuilder, AnsHostTypes } from '@abstract-money/core'
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
    AnsHostTypes.RegisteredDexesResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildRegisteredDexesMsg() })

  return { registeredDexes, ...restOutput }
}
