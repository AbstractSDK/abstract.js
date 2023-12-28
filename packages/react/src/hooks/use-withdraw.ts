import {
  AbstractAccountClient,
  AbstractAccountId,
  AbstractAccountQueryClient,
  AssetList,
} from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { DeliverTxResponse, type StdFee } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import React from 'react'
import { useAccountId, useConfig } from 'src/contexts'
import { getAbstractClient } from 'src/utils/get-abstract-client'

async function withdraw({
  client,
  chain,
  sender,
  overrideApiUrl,
  assets,
  accountId,
  args,
  recipient,
}: {
  chain: string
  sender: string
  overrideApiUrl?: string
  recipient: string
  client: SigningCosmWasmClient
  assets: AssetList
  accountId: AbstractAccountId
  args: {
    fee: number | StdFee | 'auto'
    memo?: string
  }
}) {
  const abstractClient = await getAbstractClient({
    sender,
    client,
    chain,
    overrideApiUrl,
  })

  const abstractAccountClient = AbstractAccountClient.fromQueryClient(
    await AbstractAccountQueryClient.load(abstractClient, accountId),
    abstractClient,
  )

  return abstractAccountClient.withdraw(assets, recipient, args.fee, args.memo)
}

export function useWithdraw(
  { chain }: { chain: string | undefined },
  options: UseMutationOptions<
    DeliverTxResponse,
    unknown,
    {
      chain: string
      assets: AssetList
      recipient: string
      args: {
        fee: number | StdFee | 'auto'
        memo?: string
      }
      sender: string
      client: SigningCosmWasmClient
    }
  > = {},
) {
  const { accountId } = useAccountId()
  const { apiUrl } = useConfig()

  const {
    mutate: mutate_,
    mutateAsync: mutateAsync_,
    ...rest
  } = useMutation(
    ({ client, recipient, chain, sender, assets, args }) =>
      withdraw({
        recipient,
        client,
        chain,
        sender,
        overrideApiUrl: apiUrl,
        assets,
        accountId,
        args,
      }),
    options,
  )

  const mutate = React.useMemo(() => {
    if (!chain) return undefined

    return (
      variables: Omit<Parameters<typeof mutate_>[0], 'chain'>,
      options?: Parameters<typeof mutate_>[1],
    ) => mutate_({ chain, ...variables }, options)
  }, [mutate_, chain])

  const mutateAsync = React.useMemo(() => {
    if (!chain) return undefined

    return (
      variables: Omit<Parameters<typeof mutateAsync_>[0], 'chain'>,
      options?: Parameters<typeof mutateAsync_>[1],
    ) => mutateAsync_({ chain, ...variables }, options)
  }, [mutateAsync_, chain])

  return { mutate, mutateAsync, ...rest }
}
