import { AccountId } from '../utils/account-id'
import { AbstractAccountId } from './clients'

export function accountIdToLegacyAccountId(id: AccountId): AbstractAccountId {
  return new AbstractAccountId(id.chainName, id.seq, id.trace)
}
