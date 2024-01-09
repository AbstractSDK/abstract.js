import {
  AbstractAccountClient,
  AbstractAccountId,
  AbstractAccountQueryClient,
  AbstractClient,
  AssetList,
} from '@abstract-money/core'
import { DeliverTxResponse, type StdFee } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

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
  const accountClient = (
    await AbstractAccountQueryClient.load(abstractClient, accountId)
  ).connectAbstractClient(abstractClient)

  return accountClient.deposit(assets, args.fee, args.memo)
}

type DepositMutation = {
  abstractClient: AbstractClient
  assets: AssetList
  accountId: AbstractAccountId
  args: {
    fee: number | StdFee | 'auto'
    memo?: string
  }
}

/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit(
  options: UseMutationOptions<DeliverTxResponse, unknown, DepositMutation> = {},
) {
  return useMutation(
    ({ abstractClient, accountId, assets, args }) =>
      deposit({
        abstractClient,
        assets,
        accountId,
        args,
      }),
    options,
  )
}
