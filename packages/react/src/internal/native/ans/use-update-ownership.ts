import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateOwnerhsipMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateOwnerhsip>,
  { update_ownerhsip: unknown }
>

type UpdateOwnerhsipMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateOwnerhsip
>

type UseUpdateOwnerhsipArgs = Parameters<
  typeof useExecuteContract<UpdateOwnerhsipMsg>
>[0]

function buildUpdateOwnerhsipMsg(
  ...args: UpdateOwnerhsipMsgBuilderParameters
): UpdateOwnerhsipMsg {
  return AnsHostExecuteMsgBuilder.updateOwnerhsip(...args) as UpdateOwnerhsipMsg
}

export function useUpdateOwnerhsip({
  contractAddress,
  ...restInput
}: UseUpdateOwnerhsipArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateOwnerhsipMsg>({
      contractAddress,
      ...restInput,
    })

  const updateOwnerhsip = useCallback(
    function updateOwnerhsip(...args: UpdateOwnerhsipMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateOwnerhsipMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateOwnerhsipAsync = useCallback(
    function updateOwnerhsipAsync(
      ...args: UpdateOwnerhsipMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateOwnerhsipMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateOwnerhsip, updateOwnerhsipAsync, ...restOutput }
}
