import { AccountsQuery } from '../../codegen/gql/graphql'
import { AccountId } from './account-id'

export function accountIdApiFormatToAccountId({
  chainName,
  sequence,
  trace,
}: AccountsQuery['accounts'][number]['accountId']) {
  return {
    seq: sequence,
    trace: trace ? { remote: trace } : 'local',
    chainName,
  } satisfies AccountId
}
