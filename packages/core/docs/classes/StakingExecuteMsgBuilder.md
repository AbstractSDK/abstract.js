[@abstract-money/core](../README.md) / [Exports](../modules.md) / StakingExecuteMsgBuilder

# Class: StakingExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](StakingExecuteMsgBuilder.md#constructor)

### Methods

- [delegate](StakingExecuteMsgBuilder.md#delegate)
- [redelegate](StakingExecuteMsgBuilder.md#redelegate)
- [setWithdrawAddress](StakingExecuteMsgBuilder.md#setwithdrawaddress)
- [undelegateAll](StakingExecuteMsgBuilder.md#undelegateall)
- [undelegateFrom](StakingExecuteMsgBuilder.md#undelegatefrom)
- [withdrawAllRewards](StakingExecuteMsgBuilder.md#withdrawallrewards)
- [withdrawDelegatorReward](StakingExecuteMsgBuilder.md#withdrawdelegatorreward)

## Constructors

### constructor

• **new StakingExecuteMsgBuilder**()

## Methods

### delegate

▸ `Static` **delegate**(`«destructured»`): [`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `validator` | `string` |

#### Returns

[`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts:11](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts#L11)

___

### redelegate

▸ `Static` **redelegate**(`«destructured»`): [`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `undefined` \| ``null`` \| `string` |
| › `destinationValidator` | `string` |
| › `sourceValidator` | `string` |

#### Returns

[`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts:52](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts#L52)

___

### setWithdrawAddress

▸ `Static` **setWithdrawAddress**(`«destructured»`): [`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newWithdrawAddress` | `string` |

#### Returns

[`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts:72](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts#L72)

___

### undelegateAll

▸ `Static` **undelegateAll**(): [`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Returns

[`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts:47](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts#L47)

___

### undelegateFrom

▸ `Static` **undelegateFrom**(`«destructured»`): [`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `undefined` \| ``null`` \| `string` |
| › `validator` | `string` |

#### Returns

[`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts:29](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts#L29)

___

### withdrawAllRewards

▸ `Static` **withdrawAllRewards**(): [`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Returns

[`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts:104](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts#L104)

___

### withdrawDelegatorReward

▸ `Static` **withdrawDelegatorReward**(`«destructured»`): [`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `validator` | `string` |

#### Returns

[`ExecuteMsg`](../modules/StakingTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts:88](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/tendermint-staking/Staking.msg-builder.ts#L88)
