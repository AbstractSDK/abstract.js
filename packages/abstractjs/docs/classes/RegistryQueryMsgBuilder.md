[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryQueryMsgBuilder

# Class: RegistryQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](RegistryQueryMsgBuilder.md#constructor)

### Methods

- [accountBase](RegistryQueryMsgBuilder.md#accountbase)
- [config](RegistryQueryMsgBuilder.md#config)
- [moduleList](RegistryQueryMsgBuilder.md#modulelist)
- [modules](RegistryQueryMsgBuilder.md#modules)
- [namespace](RegistryQueryMsgBuilder.md#namespace)
- [namespaceList](RegistryQueryMsgBuilder.md#namespacelist)
- [namespaces](RegistryQueryMsgBuilder.md#namespaces)
- [ownership](RegistryQueryMsgBuilder.md#ownership)

## Constructors

### constructor

• **new RegistryQueryMsgBuilder**()

## Methods

### accountBase

▸ `Static` **accountBase**(`«destructured»`): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:239](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L239)

___

### config

▸ `Static` **config**(): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:303](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L303)

___

### moduleList

▸ `Static` **moduleList**(`«destructured»`): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`ModuleFilter`](../interfaces/RegistryTypes.ModuleFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:308](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L308)

___

### modules

▸ `Static` **modules**(`«destructured»`): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] |

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:255](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L255)

___

### namespace

▸ `Static` **namespace**(`«destructured»`): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespace` | `string` |

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:287](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L287)

___

### namespaceList

▸ `Static` **namespaceList**(`«destructured»`): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:328](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L328)

___

### namespaces

▸ `Static` **namespaces**(`«destructured»`): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `number`[] |

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:271](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L271)

___

### ownership

▸ `Static` **ownership**(): [`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/RegistryTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:346](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L346)
