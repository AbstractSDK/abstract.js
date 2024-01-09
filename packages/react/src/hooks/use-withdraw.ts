import {
  AbstractAccountClient,
  AbstractAccountId,
  AbstractAccountQueryClient,
  AbstractClient,
  AssetList,
} from '@abstract-money/core'
import { DeliverTxResponse, type StdFee } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

async function withdraw({
  abstractClient,
  assets,
  accountId,
  args,
  recipient,
}: {
  abstractClient: AbstractClient
  recipient: string
  assets: AssetList
  accountId: AbstractAccountId
  args: {
    fee: number | StdFee | 'auto'
    memo?: string
  }
}) {
  const abstractAccountClient = AbstractAccountClient.fromQueryClient(
    await AbstractAccountQueryClient.load(abstractClient, accountId),
    abstractClient,
  )

  return abstractAccountClient.withdraw(assets, recipient, args.fee, args.memo)
}

type WithdrawMutation = {
  abstractClient: AbstractClient
  assets: AssetList
  recipient: string
  accountId: AbstractAccountId
  args: {
    fee: number | StdFee | 'auto'
    memo?: string
  }
}

export function useWithdraw(
  options: UseMutationOptions<
    DeliverTxResponse,
    unknown,
    WithdrawMutation
  > = {},
) {
  return useMutation(
    ({ abstractClient, accountId, recipient, assets, args }) =>
      withdraw({
        recipient,
        abstractClient,
        assets,
        accountId,
        args,
      }),
    options,
  )
}
