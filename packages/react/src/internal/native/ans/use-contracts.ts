import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ContractsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ContractsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.contracts>,
  { contracts: unknown }
>

type ContractsMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.contracts
>

type UseContractsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ContractsMsgBuilderParameters[0]

function buildContractsMsg(
  ...args: ContractsMsgBuilderParameters
): ContractsMsg {
  return AnsHostQueryMsgBuilder.contracts(...args) as ContractsMsg
}

export function useContracts({
  contractAddress,
  client,
  ...restInput
}: UseContractsArgs) {
  const { data: contracts, ...restOutput } = useQuerySmart<
    ContractsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildContractsMsg(restInput),
  })

  return { contracts, ...restOutput }
}
