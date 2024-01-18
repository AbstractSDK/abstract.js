import { AccountId } from '../utils/account-id'
import { AbstractAccountId } from './clients'

export function legacyAccountIdToAccountId(id: AbstractAccountId): AccountId {
  return {
    chainName: id.chainName,
    seq: id.sequence,
    trace: id.trace,
  } satisfies AccountId
}
