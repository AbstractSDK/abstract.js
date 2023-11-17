import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateDexesMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateDexes>,
  { update_dexes: unknown }
>

type UpdateDexesMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateDexes
>

type UseUpdateDexesArgs = Parameters<
  typeof useExecuteContract<UpdateDexesMsg>
>[0]

function buildUpdateDexesMsg(
  ...args: UpdateDexesMsgBuilderParameters
): UpdateDexesMsg {
  return AnsHostExecuteMsgBuilder.updateDexes(...args) as UpdateDexesMsg
}

export function useUpdateDexes({
  contractAddress,
  ...restInput
}: UseUpdateDexesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateDexesMsg>({
      contractAddress,
      ...restInput,
    })

  const updateDexes = useCallback(
    function updateDexes(...args: UpdateDexesMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateDexesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateDexesAsync = useCallback(
    function updateDexesAsync(...args: UpdateDexesMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateDexesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateDexes, updateDexesAsync, ...restOutput }
}
