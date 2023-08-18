[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryMessage

# Interface: RegistryMessage

## Implemented by

- [`RegistryMessageComposer`](../classes/RegistryMessageComposer.md)

## Table of contents

### Properties

- [addAccount](RegistryMessage.md#addaccount)
- [approveOrRejectModules](RegistryMessage.md#approveorrejectmodules)
- [claimNamespace](RegistryMessage.md#claimnamespace)
- [contractAddress](RegistryMessage.md#contractaddress)
- [proposeModules](RegistryMessage.md#proposemodules)
- [removeModule](RegistryMessage.md#removemodule)
- [removeNamespaces](RegistryMessage.md#removenamespaces)
- [sender](RegistryMessage.md#sender)
- [setFactory](RegistryMessage.md#setfactory)
- [setModuleMetadata](RegistryMessage.md#setmodulemetadata)
- [setModuleMonetization](RegistryMessage.md#setmodulemonetization)
- [updateConfig](RegistryMessage.md#updateconfig)
- [updateOwnership](RegistryMessage.md#updateownership)
- [yankModule](RegistryMessage.md#yankmodule)

## Properties

### addAccount

• **addAccount**: (`__namedParameters`: { `accountBase`: [`AccountBase`](RegistryTypes.AccountBase.md) ; `accountId`: `number`  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](RegistryTypes.AccountBase.md) |
| › `accountId` | `number` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:116](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L116)

___

### approveOrRejectModules

• **approveOrRejectModules**: (`__namedParameters`: { `approves`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] ; `rejects`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[]  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:88](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L88)

___

### claimNamespace

• **claimNamespace**: (`__namedParameters`: { `accountId`: `number` ; `namespace`: `string`  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespace` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:98](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L98)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:44](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L44)

___

### proposeModules

• **proposeModules**: (`__namedParameters`: { `modules`: [[`ModuleInfo`](RegistryTypes.ModuleInfo.md), [`ModuleReference`](../modules/RegistryTypes.md#modulereference)][]  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [[`ModuleInfo`](RegistryTypes.ModuleInfo.md), [`ModuleReference`](../modules/RegistryTypes.md#modulereference)][] |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:62](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L62)

___

### removeModule

• **removeModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:46](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L46)

___

### removeNamespaces

• **removeNamespaces**: (`__namedParameters`: { `namespaces`: `string`[]  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:108](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L108)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:45](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L45)

___

### setFactory

• **setFactory**: (`__namedParameters`: { `newFactory`: `string`  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:136](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L136)

___

### setModuleMetadata

• **setModuleMetadata**: (`__namedParameters`: { `metadata`: `string` ; `module`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `metadata` | `string` |
| › `module` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:78](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L78)

___

### setModuleMonetization

• **setModuleMonetization**: (`__namedParameters`: { `moduleName`: `string` ; `monetization`: [`Monetization`](../modules/RegistryTypes.md#monetization) ; `namespace`: `string`  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/RegistryTypes.md#monetization) |
| › `namespace` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:66](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L66)

___

### updateConfig

• **updateConfig**: (`__namedParameters`: { `allowDirectModuleRegistrationAndUpdates?`: `boolean` ; `namespaceRegistrationFee?`: [`Coin`](RegistryTypes.Coin.md)  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistrationAndUpdates?` | `boolean` |
| › `namespaceRegistrationFee?` | [`Coin`](RegistryTypes.Coin.md) |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:126](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L126)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/RegistryTypes.md#action), `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`action`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/RegistryTypes.md#action) |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:144](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L144)

___

### yankModule

• **yankModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.message-composer.ts:54](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.message-composer.ts#L54)
