import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type ContractListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ContractListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.contractList>,
  { contract_list: unknown }
>

type ContractListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.contractList
>

type UseContractListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ContractListMsgBuilderParameters[0]

function buildContractListMsg(
  ...args: ContractListMsgBuilderParameters
): ContractListMsg {
  return AnsHostQueryMsgBuilder.contractList(...args) as ContractListMsg
}

export function useContractList({
  contractAddress,
  client,
  ...restInput
}: UseContractListArgs) {
  const { data: contractList, ...restOutput } = useQuerySmart<
    ContractListResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildContractListMsg(restInput),
  })

  return { contractList, ...restOutput }
}
