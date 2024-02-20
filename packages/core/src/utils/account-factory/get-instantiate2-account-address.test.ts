import { describe, expect, it } from 'vitest'
import { stringToAccountId } from '../account-id'
import { getInstantiate2AccountAddress } from './get-instantiate2-account-address' // Update the path to your logic file

describe('getInstantiate2AccountAddress', () => {
  it('returns the correct address', async () => {
    const address = 'juno1jzyqffltm2s5wxmnjyze5hzrpcady0gmltw6ka'
    const accountFactoryAddress =
      'juno1qtl43hzk7xd9xly9wc4qxnmtjmj0hdtymsnldsl736yh7vnfm3ys7t4a4y'
    const checksum = new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1,
      2, 3, 4, 5, 6, 7, 8,
    ])
    const accountId = stringToAccountId('juno-5', 'juno')

    const result = await getInstantiate2AccountAddress(
      address,
      accountFactoryAddress,
      checksum,
      accountId,
    )

    expect(result).toBe(
      'juno1m8lz9cru30zugeas5tx9245kn6w4rv92y7t96gvcsl0ktve378tqkv60qs',
    )
  })
})
