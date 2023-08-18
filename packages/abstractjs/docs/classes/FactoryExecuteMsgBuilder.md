[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / FactoryExecuteMsgBuilder

# Class: FactoryExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](FactoryExecuteMsgBuilder.md#constructor)

### Methods

- [createAccount](FactoryExecuteMsgBuilder.md#createaccount)
- [updateConfig](FactoryExecuteMsgBuilder.md#updateconfig)
- [updateOwnership](FactoryExecuteMsgBuilder.md#updateownership)

## Constructors

### constructor

• **new FactoryExecuteMsgBuilder**()

## Methods

### createAccount

▸ `Static` **createAccount**(`«destructured»`): [`ExecuteMsg`](../modules/FactoryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `undefined` \| ``null`` \| `string` |
| › `governance` | [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) |
| › `link` | `undefined` \| ``null`` \| `string` |
| › `name` | `string` |

#### Returns

[`ExecuteMsg`](../modules/FactoryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.msg-builder.ts:43](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.msg-builder.ts#L43)

___

### updateConfig

▸ `Static` **updateConfig**(`«destructured»`): [`ExecuteMsg`](../modules/FactoryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ansHostContract` | `undefined` \| ``null`` \| `string` |
| › `moduleFactoryAddress` | `undefined` \| ``null`` \| `string` |
| › `versionControlContract` | `undefined` \| ``null`` \| `string` |

#### Returns

[`ExecuteMsg`](../modules/FactoryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.msg-builder.ts:23](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.msg-builder.ts#L23)

___

### updateOwnership

▸ `Static` **updateOwnership**(`action`): [`ExecuteMsg`](../modules/FactoryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/FactoryTypes.md#action) |

#### Returns

[`ExecuteMsg`](../modules/FactoryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.msg-builder.ts:65](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.msg-builder.ts#L65)
