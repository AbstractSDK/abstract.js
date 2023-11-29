import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdatePoolsMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updatePools>,
  { update_pools: unknown }
>

type UpdatePoolsMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updatePools
>

type UseUpdatePoolsArgs = Parameters<
  typeof useExecuteContract<UpdatePoolsMsg>
>[0]

function buildUpdatePoolsMsg(
  ...args: UpdatePoolsMsgBuilderParameters
): UpdatePoolsMsg {
  return AnsHostExecuteMsgBuilder.updatePools(...args) as UpdatePoolsMsg
}

export function useUpdatePools({
  contractAddress,
  ...restInput
}: UseUpdatePoolsArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdatePoolsMsg>({
      contractAddress,
      ...restInput,
    })

  const updatePools = React.useCallback(
    function updatePools(...args: UpdatePoolsMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdatePoolsMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updatePoolsAsync = React.useCallback(
    function updatePoolsAsync(...args: UpdatePoolsMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdatePoolsMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updatePools, updatePoolsAsync, ...restOutput }
}
