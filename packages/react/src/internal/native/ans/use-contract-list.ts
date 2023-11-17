import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ContractListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type ContractListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.contractList>,
  { contract_list: unknown }
>

type ContractListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.contractList
>

type UseContractListArgs = {
  contractAddress?: string
} & ContractListMsgBuilderParameters[0]

function buildContractListMsg(
  ...args: ContractListMsgBuilderParameters
): ContractListMsg {
  return AnsHostQueryMsgBuilder.contractList(...args) as ContractListMsg
}

export function useContractList({
  contractAddress,
  ...restInput
}: UseContractListArgs) {
  const { data: contractList, ...restOutput } = useQuerySmart<
    ContractListResponse,
    Error
  >(contractAddress, buildContractListMsg(restInput))

  return { contractList, ...restOutput }
}
