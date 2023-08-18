[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryMessageComposer

# Class: RegistryMessageComposer

## Implements

- [`RegistryMessage`](../interfaces/RegistryMessage.md)

## Table of contents

### Constructors

- [constructor](RegistryMessageComposer.md#constructor)

### Properties

- [contractAddress](RegistryMessageComposer.md#contractaddress)
- [sender](RegistryMessageComposer.md#sender)

### Methods

- [addAccount](RegistryMessageComposer.md#addaccount)
- [approveOrRejectModules](RegistryMessageComposer.md#approveorrejectmodules)
- [claimNamespace](RegistryMessageComposer.md#claimnamespace)
- [proposeModules](RegistryMessageComposer.md#proposemodules)
- [removeModule](RegistryMessageComposer.md#removemodule)
- [removeNamespaces](RegistryMessageComposer.md#removenamespaces)
- [setFactory](RegistryMessageComposer.md#setfactory)
- [setModuleMetadata](RegistryMessageComposer.md#setmodulemetadata)
- [setModuleMonetization](RegistryMessageComposer.md#setmodulemonetization)
- [updateConfig](RegistryMessageComposer.md#updateconfig)
- [updateOwnership](RegistryMessageComposer.md#updateownership)
- [yankModule](RegistryMessageComposer.md#yankmodule)

## Constructors

### constructor

• **new RegistryMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:150](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L150)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[RegistryMessage](../interfaces/RegistryMessage.md).[contractAddress](../interfaces/RegistryMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:148](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L148)

___

### sender

• **sender**: `string`

#### Implementation of

[RegistryMessage](../interfaces/RegistryMessage.md).[sender](../interfaces/RegistryMessage.md#sender)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:147](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L147)

## Methods

### addAccount

▸ **addAccount**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](../interfaces/RegistryTypes.AccountBase.md) |
| › `accountId` | `number` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.addAccount

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:362](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L362)

___

### approveOrRejectModules

▸ **approveOrRejectModules**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.approveOrRejectModules

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:287](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L287)

___

### claimNamespace

▸ **claimNamespace**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespace` | `string` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.claimNamespace

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:313](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L313)

___

### proposeModules

▸ **proposeModules**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [[`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md), [`ModuleReference`](../modules/RegistryTypes.md#modulereference)][] |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.proposeModules

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:213](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L213)

___

### removeModule

▸ **removeModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.removeModule

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:167](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L167)

___

### removeNamespaces

▸ **removeNamespaces**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.removeNamespaces

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:339](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L339)

___

### setFactory

▸ **setFactory**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.setFactory

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:414](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L414)

___

### setModuleMetadata

▸ **setModuleMetadata**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `metadata` | `string` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.setModuleMetadata

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:261](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L261)

___

### setModuleMonetization

▸ **setModuleMonetization**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/RegistryTypes.md#monetization) |
| › `namespace` | `string` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.setModuleMonetization

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:232](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L232)

___

### updateConfig

▸ **updateConfig**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistrationAndUpdates?` | `boolean` |
| › `namespaceRegistrationFee?` | [`Coin`](../interfaces/RegistryTypes.Coin.md) |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.updateConfig

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:388](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L388)

___

### updateOwnership

▸ **updateOwnership**(`action`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/RegistryTypes.md#action) |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.updateOwnership

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:437](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L437)

___

### yankModule

▸ **yankModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

RegistryMessage.yankModule

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:190](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L190)
