[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / VcQueryClient

# Class: VcQueryClient

## Hierarchy

- [`VersionControlQueryClient`](VersionControlQueryClient.md)

  ↳ **`VcQueryClient`**

## Implements

- `IVcQueryClient`

## Table of contents

### Constructors

- [constructor](VcQueryClient.md#constructor)

### Properties

- [client](VcQueryClient.md#client)
- [contractAddress](VcQueryClient.md#contractaddress)

### Methods

- [accountBase](VcQueryClient.md#accountbase)
- [config](VcQueryClient.md#config)
- [listModules](VcQueryClient.md#listmodules)
- [module](VcQueryClient.md#module)
- [moduleList](VcQueryClient.md#modulelist)
- [modules](VcQueryClient.md#modules)
- [namespace](VcQueryClient.md#namespace)
- [namespaceList](VcQueryClient.md#namespacelist)
- [namespaces](VcQueryClient.md#namespaces)
- [ownership](VcQueryClient.md#ownership)

## Constructors

### constructor

• **new VcQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Overrides

[VersionControlQueryClient](VersionControlQueryClient.md).[constructor](VersionControlQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/clients/VcClient.ts:40](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/VcClient.ts#L40)

## Properties

### client

• **client**: `CosmWasmClient`

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[client](VersionControlQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:71](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L71)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

IVcQueryClient.contractAddress

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[contractAddress](VersionControlQueryClient.md#contractaddress)

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

IVcQueryClient.accountBase

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[accountBase](VersionControlQueryClient.md#accountbase)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:87](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L87)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Implementation of

IVcQueryClient.config

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[config](VersionControlQueryClient.md#config)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L115)

___

### listModules

▸ **listModules**(`«destructured»`): `Promise`<[`Module`](../interfaces/VersionControlTypes.Module.md)[]\>

List all modules in Version control.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | [`ModuleFilter`](../interfaces/VersionControlTypes.ModuleFilter.md) |
| › `startAfter` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`Module`](../interfaces/VersionControlTypes.Module.md)[]\>

#### Implementation of

IVcQueryClient.listModules

#### Defined in

[packages/abstractjs/src/clients/VcClient.ts:53](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/VcClient.ts#L53)

___

### module

▸ **module**(`moduleInfo`): `Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleInfo` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Implementation of

IVcQueryClient.module

#### Defined in

[packages/abstractjs/src/clients/VcClient.ts:46](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/VcClient.ts#L46)

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

IVcQueryClient.moduleList

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[moduleList](VersionControlQueryClient.md#modulelist)

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

IVcQueryClient.modules

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[modules](VersionControlQueryClient.md#modules)

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

IVcQueryClient.namespace

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[namespace](VersionControlQueryClient.md#namespace)

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

IVcQueryClient.namespaceList

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[namespaceList](VersionControlQueryClient.md#namespacelist)

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

IVcQueryClient.namespaces

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[namespaces](VersionControlQueryClient.md#namespaces)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:101](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L101)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/VersionControlTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/VersionControlTypes.OwnershipForString.md)\>

#### Implementation of

IVcQueryClient.ownership

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[ownership](VersionControlQueryClient.md#ownership)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L154)
