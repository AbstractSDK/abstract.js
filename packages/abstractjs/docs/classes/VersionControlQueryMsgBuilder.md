[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / VersionControlQueryMsgBuilder

# Class: VersionControlQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](VersionControlQueryMsgBuilder.md#constructor)

### Methods

- [accountBase](VersionControlQueryMsgBuilder.md#accountbase)
- [config](VersionControlQueryMsgBuilder.md#config)
- [moduleList](VersionControlQueryMsgBuilder.md#modulelist)
- [modules](VersionControlQueryMsgBuilder.md#modules)
- [namespace](VersionControlQueryMsgBuilder.md#namespace)
- [namespaceList](VersionControlQueryMsgBuilder.md#namespacelist)
- [namespaces](VersionControlQueryMsgBuilder.md#namespaces)
- [ownership](VersionControlQueryMsgBuilder.md#ownership)

## Constructors

### constructor

• **new VersionControlQueryMsgBuilder**()

## Methods

### accountBase

▸ `Static` **accountBase**(`«destructured»`): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:141](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L141)

___

### config

▸ `Static` **config**(): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:185](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L185)

___

### moduleList

▸ `Static` **moduleList**(`«destructured»`): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`ModuleFilter`](../interfaces/VersionControlTypes.ModuleFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:190](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L190)

___

### modules

▸ `Static` **modules**(`«destructured»`): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] |

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:152](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L152)

___

### namespace

▸ `Static` **namespace**(`«destructured»`): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespace` | `string` |

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:174](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L174)

___

### namespaceList

▸ `Static` **namespaceList**(`«destructured»`): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`NamespaceFilter`](../interfaces/VersionControlTypes.NamespaceFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:205](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L205)

___

### namespaces

▸ `Static` **namespaces**(`«destructured»`): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `number`[] |

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:163](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L163)

___

### ownership

▸ `Static` **ownership**(): [`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/VersionControlTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:220](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L220)
