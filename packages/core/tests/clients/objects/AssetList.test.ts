import { parseCoins } from '@cosmjs/stargate'
import { Asset, AssetList } from '../../../src'
import {
  TEST_AMOUNT,
  TEST_CW20_ADDRESS,
  TEST_RECIPIENT,
  TEST_SENDER,
} from './Asset.test'

test('fromCoins', () => {
  const coins = parseCoins('1000ujuno,1500uterra')
  const actual = AssetList.fromCoins(coins)
  expect(actual.length).toEqual(2)
  expect(actual.assets[0].intoCoin()).toEqual(coins[0])
  expect(actual.assets[1].intoCoin()).toEqual(coins[1])
})

test('native coins are combined in transferMsgs', () => {
  const unsortedCoins = parseCoins('1000uterra,1500ujuno')
  const assetList = AssetList.fromCoins(unsortedCoins)
  const actual = assetList.transferMsgs(TEST_SENDER, TEST_RECIPIENT)
  expect(actual.length).toEqual(1)
  expect(actual[0].typeUrl).toEqual('/cosmos.bank.v1beta1.MsgSend')
  expect(actual[0].value.amount).not.toEqual(unsortedCoins)
  const sortedCoins = unsortedCoins.sort((a, b) =>
    a.denom.localeCompare(b.denom),
  )
  expect(actual[0].value.amount).toEqual(sortedCoins)
})

test('transferMsgs', () => {
  const natives = parseCoins('1000ujuno,1500uterra')
  const assetList = AssetList.fromCoins(natives)

  const cw20 = Asset.cw20(TEST_CW20_ADDRESS, TEST_AMOUNT)
  assetList.add(cw20)
  const actual = assetList.transferMsgs(TEST_SENDER, TEST_RECIPIENT)
  // One message for natives, one message for cw20
  expect(actual.length).toEqual(2)
  expect(actual[0].typeUrl).toEqual('/cosmos.bank.v1beta1.MsgSend')
  expect(actual[0].value.amount).toEqual(natives)
  expect(actual[1].typeUrl).toEqual('/cosmwasm.wasm.v1.MsgExecuteContract')
  expect(actual[1]).toEqual(cw20.transferMsg(TEST_SENDER, TEST_RECIPIENT))
})
