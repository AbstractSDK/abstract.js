[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / FactoryMessage

# Interface: FactoryMessage

## Implemented by

- [`FactoryMessageComposer`](../classes/FactoryMessageComposer.md)

## Table of contents

### Properties

- [contractAddress](FactoryMessage.md#contractaddress)
- [createAccount](FactoryMessage.md#createaccount)
- [sender](FactoryMessage.md#sender)
- [updateConfig](FactoryMessage.md#updateconfig)
- [updateOwnership](FactoryMessage.md#updateownership)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:14](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L14)

___

### createAccount

• **createAccount**: (`__namedParameters`: { `description?`: `string` ; `governance`: [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) ; `link?`: `string` ; `name`: `string`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `governance` | [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) |
| › `link?` | `string` |
| › `name` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:28](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L28)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:15](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L15)

___

### updateConfig

• **updateConfig**: (`__namedParameters`: { `ansHostContract?`: `string` ; `moduleFactoryAddress?`: `string` ; `versionControlContract?`: `string`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ansHostContract?` | `string` |
| › `moduleFactoryAddress?` | `string` |
| › `versionControlContract?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:16](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L16)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/FactoryTypes.md#action), `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`action`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/FactoryTypes.md#action) |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.message-composer.ts:42](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.message-composer.ts#L42)
