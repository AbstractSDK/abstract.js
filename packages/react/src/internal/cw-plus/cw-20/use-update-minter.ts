import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateMinterMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.updateMinter>,
  { update_minter: unknown }
>

type UpdateMinterMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.updateMinter
>

type UseUpdateMinterArgs = Parameters<
  typeof useExecuteContract<UpdateMinterMsg>
>[0]

function buildUpdateMinterMsg(
  ...args: UpdateMinterMsgBuilderParameters
): UpdateMinterMsg {
  return Cw20ExecuteMsgBuilder.updateMinter(...args) as UpdateMinterMsg
}

export function useUpdateMinter({
  contractAddress,
  ...restInput
}: UseUpdateMinterArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateMinterMsg>({
      contractAddress,
      ...restInput,
    })

  const updateMinter = useCallback(
    function updateMinter(...args: UpdateMinterMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateMinterMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateMinterAsync = useCallback(
    function updateMinterAsync(...args: UpdateMinterMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateMinterMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateMinter, updateMinterAsync, ...restOutput }
}
