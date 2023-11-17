import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateContractAddressesMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateContractAddresses>,
  { update_contract_addresses: unknown }
>

type UpdateContractAddressesMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateContractAddresses
>

type UseUpdateContractAddressesArgs = Parameters<
  typeof useExecuteContract<UpdateContractAddressesMsg>
>[0]

function buildUpdateContractAddressesMsg(
  ...args: UpdateContractAddressesMsgBuilderParameters
): UpdateContractAddressesMsg {
  return AnsHostExecuteMsgBuilder.updateContractAddresses(
    ...args,
  ) as UpdateContractAddressesMsg
}

export function useUpdateContractAddresses({
  contractAddress,
  ...restInput
}: UseUpdateContractAddressesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateContractAddressesMsg>({
      contractAddress,
      ...restInput,
    })

  const updateContractAddresses = useCallback(
    function updateContractAddresses(
      ...args: UpdateContractAddressesMsgBuilderParameters
    ) {
      return executeContract({
        signingClient,
        msg: buildUpdateContractAddressesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateContractAddressesAsync = useCallback(
    function updateContractAddressesAsync(
      ...args: UpdateContractAddressesMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateContractAddressesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return {
    updateContractAddresses,
    updateContractAddressesAsync,
    ...restOutput,
  }
}
