[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / VersionControlQueryClient

# Class: VersionControlQueryClient

## Hierarchy

- **`VersionControlQueryClient`**

  ↳ [`VersionControlClient`](VersionControlClient.md)

  ↳ [`VcQueryClient`](VcQueryClient.md)

## Implements

- [`VersionControlReadOnlyInterface`](../interfaces/VersionControlReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](VersionControlQueryClient.md#constructor)

### Properties

- [client](VersionControlQueryClient.md#client)
- [contractAddress](VersionControlQueryClient.md#contractaddress)

### Methods

- [accountBase](VersionControlQueryClient.md#accountbase)
- [config](VersionControlQueryClient.md#config)
- [moduleList](VersionControlQueryClient.md#modulelist)
- [modules](VersionControlQueryClient.md#modules)
- [namespace](VersionControlQueryClient.md#namespace)
- [namespaceList](VersionControlQueryClient.md#namespacelist)
- [namespaces](VersionControlQueryClient.md#namespaces)
- [ownership](VersionControlQueryClient.md#ownership)

## Constructors

### constructor

• **new VersionControlQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L74)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:71](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L71)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[VersionControlReadOnlyInterface](../interfaces/VersionControlReadOnlyInterface.md).[contractAddress](../interfaces/VersionControlReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:72](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L72)

## Methods

### accountBase

▸ **accountBase**(`«destructured»`): `Promise`<[`AccountBaseResponse`](../interfaces/VersionControlTypes.AccountBaseResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |

#### Returns

`Promise`<[`AccountBaseResponse`](../interfaces/VersionControlTypes.AccountBaseResponse.md)\>

#### Implementation of

VersionControlReadOnlyInterface.accountBase

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:87](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L87)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Implementation of

VersionControlReadOnlyInterface.config

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L115)

___

### moduleList

▸ **moduleList**(`«destructured»`): `Promise`<[`ModulesListResponse`](../interfaces/VersionControlTypes.ModulesListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ModuleFilter`](../interfaces/VersionControlTypes.ModuleFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`ModulesListResponse`](../interfaces/VersionControlTypes.ModulesListResponse.md)\>

#### Implementation of

VersionControlReadOnlyInterface.moduleList

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:120](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L120)

___

### modules

▸ **modules**(`«destructured»`): `Promise`<[`ModulesResponse`](../interfaces/VersionControlTypes.ModulesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] |

#### Returns

`Promise`<[`ModulesResponse`](../interfaces/VersionControlTypes.ModulesResponse.md)\>

#### Implementation of

VersionControlReadOnlyInterface.modules

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:94](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L94)

___

### namespace

▸ **namespace**(`«destructured»`): `Promise`<[`NamespaceResponse`](../interfaces/VersionControlTypes.NamespaceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespace` | `string` |

#### Returns

`Promise`<[`NamespaceResponse`](../interfaces/VersionControlTypes.NamespaceResponse.md)\>

#### Implementation of

VersionControlReadOnlyInterface.namespace

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:108](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L108)

___

### namespaceList

▸ **namespaceList**(`«destructured»`): `Promise`<[`NamespaceListResponse`](../interfaces/VersionControlTypes.NamespaceListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`NamespaceFilter`](../interfaces/VersionControlTypes.NamespaceFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`NamespaceListResponse`](../interfaces/VersionControlTypes.NamespaceListResponse.md)\>

#### Implementation of

VersionControlReadOnlyInterface.namespaceList

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:137](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L137)

___

### namespaces

▸ **namespaces**(`«destructured»`): `Promise`<[`NamespacesResponse`](../interfaces/VersionControlTypes.NamespacesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `number`[] |

#### Returns

`Promise`<[`NamespacesResponse`](../interfaces/VersionControlTypes.NamespacesResponse.md)\>

#### Implementation of

VersionControlReadOnlyInterface.namespaces

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:101](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L101)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/VersionControlTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/VersionControlTypes.OwnershipForString.md)\>

#### Implementation of

VersionControlReadOnlyInterface.ownership

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L154)
