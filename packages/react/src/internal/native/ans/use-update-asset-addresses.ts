import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateAssetAddressesMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateAssetAddresses>,
  { update_contract_addresses: unknown }
>

type UpdateAssetAddressesMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateAssetAddresses
>

type UseUpdateAssetAddressesArgs = Parameters<
  typeof useExecuteContract<UpdateAssetAddressesMsg>
>[0]

function buildUpdateAssetAddressesMsg(
  ...args: UpdateAssetAddressesMsgBuilderParameters
): UpdateAssetAddressesMsg {
  return AnsHostExecuteMsgBuilder.updateAssetAddresses(
    ...args,
  ) as UpdateAssetAddressesMsg
}

export function useUpdateAssetAddresses({
  contractAddress,
  ...restInput
}: UseUpdateAssetAddressesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateAssetAddressesMsg>({
      contractAddress,
      ...restInput,
    })

  const updateAssetAddresses = React.useCallback(
    function updateAssetAddresses(
      ...args: UpdateAssetAddressesMsgBuilderParameters
    ) {
      return executeContract({
        signingClient,
        msg: buildUpdateAssetAddressesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateAssetAddressesAsync = React.useCallback(
    function updateAssetAddressesAsync(
      ...args: UpdateAssetAddressesMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateAssetAddressesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateAssetAddresses, updateAssetAddressesAsync, ...restOutput }
}
