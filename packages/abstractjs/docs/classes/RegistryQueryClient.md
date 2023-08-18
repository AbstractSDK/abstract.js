[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryQueryClient

# Class: RegistryQueryClient

## Hierarchy

- `RegistryQueryClient`

  ↳ **`RegistryQueryClient`**

## Implements

- `IRegistryQueryClient`

## Table of contents

### Constructors

- [constructor](RegistryQueryClient.md#constructor)

### Properties

- [\_moduleCache](RegistryQueryClient.md#_modulecache)
- [client](RegistryQueryClient.md#client)
- [contractAddress](RegistryQueryClient.md#contractaddress)

### Methods

- [\_cacheModule](RegistryQueryClient.md#_cachemodule)
- [\_getCachedModule](RegistryQueryClient.md#_getcachedmodule)
- [\_getOrSetModule](RegistryQueryClient.md#_getorsetmodule)
- [accountBase](RegistryQueryClient.md#accountbase)
- [config](RegistryQueryClient.md#config)
- [listModules](RegistryQueryClient.md#listmodules)
- [module](RegistryQueryClient.md#module)
- [moduleList](RegistryQueryClient.md#modulelist)
- [modules](RegistryQueryClient.md#modules)
- [namespace](RegistryQueryClient.md#namespace)
- [namespaceList](RegistryQueryClient.md#namespacelist)
- [namespaces](RegistryQueryClient.md#namespaces)
- [ownership](RegistryQueryClient.md#ownership)

## Constructors

### constructor

• **new RegistryQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Overrides

ARegistryQueryClient.constructor

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:42](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L42)

## Properties

### \_moduleCache

• `Protected` **\_moduleCache**: `Map`<`string`, [`AbstractModule`](AbstractModule.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:40](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L40)

___

### client

• **client**: `CosmWasmClient`

#### Inherited from

ARegistryQueryClient.client

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:68](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L68)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

IRegistryQueryClient.contractAddress

#### Inherited from

ARegistryQueryClient.contractAddress

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:69](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L69)

## Methods

### \_cacheModule

▸ `Protected` **_cacheModule**(`module`): `void`

Store a module in the class' cache.

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | [`AbstractModule`](AbstractModule.md) |

#### Returns

`void`

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:53](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L53)

___

### \_getCachedModule

▸ `Protected` **_getCachedModule**(`moduleInfo`): `undefined` \| [`AbstractModule`](AbstractModule.md)

Retrieve a module from the class' cache.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleInfo` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

`undefined` \| [`AbstractModule`](AbstractModule.md)

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:61](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L61)

___

### \_getOrSetModule

▸ **_getOrSetModule**(`moduleInfo`, `getter`): `Promise`<[`AbstractModule`](AbstractModule.md)\>

Retrieve a module from the cache or do a callback to retrieve the module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleInfo` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |
| `getter` | () => `Promise`<[`AbstractModule`](AbstractModule.md)\> |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:74](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L74)

___

### accountBase

▸ **accountBase**(`«destructured»`): `Promise`<[`AccountBaseResponse`](../interfaces/RegistryTypes.AccountBaseResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |

#### Returns

`Promise`<[`AccountBaseResponse`](../interfaces/RegistryTypes.AccountBaseResponse.md)\>

#### Implementation of

IRegistryQueryClient.accountBase

#### Inherited from

ARegistryQueryClient.accountBase

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:84](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L84)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/RegistryTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/RegistryTypes.ConfigResponse.md)\>

#### Implementation of

IRegistryQueryClient.config

#### Inherited from

ARegistryQueryClient.config

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:112](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L112)

___

### listModules

▸ **listModules**(`«destructured»`): `Promise`<[`AbstractModule`](AbstractModule.md)[]\>

List all modules in Version control.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | [`ModuleFilter`](../interfaces/RegistryTypes.ModuleFilter.md) |
| › `startAfter` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)[]\>

#### Implementation of

IRegistryQueryClient.listModules

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:101](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L101)

___

### module

▸ **module**(`moduleInfo`): `Promise`<[`AbstractModule`](AbstractModule.md)\>

Retrieve a module by its info.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleInfo` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Implementation of

IRegistryQueryClient.module

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:91](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L91)

___

### moduleList

▸ **moduleList**(`«destructured»`): `Promise`<[`ModulesListResponse`](../interfaces/RegistryTypes.ModulesListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ModuleFilter`](../interfaces/RegistryTypes.ModuleFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`ModulesListResponse`](../interfaces/RegistryTypes.ModulesListResponse.md)\>

#### Implementation of

IRegistryQueryClient.moduleList

#### Inherited from

ARegistryQueryClient.moduleList

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:117](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L117)

___

### modules

▸ **modules**(`«destructured»`): `Promise`<[`ModulesResponse`](../interfaces/RegistryTypes.ModulesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] |

#### Returns

`Promise`<[`ModulesResponse`](../interfaces/RegistryTypes.ModulesResponse.md)\>

#### Implementation of

IRegistryQueryClient.modules

#### Inherited from

ARegistryQueryClient.modules

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:91](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L91)

___

### namespace

▸ **namespace**(`«destructured»`): `Promise`<[`NamespaceResponse`](../interfaces/RegistryTypes.NamespaceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespace` | `string` |

#### Returns

`Promise`<[`NamespaceResponse`](../interfaces/RegistryTypes.NamespaceResponse.md)\>

#### Implementation of

IRegistryQueryClient.namespace

#### Inherited from

ARegistryQueryClient.namespace

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:105](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L105)

___

### namespaceList

▸ **namespaceList**(`«destructured»`): `Promise`<[`NamespaceListResponse`](../interfaces/RegistryTypes.NamespaceListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`NamespaceListResponse`](../interfaces/RegistryTypes.NamespaceListResponse.md)\>

#### Implementation of

IRegistryQueryClient.namespaceList

#### Inherited from

ARegistryQueryClient.namespaceList

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:134](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L134)

___

### namespaces

▸ **namespaces**(`«destructured»`): `Promise`<[`NamespacesResponse`](../interfaces/RegistryTypes.NamespacesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `number`[] |

#### Returns

`Promise`<[`NamespacesResponse`](../interfaces/RegistryTypes.NamespacesResponse.md)\>

#### Implementation of

IRegistryQueryClient.namespaces

#### Inherited from

ARegistryQueryClient.namespaces

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:98](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L98)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/RegistryTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/RegistryTypes.OwnershipForString.md)\>

#### Implementation of

IRegistryQueryClient.ownership

#### Inherited from

ARegistryQueryClient.ownership

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:148](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L148)
