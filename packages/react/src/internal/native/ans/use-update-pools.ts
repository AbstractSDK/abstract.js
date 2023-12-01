import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdatePoolsMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updatePools>,
  { update_pools: unknown }
>

type UpdatePoolsMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updatePools
>[0]

type UseUpdatePoolsArgs = Parameters<
  typeof useExecuteContract<UpdatePoolsMsg>
>[0]

function buildUpdatePoolsMsg(
  args: UpdatePoolsMsgBuilderParameters,
): UpdatePoolsMsg {
  return AnsHostExecuteMsgBuilder.updatePools(args) as UpdatePoolsMsg
}

export function useUpdatePools({
  contractAddress,
  ...restInput
}: UseUpdatePoolsArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdatePoolsMsg>({
      contractAddress,
      ...restInput,
    })

  const updatePools = React.useCallback(
    function updatePools({
      senderAddress,
      signingClient,
      ...args
    }: UpdatePoolsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdatePoolsMsg(args),
      })
    },
    [executeContract],
  )

  const updatePoolsAsync = React.useCallback(
    function updatePoolsAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdatePoolsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdatePoolsMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updatePools, updatePoolsAsync, ...restOutput }
}
