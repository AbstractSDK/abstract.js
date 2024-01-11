import { Coin } from '@cosmjs/amino'
import { toBase64, toUtf8 } from '@cosmjs/encoding'
import { coin, coins, parseCoins } from '@cosmjs/stargate'
import { Cw20MessageComposer } from '../../../.tsup/declaration/cw-plus'
import { Asset } from '../../../src'

export const TEST_SENDER = 'me'
export const TEST_RECIPIENT = 'you'
export const TEST_DENOM = 'ujuno'
export const TEST_CW20_ADDRESS = 'ewwhyno'
export const TEST_AMOUNT = '1000'
export const TEST_COIN = coin(TEST_AMOUNT, TEST_DENOM)

const expectCoin = (actual: Asset, coin: Coin) => {
  expect(actual.intoCoin()).toEqual(coin)
  expect(actual.isNative()).toBeTruthy()
  expect(actual.isCw20()).toBeFalsy()
}

const expectCw20 = (actual: Asset, address: string, amount: string) => {
  expect(actual.intoCoin()).toThrowError()
  expect(actual.isCw20()).toBeTruthy()
  expect(actual.isNative()).toBeFalsy()

  // biome-ignore lint/complexity/useLiteralKeys: this is a test
  expect(actual.info['cw20']).toEqual(address)
  expect(actual.amount).toEqual(amount)
}

test('fromCoin', () => {
  const actual = Asset.fromCoin(TEST_COIN)
  expectCoin(actual, TEST_COIN)
})

test('fromSdkString', () => {
  const sdkString = '1000ujuno'
  const expected = parseCoins(sdkString)[0]
  const actual = Asset.fromSdkString(sdkString)
  expectCoin(actual, expected)
})

test('native', () => {
  const denom = TEST_DENOM
  const amount = '1000'
  const expected = parseCoins(`${amount}${denom}`)[0]
  const actual = Asset.native(denom, amount)
  expectCoin(actual, expected)
})

test('cw20', () => {
  const address = TEST_DENOM
  const amount = '1000'
  const actual = Asset.cw20(address, amount)
  expectCw20(actual, address, amount)
})

test('transferMsg native', () => {
  const asset = Asset.native(TEST_DENOM, TEST_AMOUNT)
  const actual = asset.transferMsg(TEST_SENDER, TEST_RECIPIENT)
  const expected = {
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: TEST_SENDER,
      toAddress: TEST_RECIPIENT,
      amount: [TEST_COIN],
    },
  }
  expect(actual).toEqual(expected)
})

test('transferMsg cw20', () => {
  const asset = Asset.cw20(TEST_CW20_ADDRESS, TEST_AMOUNT)
  const actual = asset.transferMsg(TEST_SENDER, TEST_RECIPIENT)
  const expected = new Cw20MessageComposer(
    TEST_SENDER,
    TEST_CW20_ADDRESS,
  ).transfer(
    {
      amount: TEST_AMOUNT,
      recipient: TEST_RECIPIENT,
    },
    [],
  )
  expect(actual).toEqual(expected)
})

test('sendMsg cw20', () => {
  const hookAddress = 'hook'
  const hook = { claim: {} }

  // This in an example from our web app
  const expected = new Cw20MessageComposer(TEST_SENDER, TEST_CW20_ADDRESS).send(
    {
      amount: TEST_AMOUNT,
      contract: hookAddress,
      msg: toBase64(toUtf8(JSON.stringify(hook))),
    },
  )

  const asset = Asset.cw20(TEST_CW20_ADDRESS, TEST_AMOUNT)
  expect(asset.sendMsg(TEST_SENDER, hookAddress, hook)).toEqual(expected)
})

test('sendMsg native', () => {
  const asset = Asset.native(TEST_DENOM, TEST_AMOUNT)
  expect(() => asset.sendMsg(TEST_SENDER, 'test', {})).toThrowError()
})
