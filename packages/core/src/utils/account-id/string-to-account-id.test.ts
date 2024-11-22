import { describe, expect, it } from 'vitest'
import { stringToAccountId } from './string-to-account-id'

describe('stringToAccountId', () => {
  it('should parse a local account ID with chainName', () => {
    const result = stringToAccountId('local-42', 'neutrontestnet')
    expect(result).toEqual({
      chainName: 'neutrontestnet',
      seq: 42,
      trace: 'local',
    })
  })

  it('should throw an error for a local account ID without chainName', () => {
    expect(() => stringToAccountId('local-42')).toThrow(
      'chainName must be provided for local account ids',
    )
  })

  it('should parse a simple chain account ID', () => {
    const result = stringToAccountId('neutrontestnet-42')
    expect(result).toEqual({
      chainName: 'neutrontestnet',
      seq: 42,
      trace: 'local',
    })
  })

  it('should parse a multi-hop chain account ID', () => {
    const result = stringToAccountId('osmosis>neutron-42')
    expect(result).toEqual({
      chainName: 'osmosis',
      seq: 42,
      trace: {
        remote: ['neutron'],
      },
    })
  })

  it('should parse a multi-hop chain account ID with provided chain', () => {
    const result = stringToAccountId('osmosis>neutron-42', 'osmosis')
    expect(result).toEqual({
      chainName: 'osmosis',
      seq: 42,
      trace: {
        remote: ['neutron'],
      },
    })
  })

  it('should parse a complex multi-hop chain account ID', () => {
    const result = stringToAccountId('neutron>juno>osmosis-42')
    expect(result).toEqual({
      chainName: 'neutron',
      seq: 42,
      trace: {
        remote: ['osmosis', 'juno'],
      },
    })
  })

  it('should throw an error when the account string is invalid', () => {
    expect(() => stringToAccountId('invalidString')).toThrow(
      'Cannot find chain or sequence for account: invalidString',
    )
  })

  it('should throw an error when source chain does not match provided chainName', () => {
    expect(() => stringToAccountId('neutrontestnet-42', 'osmosis')).toThrow(
      'chainName osmosis does not match chain in account id neutrontestnet-42',
    )
  })

  it('should throw an error when account has no source chain in non-local accounts', () => {
    expect(() => stringToAccountId('>osmosis-42')).toThrow(
      'Invalid chain string in account id >osmosis-42',
    )
  })
})
