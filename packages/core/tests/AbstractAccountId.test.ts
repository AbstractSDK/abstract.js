import { AbstractAccountId } from '../src'

test('From STring local', () => {
  const accountIdString = 'juno-1'

  const actual = AbstractAccountId.fromStringId(accountIdString)
  const expected: AbstractAccountId = AbstractAccountId.local('juno', 1)
  expect(actual).toStrictEqual(expected)

  expect(actual.toStringId()).toEqual(accountIdString)
})

test('From string with remote', () => {
  const accountIdString = 'terra>juno-1'

  const actual = AbstractAccountId.fromStringId(accountIdString)
  const expected: AbstractAccountId = new AbstractAccountId('juno', 1, 'terra')
  expect(actual).toStrictEqual(expected)

  expect(actual.toStringId()).toEqual(accountIdString)
})

test('From string with remotes', () => {
  const accountIdString = 'neutron>terra>juno-1'

  const actual = AbstractAccountId.fromStringId(accountIdString)
  const expected: AbstractAccountId = new AbstractAccountId('juno', 1, [
    'neutron',
    'terra',
  ])
  expect(actual).toStrictEqual(expected)

  expect(actual.toStringId()).toEqual(accountIdString)
})

test('From STring local with mismatched chain', () => {
  expect(() => AbstractAccountId.fromStringId('juno-1', 'terra')).toThrowError()
})

test('From STring local with matched chain no throw', () => {
  const actual = AbstractAccountId.fromStringId('juno-1', 'juno')
  const expected: AbstractAccountId = new AbstractAccountId('juno', 1, 'local')
  expect(actual).toStrictEqual(expected)
  expect(actual.toStringId()).toEqual('juno-1')
})
