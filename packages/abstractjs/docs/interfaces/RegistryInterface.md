[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryInterface

# Interface: RegistryInterface

## Hierarchy

- [`RegistryReadOnlyInterface`](RegistryReadOnlyInterface.md)

  ↳ **`RegistryInterface`**

## Table of contents

### Properties

- [accountBase](RegistryInterface.md#accountbase)
- [addAccount](RegistryInterface.md#addaccount)
- [approveOrRejectModules](RegistryInterface.md#approveorrejectmodules)
- [claimNamespace](RegistryInterface.md#claimnamespace)
- [config](RegistryInterface.md#config)
- [contractAddress](RegistryInterface.md#contractaddress)
- [moduleList](RegistryInterface.md#modulelist)
- [modules](RegistryInterface.md#modules)
- [namespace](RegistryInterface.md#namespace)
- [namespaceList](RegistryInterface.md#namespacelist)
- [namespaces](RegistryInterface.md#namespaces)
- [ownership](RegistryInterface.md#ownership)
- [proposeModules](RegistryInterface.md#proposemodules)
- [removeModule](RegistryInterface.md#removemodule)
- [removeNamespaces](RegistryInterface.md#removenamespaces)
- [sender](RegistryInterface.md#sender)
- [setFactory](RegistryInterface.md#setfactory)
- [setModuleMetadata](RegistryInterface.md#setmodulemetadata)
- [setModuleMonetization](RegistryInterface.md#setmodulemonetization)
- [updateConfig](RegistryInterface.md#updateconfig)
- [updateOwnership](RegistryInterface.md#updateownership)
- [yankModule](RegistryInterface.md#yankmodule)

## Properties

### accountBase

• **accountBase**: (`__namedParameters`: { `accountId`: `number`  }) => `Promise`<[`AccountBaseResponse`](RegistryTypes.AccountBaseResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AccountBaseResponse`](RegistryTypes.AccountBaseResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |

##### Returns

`Promise`<[`AccountBaseResponse`](RegistryTypes.AccountBaseResponse.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[accountBase](RegistryReadOnlyInterface.md#accountbase)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:44](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L44)

___

### addAccount

• **addAccount**: (`__namedParameters`: { `accountBase`: [`AccountBase`](RegistryTypes.AccountBase.md) ; `accountId`: `number`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](RegistryTypes.AccountBase.md) |
| › `accountId` | `number` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:247](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L247)

___

### approveOrRejectModules

• **approveOrRejectModules**: (`__namedParameters`: { `approves`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] ; `rejects`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:213](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L213)

___

### claimNamespace

• **claimNamespace**: (`__namedParameters`: { `accountId`: `number` ; `namespace`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespace` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:225](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L225)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](RegistryTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](RegistryTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](RegistryTypes.ConfigResponse.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[config](RegistryReadOnlyInterface.md#config)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:48](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L48)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[contractAddress](RegistryReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:155](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L155)

___

### moduleList

• **moduleList**: (`__namedParameters`: { `filter?`: [`ModuleFilter`](RegistryTypes.ModuleFilter.md) ; `limit?`: `number` ; `startAfter?`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }) => `Promise`<[`ModulesListResponse`](RegistryTypes.ModulesListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModulesListResponse`](RegistryTypes.ModulesListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ModuleFilter`](RegistryTypes.ModuleFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |

##### Returns

`Promise`<[`ModulesListResponse`](RegistryTypes.ModulesListResponse.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[moduleList](RegistryReadOnlyInterface.md#modulelist)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:49](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L49)

___

### modules

• **modules**: (`__namedParameters`: { `infos`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[]  }) => `Promise`<[`ModulesResponse`](RegistryTypes.ModulesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModulesResponse`](RegistryTypes.ModulesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] |

##### Returns

`Promise`<[`ModulesResponse`](RegistryTypes.ModulesResponse.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[modules](RegistryReadOnlyInterface.md#modules)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:45](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L45)

___

### namespace

• **namespace**: (`__namedParameters`: { `namespace`: `string`  }) => `Promise`<[`NamespaceResponse`](RegistryTypes.NamespaceResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespaceResponse`](RegistryTypes.NamespaceResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespace` | `string` |

##### Returns

`Promise`<[`NamespaceResponse`](RegistryTypes.NamespaceResponse.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[namespace](RegistryReadOnlyInterface.md#namespace)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:47](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L47)

___

### namespaceList

• **namespaceList**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`NamespaceListResponse`](RegistryTypes.NamespaceListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespaceListResponse`](RegistryTypes.NamespaceListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`NamespaceListResponse`](RegistryTypes.NamespaceListResponse.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[namespaceList](RegistryReadOnlyInterface.md#namespacelist)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:58](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L58)

___

### namespaces

• **namespaces**: (`__namedParameters`: { `accounts`: `number`[]  }) => `Promise`<[`NamespacesResponse`](RegistryTypes.NamespacesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespacesResponse`](RegistryTypes.NamespacesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `number`[] |

##### Returns

`Promise`<[`NamespacesResponse`](RegistryTypes.NamespacesResponse.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[namespaces](RegistryReadOnlyInterface.md#namespaces)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:46](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L46)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](RegistryTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](RegistryTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](RegistryTypes.OwnershipForString.md)\>

#### Inherited from

[RegistryReadOnlyInterface](RegistryReadOnlyInterface.md).[ownership](RegistryReadOnlyInterface.md#ownership)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:65](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L65)

___

### proposeModules

• **proposeModules**: (`__namedParameters`: { `modules`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[][]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[][] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:177](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L177)

___

### removeModule

• **removeModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:157](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L157)

___

### removeNamespaces

• **removeNamespaces**: (`__namedParameters`: { `namespaces`: `string`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:237](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L237)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:156](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L156)

___

### setFactory

• **setFactory**: (`__namedParameters`: { `newFactory`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:271](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L271)

___

### setModuleMetadata

• **setModuleMetadata**: (`__namedParameters`: { `metadata`: `string` ; `module`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `metadata` | `string` |
| › `module` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:201](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L201)

___

### setModuleMonetization

• **setModuleMonetization**: (`__namedParameters`: { `moduleName`: `string` ; `monetization`: [`Monetization`](../modules/RegistryTypes.md#monetization) ; `namespace`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/RegistryTypes.md#monetization) |
| › `namespace` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:187](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L187)

___

### updateConfig

• **updateConfig**: (`__namedParameters`: { `allowDirectModuleRegistrationAndUpdates?`: `boolean` ; `namespaceRegistrationFee?`: [`Coin`](RegistryTypes.Coin.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistrationAndUpdates?` | `boolean` |
| › `namespaceRegistrationFee?` | [`Coin`](RegistryTypes.Coin.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:259](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L259)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/RegistryTypes.md#action), `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/RegistryTypes.md#action) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:281](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L281)

___

### yankModule

• **yankModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](RegistryTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](RegistryTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:167](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L167)
