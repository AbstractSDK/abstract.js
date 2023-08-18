[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / VersionControlMessage

# Interface: VersionControlMessage

## Implemented by

- [`VersionControlMessageComposer`](../classes/VersionControlMessageComposer.md)

## Table of contents

### Properties

- [addAccount](VersionControlMessage.md#addaccount)
- [approveOrRejectModules](VersionControlMessage.md#approveorrejectmodules)
- [claimNamespaces](VersionControlMessage.md#claimnamespaces)
- [contractAddress](VersionControlMessage.md#contractaddress)
- [proposeModules](VersionControlMessage.md#proposemodules)
- [removeModule](VersionControlMessage.md#removemodule)
- [removeNamespaces](VersionControlMessage.md#removenamespaces)
- [sender](VersionControlMessage.md#sender)
- [setFactory](VersionControlMessage.md#setfactory)
- [setModuleMonetization](VersionControlMessage.md#setmodulemonetization)
- [updateConfig](VersionControlMessage.md#updateconfig)
- [updateOwnership](VersionControlMessage.md#updateownership)
- [yankModule](VersionControlMessage.md#yankmodule)

## Properties

### addAccount

• **addAccount**: (`__namedParameters`: { `accountBase`: [`AccountBase`](VersionControlTypes.AccountBase.md) ; `accountId`: `number`  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](VersionControlTypes.AccountBase.md) |
| › `accountId` | `number` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:111](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L111)

___

### approveOrRejectModules

• **approveOrRejectModules**: (`__namedParameters`: { `approves`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[] ; `rejects`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[]  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[] |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:83](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L83)

___

### claimNamespaces

• **claimNamespaces**: (`__namedParameters`: { `accountId`: `number` ; `namespaces`: `string`[]  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespaces` | `string`[] |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:93](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L93)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:45](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L45)

___

### proposeModules

• **proposeModules**: (`__namedParameters`: { `modules`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[][]  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[][] |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:63](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L63)

___

### removeModule

• **removeModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:47](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L47)

___

### removeNamespaces

• **removeNamespaces**: (`__namedParameters`: { `namespaces`: `string`[]  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:103](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L103)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:46](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L46)

___

### setFactory

• **setFactory**: (`__namedParameters`: { `newFactory`: `string`  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:133](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L133)

___

### setModuleMonetization

• **setModuleMonetization**: (`__namedParameters`: { `moduleName`: `string` ; `monetization`: [`Monetization`](../modules/VersionControlTypes.md#monetization) ; `namespace`: `string`  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/VersionControlTypes.md#monetization) |
| › `namespace` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:71](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L71)

___

### updateConfig

• **updateConfig**: (`__namedParameters`: { `allowDirectModuleRegistration?`: `boolean` ; `namespaceLimit?`: `number` ; `namespaceRegistrationFee?`: [`Coin`](VersionControlTypes.Coin.md)  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistration?` | `boolean` |
| › `namespaceLimit?` | `number` |
| › `namespaceRegistrationFee?` | [`Coin`](VersionControlTypes.Coin.md) |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:121](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L121)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/VersionControlTypes.md#action), `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`action`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/VersionControlTypes.md#action) |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:141](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L141)

___

### yankModule

• **yankModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)  }, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md) |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts:55](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.message-composer.ts#L55)
