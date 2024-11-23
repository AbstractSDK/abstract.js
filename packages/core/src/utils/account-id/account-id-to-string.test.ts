import { describe, expect, it } from 'vitest'
import { accountIdToString } from './account-id-to-string'

describe('accountIdToString', () => {
  it('should convert a local account ID object to string', () => {
    const accountId = {
      chainName: 'neutrontestnet',
      seq: 42,
      trace: 'local' as const,
    }
    const result = accountIdToString(accountId)
    expect(result).toEqual('neutrontestnet-42')
  })

  it('should convert a simple chain account ID object to string', () => {
    const accountId = {
      chainName: 'neutrontestnet',
      seq: 42,
      trace: 'local' as const,
    }
    const result = accountIdToString(accountId)
    expect(result).toEqual('neutrontestnet-42')
  })

  it('should convert a multi-hop chain account ID object to string', () => {
    const accountId = {
      chainName: 'neutron',
      seq: 42,
      trace: {
        remote: ['osmosis'],
      },
    }
    const result = accountIdToString(accountId)
    expect(result).toEqual('neutron>osmosis-42')
  })

  it('should convert a complex multi-hop chain account ID object to string', () => {
    const accountId = {
      chainName: 'neutron',
      seq: 42,
      trace: {
        remote: ['juno', 'osmosis'],
      },
    }
    const result = accountIdToString(accountId)
    expect(result).toEqual('neutron>osmosis>juno-42')
  })

  it('should throw an error if seq is not a valid number', () => {
    const accountId = {
      chainName: 'neutron',
      seq: -1,
      trace: 'local' as const,
    }
    expect(() => accountIdToString(accountId)).toThrow(
      'Invalid account sequence: -1',
    )
  })

  it('should throw an error if chainName is missing', () => {
    const accountId = {
      seq: 42,
      trace: 'local' as const,
      chainName: '',
    }
    expect(() => accountIdToString(accountId)).toThrow(
      'AccountId must have a chainName',
    )
  })

  it('should throw an error if trace is not valid', () => {
    const accountId = {
      chainName: 'neutron',
      seq: 42,
      trace: { remote: [] },
    }
    expect(() => accountIdToString(accountId)).toThrow(
      'Invalid remote trace: []',
    )
  })

  it('should throw an error if trace is not valid', () => {
    const accountId = {
      chainName: 'neutron',
      seq: 42,
      trace: { remote: [''] },
    }
    expect(() => accountIdToString(accountId)).toThrow(
      'Invalid remote trace: [""]',
    )
  })
})
