[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryExecuteMsgBuilder

# Class: RegistryExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](RegistryExecuteMsgBuilder.md#constructor)

### Methods

- [addAccount](RegistryExecuteMsgBuilder.md#addaccount)
- [approveOrRejectModules](RegistryExecuteMsgBuilder.md#approveorrejectmodules)
- [claimNamespace](RegistryExecuteMsgBuilder.md#claimnamespace)
- [proposeModules](RegistryExecuteMsgBuilder.md#proposemodules)
- [removeModule](RegistryExecuteMsgBuilder.md#removemodule)
- [removeNamespaces](RegistryExecuteMsgBuilder.md#removenamespaces)
- [setFactory](RegistryExecuteMsgBuilder.md#setfactory)
- [setModuleMetadata](RegistryExecuteMsgBuilder.md#setmodulemetadata)
- [setModuleMonetization](RegistryExecuteMsgBuilder.md#setmodulemonetization)
- [updateConfig](RegistryExecuteMsgBuilder.md#updateconfig)
- [updateOwnership](RegistryExecuteMsgBuilder.md#updateownership)
- [yankModule](RegistryExecuteMsgBuilder.md#yankmodule)

## Constructors

### constructor

• **new RegistryExecuteMsgBuilder**()

## Methods

### addAccount

▸ `Static` **addAccount**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](../interfaces/RegistryTypes.AccountBase.md) |
| › `accountId` | `number` |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:180](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L180)

___

### approveOrRejectModules

▸ `Static` **approveOrRejectModules**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:128](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L128)

___

### claimNamespace

▸ `Static` **claimNamespace**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespace` | `string` |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:146](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L146)

___

### proposeModules

▸ `Static` **proposeModules**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [[`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md), [`ModuleReference`](../modules/RegistryTypes.md#modulereference)][] |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:74](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L74)

___

### removeModule

▸ `Static` **removeModule**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:42](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L42)

___

### removeNamespaces

▸ `Static` **removeNamespaces**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:164](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L164)

___

### setFactory

▸ `Static` **setFactory**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:216](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L216)

___

### setModuleMetadata

▸ `Static` **setModuleMetadata**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `metadata` | `string` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:110](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L110)

___

### setModuleMonetization

▸ `Static` **setModuleMonetization**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/RegistryTypes.md#monetization) |
| › `namespace` | `string` |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:90](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L90)

___

### updateConfig

▸ `Static` **updateConfig**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistrationAndUpdates` | `undefined` \| ``null`` \| `boolean` |
| › `namespaceRegistrationFee` | `undefined` \| ``null`` \| [`Coin`](../interfaces/RegistryTypes.Coin.md) |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:198](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L198)

___

### updateOwnership

▸ `Static` **updateOwnership**(`action`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/RegistryTypes.md#action) |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:232](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L232)

___

### yankModule

▸ `Static` **yankModule**(`«destructured»`): [`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

[`ExecuteMsg`](../modules/RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.msg-builder.ts:58](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.msg-builder.ts#L58)
