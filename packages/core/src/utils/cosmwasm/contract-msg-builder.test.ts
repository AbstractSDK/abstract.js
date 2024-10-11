import { AccountTypes } from '../../codegen/abstract'
import { ContractExecuteMsgBuilder } from './contract-msg-builder'
type AccountExecuteMsg = AccountTypes.ExecuteMsg

test('ContractClient variant and msg', () => {
  class FactoryMessageBulider extends ContractExecuteMsgBuilder<AccountExecuteMsg> {}

  expect(
    new FactoryMessageBulider()
      .withVariant('update_info')
      .withParams({ name: 'foo' })
      .toJson(),
  ).toEqual({
    update_info: { name: 'foo' },
  })
})

// test for msg
test('ContractClient.variantMsg', () => {
  class FactoryMessageBulider extends ContractExecuteMsgBuilder<AccountExecuteMsg> {}

  expect(
    new FactoryMessageBulider()
      .withActionMsg('update_info', { name: 'foo' })
      .toJson(),
  ).toEqual({
    update_info: { name: 'foo' },
  })
})
