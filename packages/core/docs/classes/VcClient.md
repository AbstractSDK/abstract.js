[@abstract-money/core](../README.md) / [Exports](../modules.md) / VcClient

# Class: VcClient

## Hierarchy

- [`VersionControlClient`](VersionControlClient.md)<`this`\> & [`VcQueryClient`](VcQueryClient.md)<`this`\>

  ↳ **`VcClient`**

## Implements

- `IVcClient`

## Table of contents

### Constructors

- [constructor](VcClient.md#constructor)

### Properties

- [client](VcClient.md#client)
- [contractAddress](VcClient.md#contractaddress)
- [sender](VcClient.md#sender)

### Methods

- [accountBase](VcClient.md#accountbase)
- [addAccount](VcClient.md#addaccount)
- [approveOrRejectModules](VcClient.md#approveorrejectmodules)
- [claimNamespaces](VcClient.md#claimnamespaces)
- [config](VcClient.md#config)
- [listModules](VcClient.md#listmodules)
- [module](VcClient.md#module)
- [moduleList](VcClient.md#modulelist)
- [modules](VcClient.md#modules)
- [namespace](VcClient.md#namespace)
- [namespaceList](VcClient.md#namespacelist)
- [namespaces](VcClient.md#namespaces)
- [ownership](VcClient.md#ownership)
- [proposeModules](VcClient.md#proposemodules)
- [removeModule](VcClient.md#removemodule)
- [removeNamespaces](VcClient.md#removenamespaces)
- [setFactory](VcClient.md#setfactory)
- [setModuleMonetization](VcClient.md#setmodulemonetization)
- [updateConfig](VcClient.md#updateconfig)
- [updateOwnership](VcClient.md#updateownership)
- [yankModule](VcClient.md#yankmodule)

## Constructors

### constructor

• **new VcClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

Mixin(VersionControlClient, VcQueryClient).constructor

#### Defined in

[packages/abstractjs/src/clients/VcClient.ts:86](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/VcClient.ts#L86)

## Properties

### client

• **client**: `SigningCosmWasmClient` & `CosmWasmClient`

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).client

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:288](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L288)

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:71](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L71)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

IVcClient.contractAddress

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).contractAddress

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:290](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L290)

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:72](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L72)

___

### sender

• **sender**: `string`

#### Implementation of

IVcClient.sender

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).sender

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:289](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L289)

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

IVcClient.accountBase

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).accountBase

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:87](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L87)

___

### addAccount

▸ **addAccount**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `accountBase` | [`AccountBase`](../interfaces/VersionControlTypes.AccountBase.md) | `undefined` |
| › `accountId` | `number` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.addAccount

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).addAccount

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:483](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L483)

___

### approveOrRejectModules

▸ **approveOrRejectModules**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `approves` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] | `undefined` |
| › `rejects` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.approveOrRejectModules

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).approveOrRejectModules

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:408](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L408)

___

### claimNamespaces

▸ **claimNamespaces**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `accountId` | `number` | `undefined` |
| › `namespaces` | `string`[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.claimNamespaces

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).claimNamespaces

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:434](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L434)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Implementation of

IVcClient.config

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).config

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

IVcClient.listModules

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).listModules

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

IVcClient.module

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).module

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

IVcClient.moduleList

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).moduleList

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

IVcClient.modules

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).modules

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

IVcClient.namespace

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).namespace

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

IVcClient.namespaceList

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).namespaceList

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

IVcClient.namespaces

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).namespaces

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:101](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L101)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/VersionControlTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/VersionControlTypes.OwnershipForString.md)\>

#### Implementation of

IVcClient.ownership

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).ownership

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L154)

___

### proposeModules

▸ **proposeModules**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `modules` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[][] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.proposeModules

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).proposeModules

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:356](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L356)

___

### removeModule

▸ **removeModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `module` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.removeModule

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).removeModule

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:310](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L310)

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
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.removeNamespaces

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).removeNamespaces

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:460](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L460)

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
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.setFactory

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).setFactory

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:538](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L538)

___

### setModuleMonetization

▸ **setModuleMonetization**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `moduleName` | `string` | `undefined` |
| › `monetization` | [`Monetization`](../modules/VersionControlTypes.md#monetization) | `undefined` |
| › `namespace` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.setModuleMonetization

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).setModuleMonetization

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:379](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L379)

___

### updateConfig

▸ **updateConfig**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `allowDirectModuleRegistration?` | `boolean` | `undefined` |
| › `namespaceLimit?` | `number` | `undefined` |
| › `namespaceRegistrationFee?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.updateConfig

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).updateConfig

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:509](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L509)

___

### updateOwnership

▸ **updateOwnership**(`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | [`Action`](../modules/VersionControlTypes.md#action) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.updateOwnership

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).updateOwnership

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:561](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L561)

___

### yankModule

▸ **yankModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `module` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/VersionControlTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IVcClient.yankModule

#### Inherited from

Mixin(VersionControlClient, VcQueryClient).yankModule

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:333](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L333)
