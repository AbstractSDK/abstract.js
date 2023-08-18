[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / VersionControlMessageComposer

# Class: VersionControlMessageComposer

## Implements

- [`VersionControlMessage`](../interfaces/VersionControlMessage.md)

## Table of contents

### Constructors

- [constructor](VersionControlMessageComposer.md#constructor)

### Properties

- [contractAddress](VersionControlMessageComposer.md#contractaddress)
- [sender](VersionControlMessageComposer.md#sender)

### Methods

- [addAccount](VersionControlMessageComposer.md#addaccount)
- [approveOrRejectModules](VersionControlMessageComposer.md#approveorrejectmodules)
- [claimNamespaces](VersionControlMessageComposer.md#claimnamespaces)
- [proposeModules](VersionControlMessageComposer.md#proposemodules)
- [removeModule](VersionControlMessageComposer.md#removemodule)
- [removeNamespaces](VersionControlMessageComposer.md#removenamespaces)
- [setFactory](VersionControlMessageComposer.md#setfactory)
- [setModuleMonetization](VersionControlMessageComposer.md#setmodulemonetization)
- [updateConfig](VersionControlMessageComposer.md#updateconfig)
- [updateOwnership](VersionControlMessageComposer.md#updateownership)
- [yankModule](VersionControlMessageComposer.md#yankmodule)

## Constructors

### constructor

• **new VersionControlMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:147](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L147)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[VersionControlMessage](../interfaces/VersionControlMessage.md).[contractAddress](../interfaces/VersionControlMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:145](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L145)

___

### sender

• **sender**: `string`

#### Implementation of

[VersionControlMessage](../interfaces/VersionControlMessage.md).[sender](../interfaces/VersionControlMessage.md#sender)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:144](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L144)

## Methods

### addAccount

▸ **addAccount**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](../interfaces/VersionControlTypes.AccountBase.md) |
| › `accountId` | `number` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.addAccount

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:336](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L336)

___

### approveOrRejectModules

▸ **approveOrRejectModules**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.approveOrRejectModules

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:261](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L261)

___

### claimNamespaces

▸ **claimNamespaces**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespaces` | `string`[] |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.claimNamespaces

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:287](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L287)

___

### proposeModules

▸ **proposeModules**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[][] |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.proposeModules

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:209](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L209)

___

### removeModule

▸ **removeModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.removeModule

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:163](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L163)

___

### removeNamespaces

▸ **removeNamespaces**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.removeNamespaces

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:313](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L313)

___

### setFactory

▸ **setFactory**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.setFactory

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:391](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L391)

___

### setModuleMonetization

▸ **setModuleMonetization**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/VersionControlTypes.md#monetization) |
| › `namespace` | `string` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.setModuleMonetization

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:232](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L232)

___

### updateConfig

▸ **updateConfig**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistration?` | `boolean` |
| › `namespaceLimit?` | `number` |
| › `namespaceRegistrationFee?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md) |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.updateConfig

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:362](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L362)

___

### updateOwnership

▸ **updateOwnership**(`action`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/VersionControlTypes.md#action) |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.updateOwnership

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:414](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L414)

___

### yankModule

▸ **yankModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

VersionControlMessage.yankModule

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:186](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L186)
