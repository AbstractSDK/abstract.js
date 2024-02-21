import { describe, expect, it } from 'vitest'
import { stringToAccountId } from '../account-id'
import { getInstantiate2Address } from './get-instantiate2-address' // Update the path to your logic file

describe('getInstantiate2AccountAddress', () => {
  it('returns the correct address', async () => {
    const moduleFactoryAddress =
      'juno1qtl43hzk7xd9xly9wc4qxnmtjmj0hdtymsnldsl736yh7vnfm3ys7t4a4y'
    // TODO: Replace with the actual checksum
    const checksum = new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1,
      2, 3, 4, 5, 6, 7, 8,
    ]).toString()
    const accountId = stringToAccountId('juno-5', 'juno')

    const result = await getInstantiate2Address(
      moduleFactoryAddress,
      checksum,
      accountId,
    )

    expect(result).toBe(
      'juno1m8lz9cru30zugeas5tx9245kn6w4rv92y7t96gvcsl0ktve378tqkv60qs',
    )
  })
})

describe('getInstantiate2AccountAddressCarrot', () => {
  it('returns the correct address', async () => {
    const moduleFactoryAddress =
      'osmo1n28c9mtw9ehcddpaffewq4sczv4q0y3pfl76ll9v9alxx37rqdyqk89zsv'

    const savingsChecksum =
      '663B34ECF2287496D6CBD9CF5DFDD5BF23D4240325E688CA9FA809D8ECDCCF12'

    const accountId = stringToAccountId('osmosis-48', 'osmosis')

    const result = await getInstantiate2Address(
      moduleFactoryAddress,
      savingsChecksum,
      accountId,
    )

    expect(result).toEqual(
      'osmo193zezfjwe0ndxyd0rcrw39rlqt2ulu4gvenner2vp8n5402vnhjq4t7pv0',
    )
  })
})
