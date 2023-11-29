import { FactoryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateOwnershipMsg = Extract<
  ReturnType<typeof FactoryExecuteMsgBuilder.updateOwnership>,
  { update_ownership: unknown }
>

type UpdateOwnershipMsgBuilderParameters = Parameters<
  typeof FactoryExecuteMsgBuilder.updateOwnership
>

type UseUpdateOwnershipArgs = Parameters<
  typeof useExecuteContract<UpdateOwnershipMsg>
>[0]

function buildUpdateOwnershipMsg(
  ...args: UpdateOwnershipMsgBuilderParameters
): UpdateOwnershipMsg {
  return FactoryExecuteMsgBuilder.updateOwnership(...args) as UpdateOwnershipMsg
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

  const updateOwnership = React.useCallback(
    function updateOwnership(...args: UpdateOwnershipMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateOwnershipMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateOwnershipAsync = React.useCallback(
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
