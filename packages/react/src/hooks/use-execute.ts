import {
  AbstractAccountId,
  AbstractAccountQueryClient,
  AbstractClient,
  CosmosMsgForEmpty,
} from '@abstract-money/core'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { Coin } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

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
  const accountClient = (
    await AbstractAccountQueryClient.load(abstractClient, accountId)
  ).connectAbstractClient(abstractClient)

  return accountClient.execute(msgs, funds)
}

type ExecuteMutation = {
  msgs: CosmosMsgForEmpty[]
  funds: Coin[]
  accountId: AbstractAccountId
  abstractClient: AbstractClient
}

/**
 * Hook to execute a transaction on an Account.
 * @param options execute options.
 */
export function useExecute(
  options: UseMutationOptions<ExecuteResult, Error, ExecuteMutation> = {},
) {
  return useMutation(
    ({ abstractClient, accountId, msgs, funds }) =>
      execute({
        msgs,
        abstractClient,
        accountId,
        funds,
      }),
    options,
  )
}
