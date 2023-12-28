import {
  AbstractAccountClient,
  AbstractAccountId,
  AbstractAccountQueryClient,
  CosmosMsgForEmpty,
} from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { Coin, DeliverTxResponse } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import React from 'react'
import { useAccountId, useConfig } from 'src/contexts'
import { getAbstractClient } from 'src/utils/get-abstract-client'

async function execute({
  client,
  chain,
  sender,
  overrideApiUrl,
  msgs,
  accountId,
  funds,
}: {
  chain: string
  sender: string
  overrideApiUrl?: string
  client: SigningCosmWasmClient
  accountId: AbstractAccountId
  msgs: CosmosMsgForEmpty[]
  funds: Coin[]
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

  return abstractAccountClient.execute(msgs, funds)
}

export function useExecute(
  { chain }: { chain: string | undefined },
  options: UseMutationOptions<
    DeliverTxResponse,
    unknown,
    {
      chain: string
      msgs: CosmosMsgForEmpty[]
      funds: Coin[]
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
    ({ client, msgs, chain, sender, funds }) =>
      execute({
        msgs,
        client,
        chain,
        sender,
        overrideApiUrl: apiUrl,
        accountId,
        funds,
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
