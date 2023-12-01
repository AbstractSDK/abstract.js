import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateAssetAddressesMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateAssetAddresses>,
  { update_contract_addresses: unknown }
>

type UpdateAssetAddressesMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateAssetAddresses
>[0]

type UseUpdateAssetAddressesArgs = Parameters<
  typeof useExecuteContract<UpdateAssetAddressesMsg>
>[0]

function buildUpdateAssetAddressesMsg(
  args: UpdateAssetAddressesMsgBuilderParameters,
): UpdateAssetAddressesMsg {
  return AnsHostExecuteMsgBuilder.updateAssetAddresses(
    args,
  ) as UpdateAssetAddressesMsg
}

export function useUpdateAssetAddresses({
  contractAddress,
  ...restInput
}: UseUpdateAssetAddressesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateAssetAddressesMsg>({
      contractAddress,
      ...restInput,
    })

  const updateAssetAddresses = React.useCallback(
    function updateAssetAddresses({
      senderAddress,
      signingClient,
      ...args
    }: UpdateAssetAddressesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateAssetAddressesMsg(args),
      })
    },
    [executeContract],
  )

  const updateAssetAddressesAsync = React.useCallback(
    function updateAssetAddressesAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateAssetAddressesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateAssetAddressesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateAssetAddresses, updateAssetAddressesAsync, ...restOutput }
}
