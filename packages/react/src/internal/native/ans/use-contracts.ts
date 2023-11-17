import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ContractsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type ContractsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.contracts>,
  { contracts: unknown }
>

type ContractsMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.contracts
>

type UseContractsArgs = {
  contractAddress?: string
} & ContractsMsgBuilderParameters[0]

function buildContractsMsg(
  ...args: ContractsMsgBuilderParameters
): ContractsMsg {
  return AnsHostQueryMsgBuilder.contracts(...args) as ContractsMsg
}

export function useContracts({
  contractAddress,
  ...restInput
}: UseContractsArgs) {
  const { data: contracts, ...restOutput } = useQuerySmart<
    ContractsResponse,
    Error
  >(contractAddress, buildContractsMsg(restInput))

  return { contracts, ...restOutput }
}
