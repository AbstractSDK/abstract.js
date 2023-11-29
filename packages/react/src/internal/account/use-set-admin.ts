import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type SetAdminMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.setAdmin>,
  { set_admin: unknown }
>

type SetAdminMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.setAdmin
>

type UseSetAdminArgs = Parameters<typeof useExecuteContract<SetAdminMsg>>[0]

function buildSetAdminMsg(...args: SetAdminMsgBuilderParameters): SetAdminMsg {
  return ProxyExecuteMsgBuilder.setAdmin(...args) as SetAdminMsg
}

export function useSetAdmin({
  contractAddress,
  ...restInput
}: UseSetAdminArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SetAdminMsg>({
      contractAddress,
      ...restInput,
    })

  const setAdmin = React.useCallback(
    function setAdmin(...args: SetAdminMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildSetAdminMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const setAdminAsync = React.useCallback(
    function setAdminAsync(...args: SetAdminMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildSetAdminMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { setAdmin, setAdminAsync, ...restOutput }
}
