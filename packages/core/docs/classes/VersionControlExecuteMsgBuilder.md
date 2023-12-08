[@abstract-money/core](../README.md) / [Exports](../modules.md) / RegistryExecuteMsgBuilder

# Class: RegistryExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](RegistryExecuteMsgBuilder.md#constructor)

### Methods

- [addAccount](RegistryExecuteMsgBuilder.md#addaccount)
- [approveOrRejectModules](RegistryExecuteMsgBuilder.md#approveorrejectmodules)
- [claimNamespaces](RegistryExecuteMsgBuilder.md#claimnamespaces)
- [proposeModules](RegistryExecuteMsgBuilder.md#proposemodules)
- [removeModule](RegistryExecuteMsgBuilder.md#removemodule)
- [removeNamespaces](RegistryExecuteMsgBuilder.md#removenamespaces)
- [setFactory](RegistryExecuteMsgBuilder.md#setfactory)
- [setModuleMonetization](RegistryExecuteMsgBuilder.md#setmodulemonetization)
- [updateConfig](RegistryExecuteMsgBuilder.md#updateconfig)
- [updateOwnership](RegistryExecuteMsgBuilder.md#updateownership)
- [yankModule](RegistryExecuteMsgBuilder.md#yankmodule)

## Constructors

### constructor

• **new RegistryExecuteMsgBuilder**()

## Methods

### addAccount

▸ `Static` **addAccount**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](../interfaces/VersionControlTypes.AccountBase.md) |
| › `accountId` | `number` |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:95](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L95)

___

### approveOrRejectModules

▸ `Static` **approveOrRejectModules**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:58](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L58)

___

### claimNamespaces

▸ `Static` **claimNamespaces**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespaces` | `string`[] |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:71](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L71)

___

### proposeModules

▸ `Static` **proposeModules**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [[`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md), [`ModuleReference`](../modules/VersionControlTypes.md#modulereference)][] |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:32](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L32)

___

### removeModule

▸ `Static` **removeModule**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:10](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L10)

___

### removeNamespaces

▸ `Static` **removeNamespaces**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:84](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L84)

___

### setFactory

▸ `Static` **setFactory**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:123](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L123)

___

### setModuleMonetization

▸ `Static` **setModuleMonetization**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/VersionControlTypes.md#monetization) |
| › `namespace` | `string` |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:43](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L43)

___

### updateConfig

▸ `Static` **updateConfig**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistration` | `undefined` \| ``null`` \| `boolean` |
| › `namespaceLimit` | `undefined` \| ``null`` \| `number` |
| › `namespaceRegistrationFee` | `undefined` \| ``null`` \| [`Coin`](../interfaces/VersionControlTypes.Coin.md) |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:108](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L108)

___

### updateOwnership

▸ `Static` **updateOwnership**(`action`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/VersionControlTypes.md#action) |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:134](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L134)

___

### yankModule

▸ `Static` **yankModule**(`«destructured»`): [`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

[`ExecuteMsg`](../modules/VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts:21](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.msg-builder.ts#L21)
