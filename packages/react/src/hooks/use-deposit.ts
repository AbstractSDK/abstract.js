import {
  AbstractAccountClient,
  AbstractAccountId,
  AbstractAccountQueryClient,
  AbstractClient,
  AssetList,
} from '@abstract-money/core'
import { DeliverTxResponse, type StdFee } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useAccountId } from '../contexts'

async function deposit({
  abstractClient,
  assets,
  accountId,
  args,
}: {
  abstractClient: AbstractClient
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

  return abstractAccountClient.deposit(assets, args.fee, args.memo)
}

type DepositMutation = {
  abstractClient: AbstractClient
  assets: AssetList
  args: {
    fee: number | StdFee | 'auto'
    memo?: string
  }
}

export function useDeposit(
  options: UseMutationOptions<DeliverTxResponse, unknown, DepositMutation> = {},
) {
  const { accountId } = useAccountId()

  return useMutation(
    ({ abstractClient, assets, args }) =>
      deposit({
        abstractClient,
        assets,
        accountId,
        args,
      }),
    options,
  )
}
