import { stringToAccountId } from '@abstract-money/core'
import { betting } from '../../_generated'
import { ROUND_ACCOUNT_ID, ROUND_CHAIN_NAME } from '../_lib/constants'

export const useListRounds = () => {
  return betting.queries.useListRounds({
    accountId: stringToAccountId(ROUND_ACCOUNT_ID),
    chainName: ROUND_CHAIN_NAME,
    args: {},
  })
}
