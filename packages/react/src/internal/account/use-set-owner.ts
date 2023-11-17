import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type SetOwnerMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.setOwner>,
  { set_owner: unknown }
>

type SetOwnerMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.setOwner
>

type UseSetOwnerArgs = Parameters<typeof useExecuteContract<SetOwnerMsg>>[0]

function buildSetOwnerMsg(...args: SetOwnerMsgBuilderParameters): SetOwnerMsg {
  return ManagerExecuteMsgBuilder.setOwner(...args) as SetOwnerMsg
}

export function useSetOwner({
  contractAddress,
  ...restInput
}: UseSetOwnerArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SetOwnerMsg>({
      contractAddress,
      ...restInput,
    })

  const setOwner = useCallback(
    function setOwner(...args: SetOwnerMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildSetOwnerMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const setOwnerAsync = useCallback(
    function setOwnerAsync(...args: SetOwnerMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildSetOwnerMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { setOwner, setOwnerAsync, ...restOutput }
}
