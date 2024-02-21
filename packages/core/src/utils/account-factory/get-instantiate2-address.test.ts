import { describe, expect, it } from 'vitest'
import { stringToAccountId } from '../account-id'
import { getInstantiate2Address } from './get-instantiate2-address'

describe('getInstantiate2AccountAddress', () => {
  it('returns the correct address', async () => {
    const moduleFactoryAddress =
      'osmo1n28c9mtw9ehcddpaffewq4sczv4q0y3pfl76ll9v9alxx37rqdyqk89zsv'
    // abstract:carrot-app:0.0.2 checksum
    const checksum =
      '3f6fb5db7e9be94c6699c495535fd55884ac72e2babbcd90b5b41a41cce179ee'
    const accountId = stringToAccountId('osmosis-48', 'osmosis')

    const result = await getInstantiate2Address(
      moduleFactoryAddress,
      checksum,
      accountId,
    )

    expect(result).toBe(
      'osmo17a4syq9h7z72z5kj94lwgxtzx05u7yphjupuhxssx8srpmgjscqqvt575e',
    )
  })
})
