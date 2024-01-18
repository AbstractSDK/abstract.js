import { AccountFactoryTypes } from '../codegen/abstract'
import { ContractExecuteMsgBuilder } from './contract-msg-builder'
type FactoryExecuteMsg = AccountFactoryTypes.ExecuteMsg

test('ContractClient variant and msg', () => {
  class FactoryMessageBulider extends ContractExecuteMsgBuilder<FactoryExecuteMsg> {}

  expect(
    new FactoryMessageBulider()
      .withVariant('update_config')
      .withParams({ ans_host_contract: 'foo' })
      .toJson(),
  ).toEqual({
    update_config: { ans_host_contract: 'foo' },
  })
})

// test for msg
test('ContractClient.variantMsg', () => {
  class FactoryMessageBulider extends ContractExecuteMsgBuilder<FactoryExecuteMsg> {}

  expect(
    new FactoryMessageBulider()
      .withActionMsg('update_config', { ans_host_contract: 'foo' })
      .toJson(),
  ).toEqual({
    update_config: { ans_host_contract: 'foo' },
  })
})
