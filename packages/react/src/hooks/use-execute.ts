import {
  AbstractAccountClient,
  AbstractAccountId,
  AbstractAccountQueryClient,
  AbstractClient,
  CosmosMsgForEmpty,
} from '@abstract-money/core'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { Coin } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useAccountId } from '../contexts'

async function execute({
  abstractClient,
  msgs,
  accountId,
  funds,
}: {
  abstractClient: AbstractClient
  accountId: AbstractAccountId
  msgs: CosmosMsgForEmpty[]
  funds: Coin[]
}) {
  const abstractAccountClient = AbstractAccountClient.fromQueryClient(
    await AbstractAccountQueryClient.load(abstractClient, accountId),
    abstractClient,
  )

  return abstractAccountClient.execute(msgs, funds)
}

type ExecuteMutation = {
  msgs: CosmosMsgForEmpty[]
  funds: Coin[]
  abstractClient: AbstractClient
}

export function useExecute(
  options: UseMutationOptions<ExecuteResult, Error, ExecuteMutation> = {},
) {
  const { accountId } = useAccountId()

  return useMutation(
    ({ abstractClient, msgs, funds }) =>
      execute({
        msgs,
        abstractClient,
        accountId,
        funds,
      }),
    options,
  )
}
