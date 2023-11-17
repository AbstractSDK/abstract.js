import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateOwnershipMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.updateOwnership>,
  { update_ownership: unknown }
>

type UpdateOwnershipMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.updateOwnership
>

type UseUpdateOwnershipArgs = Parameters<
  typeof useExecuteContract<UpdateOwnershipMsg>
>[0]

function buildUpdateOwnershipMsg(
  ...args: UpdateOwnershipMsgBuilderParameters
): UpdateOwnershipMsg {
  return RegistryExecuteMsgBuilder.updateOwnership(
    ...args,
  ) as UpdateOwnershipMsg
}

export function useUpdateOwnership({
  contractAddress,
  ...restInput
}: UseUpdateOwnershipArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateOwnershipMsg>({
      contractAddress,
      ...restInput,
    })

  const updateOwnership = useCallback(
    function updateOwnership(...args: UpdateOwnershipMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateOwnershipMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateOwnershipAsync = useCallback(
    function updateOwnershipAsync(
      ...args: UpdateOwnershipMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateOwnershipMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateOwnership, updateOwnershipAsync, ...restOutput }
}
