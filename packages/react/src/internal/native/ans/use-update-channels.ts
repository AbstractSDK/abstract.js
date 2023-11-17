import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateChannelsMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateChannels>,
  { update_channels: unknown }
>

type UpdateChannelsMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateChannels
>

type UseUpdateChannelsArgs = Parameters<
  typeof useExecuteContract<UpdateChannelsMsg>
>[0]

function buildUpdateChannelsMsg(
  ...args: UpdateChannelsMsgBuilderParameters
): UpdateChannelsMsg {
  return AnsHostExecuteMsgBuilder.updateChannels(...args) as UpdateChannelsMsg
}

export function useUpdateChannels({
  contractAddress,
  ...restInput
}: UseUpdateChannelsArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateChannelsMsg>({
      contractAddress,
      ...restInput,
    })

  const updateChannels = useCallback(
    function updateChannels(...args: UpdateChannelsMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateChannelsMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateChannelsAsync = useCallback(
    function updateChannelsAsync(...args: UpdateChannelsMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateChannelsMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateChannels, updateChannelsAsync, ...restOutput }
}
