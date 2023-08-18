[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryClient

# Class: RegistryClient

## Hierarchy

- `RegistryClient`<`this`\> & [`RegistryQueryClient`](RegistryQueryClient.md)<`this`\>

  ↳ **`RegistryClient`**

## Implements

- `IVcClient`

## Table of contents

### Constructors

- [constructor](RegistryClient.md#constructor)

### Properties

- [\_moduleCache](RegistryClient.md#_modulecache)
- [client](RegistryClient.md#client)
- [contractAddress](RegistryClient.md#contractaddress)
- [sender](RegistryClient.md#sender)

### Methods

- [\_cacheModule](RegistryClient.md#_cachemodule)
- [\_getCachedModule](RegistryClient.md#_getcachedmodule)
- [\_getOrSetModule](RegistryClient.md#_getorsetmodule)
- [accountBase](RegistryClient.md#accountbase)
- [addAccount](RegistryClient.md#addaccount)
- [approveOrRejectModules](RegistryClient.md#approveorrejectmodules)
- [claimNamespace](RegistryClient.md#claimnamespace)
- [config](RegistryClient.md#config)
- [listModules](RegistryClient.md#listmodules)
- [module](RegistryClient.md#module)
- [moduleList](RegistryClient.md#modulelist)
- [modules](RegistryClient.md#modules)
- [namespace](RegistryClient.md#namespace)
- [namespaceList](RegistryClient.md#namespacelist)
- [namespaces](RegistryClient.md#namespaces)
- [ownership](RegistryClient.md#ownership)
- [proposeModules](RegistryClient.md#proposemodules)
- [removeModule](RegistryClient.md#removemodule)
- [removeNamespaces](RegistryClient.md#removenamespaces)
- [setFactory](RegistryClient.md#setfactory)
- [setModuleMetadata](RegistryClient.md#setmodulemetadata)
- [setModuleMonetization](RegistryClient.md#setmodulemonetization)
- [updateConfig](RegistryClient.md#updateconfig)
- [updateOwnership](RegistryClient.md#updateownership)
- [yankModule](RegistryClient.md#yankmodule)

## Constructors

### constructor

• **new RegistryClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

Mixin(ARegistryClient, RegistryQueryClient).constructor

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:141](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L141)

## Properties

### \_moduleCache

• `Protected` **\_moduleCache**: `Map`<`string`, [`AbstractModule`](AbstractModule.md)\>

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).\_moduleCache

#### Defined in

[packages/abstractjs/src/native/registry/RegistryClient.ts:40](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/RegistryClient.ts#L40)

___

### client

• **client**: `SigningCosmWasmClient` & `CosmWasmClient`

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).client

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:289](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L289)

[packages/abstractjs/src/native/registry/Registry.client.ts:68](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L68)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

IVcClient.contractAddress

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).contractAddress

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:291](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L291)

[packages/abstractjs/src/native/registry/Registry.client.ts:69](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L69)

___

### sender

• **sender**: `string`

#### Implementation of

IVcClient.sender

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).sender

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:290](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L290)

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

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).\_cacheModule

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

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).\_getCachedModule

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

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).\_getOrSetModule

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

IVcClient.accountBase

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).accountBase

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:84](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L84)

___

### addAccount

▸ **addAccount**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `accountBase` | [`AccountBase`](../interfaces/RegistryTypes.AccountBase.md) | `undefined` |
| › `accountId` | `number` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.addAccount

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).addAccount

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:511](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L511)

___

### approveOrRejectModules

▸ **approveOrRejectModules**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `approves` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] | `undefined` |
| › `rejects` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.approveOrRejectModules

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).approveOrRejectModules

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:436](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L436)

___

### claimNamespace

▸ **claimNamespace**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `accountId` | `number` | `undefined` |
| › `namespace` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.claimNamespace

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).claimNamespace

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:462](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L462)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/RegistryTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/RegistryTypes.ConfigResponse.md)\>

#### Implementation of

IVcClient.config

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).config

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

IVcClient.listModules

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).listModules

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

IVcClient.module

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).module

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

IVcClient.moduleList

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).moduleList

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

IVcClient.modules

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).modules

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

IVcClient.namespace

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).namespace

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

IVcClient.namespaceList

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).namespaceList

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

IVcClient.namespaces

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).namespaces

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:98](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L98)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/RegistryTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/RegistryTypes.OwnershipForString.md)\>

#### Implementation of

IVcClient.ownership

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).ownership

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:148](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L148)

___

### proposeModules

▸ **proposeModules**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `modules` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[][] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.proposeModules

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).proposeModules

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:358](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L358)

___

### removeModule

▸ **removeModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.removeModule

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).removeModule

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:312](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L312)

___

### removeNamespaces

▸ **removeNamespaces**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `namespaces` | `string`[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.removeNamespaces

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).removeNamespaces

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:488](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L488)

___

### setFactory

▸ **setFactory**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `newFactory` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.setFactory

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).setFactory

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:563](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L563)

___

### setModuleMetadata

▸ **setModuleMetadata**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `metadata` | `string` | `undefined` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.setModuleMetadata

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).setModuleMetadata

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:410](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L410)

___

### setModuleMonetization

▸ **setModuleMonetization**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `moduleName` | `string` | `undefined` |
| › `monetization` | [`Monetization`](../modules/RegistryTypes.md#monetization) | `undefined` |
| › `namespace` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.setModuleMonetization

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).setModuleMonetization

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:381](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L381)

___

### updateConfig

▸ **updateConfig**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `allowDirectModuleRegistrationAndUpdates?` | `boolean` | `undefined` |
| › `namespaceRegistrationFee?` | [`Coin`](../interfaces/RegistryTypes.Coin.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.updateConfig

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).updateConfig

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:537](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L537)

___

### updateOwnership

▸ **updateOwnership**(`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | [`Action`](../modules/RegistryTypes.md#action) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.updateOwnership

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).updateOwnership

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:586](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L586)

___

### yankModule

▸ **yankModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `module` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/RegistryTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.yankModule

#### Inherited from

Mixin(ARegistryClient, RegistryQueryClient).yankModule

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:335](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L335)
