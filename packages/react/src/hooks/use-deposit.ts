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

async function deposit({
  client,
  chain,
  sender,
  overrideApiUrl,
  assets,
  accountId,
  args,
}: {
  chain: string
  sender: string
  overrideApiUrl?: string
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

  return abstractAccountClient.deposit(assets, args.fee, args.memo)
}

export function useDeposit(
  { chain }: { chain: string | undefined },
  options: UseMutationOptions<
    DeliverTxResponse,
    unknown,
    {
      chain: string
      assets: AssetList
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
    ({ client, chain, sender, assets, args }) =>
      deposit({
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
