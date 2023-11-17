[@abstract-money/core](../README.md) / [Exports](../modules.md) / FactoryMessageComposer

# Class: FactoryMessageComposer

## Implements

- [`FactoryMessage`](../interfaces/FactoryMessage.md)

## Table of contents

### Constructors

- [constructor](FactoryMessageComposer.md#constructor)

### Properties

- [contractAddress](FactoryMessageComposer.md#contractaddress)
- [sender](FactoryMessageComposer.md#sender)

### Methods

- [createAccount](FactoryMessageComposer.md#createaccount)
- [updateConfig](FactoryMessageComposer.md#updateconfig)
- [updateOwnership](FactoryMessageComposer.md#updateownership)

## Constructors

### constructor

• **new FactoryMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:48](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L48)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[FactoryMessage](../interfaces/FactoryMessage.md).[contractAddress](../interfaces/FactoryMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:46](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L46)

___

### sender

• **sender**: `string`

#### Implementation of

[FactoryMessage](../interfaces/FactoryMessage.md).[sender](../interfaces/FactoryMessage.md#sender)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:45](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L45)

## Methods

### createAccount

▸ **createAccount**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `governance` | [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) |
| › `link?` | `string` |
| › `name` | `string` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

FactoryMessage.createAccount

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:85](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L85)

___

### updateConfig

▸ **updateConfig**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ansHostContract?` | `string` |
| › `moduleFactoryAddress?` | `string` |
| › `versionControlContract?` | `string` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

FactoryMessage.updateConfig

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:56](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L56)

___

### updateOwnership

▸ **updateOwnership**(`action`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/FactoryTypes.md#action) |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

FactoryMessage.updateOwnership

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:117](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L117)
