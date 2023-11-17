[@abstract-money/core](../README.md) / [Exports](../modules.md) / VersionControlClient

# Class: VersionControlClient

## Hierarchy

- [`VersionControlQueryClient`](VersionControlQueryClient.md)

  ↳ **`VersionControlClient`**

## Implements

- [`VersionControlInterface`](../interfaces/VersionControlInterface.md)

## Table of contents

### Constructors

- [constructor](VersionControlClient.md#constructor)

### Properties

- [client](VersionControlClient.md#client)
- [contractAddress](VersionControlClient.md#contractaddress)
- [sender](VersionControlClient.md#sender)

### Methods

- [accountBase](VersionControlClient.md#accountbase)
- [addAccount](VersionControlClient.md#addaccount)
- [approveOrRejectModules](VersionControlClient.md#approveorrejectmodules)
- [claimNamespaces](VersionControlClient.md#claimnamespaces)
- [config](VersionControlClient.md#config)
- [moduleList](VersionControlClient.md#modulelist)
- [modules](VersionControlClient.md#modules)
- [namespace](VersionControlClient.md#namespace)
- [namespaceList](VersionControlClient.md#namespacelist)
- [namespaces](VersionControlClient.md#namespaces)
- [ownership](VersionControlClient.md#ownership)
- [proposeModules](VersionControlClient.md#proposemodules)
- [removeModule](VersionControlClient.md#removemodule)
- [removeNamespaces](VersionControlClient.md#removenamespaces)
- [setFactory](VersionControlClient.md#setfactory)
- [setModuleMonetization](VersionControlClient.md#setmodulemonetization)
- [updateConfig](VersionControlClient.md#updateconfig)
- [updateOwnership](VersionControlClient.md#updateownership)
- [yankModule](VersionControlClient.md#yankmodule)

## Constructors

### constructor

• **new VersionControlClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[VersionControlQueryClient](VersionControlQueryClient.md).[constructor](VersionControlQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:292](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L292)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[VersionControlQueryClient](VersionControlQueryClient.md).[client](VersionControlQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:288](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L288)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[VersionControlInterface](../interfaces/VersionControlInterface.md).[contractAddress](../interfaces/VersionControlInterface.md#contractaddress)

#### Overrides

[VersionControlQueryClient](VersionControlQueryClient.md).[contractAddress](VersionControlQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:290](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L290)

___

### sender

• **sender**: `string`

#### Implementation of

[VersionControlInterface](../interfaces/VersionControlInterface.md).[sender](../interfaces/VersionControlInterface.md#sender)

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

VersionControlInterface.accountBase

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[accountBase](VersionControlQueryClient.md#accountbase)

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

VersionControlInterface.addAccount

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

VersionControlInterface.approveOrRejectModules

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

VersionControlInterface.claimNamespaces

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:434](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L434)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/VersionControlTypes.ConfigResponse.md)\>

#### Implementation of

VersionControlInterface.config

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[config](VersionControlQueryClient.md#config)

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

VersionControlInterface.moduleList

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

VersionControlInterface.modules

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

VersionControlInterface.namespace

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

VersionControlInterface.namespaceList

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

VersionControlInterface.namespaces

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

VersionControlInterface.ownership

#### Inherited from

[VersionControlQueryClient](VersionControlQueryClient.md).[ownership](VersionControlQueryClient.md#ownership)

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

VersionControlInterface.proposeModules

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

VersionControlInterface.removeModule

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

VersionControlInterface.removeNamespaces

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

VersionControlInterface.setFactory

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

VersionControlInterface.setModuleMonetization

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

VersionControlInterface.updateConfig

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

VersionControlInterface.updateOwnership

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

VersionControlInterface.yankModule

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:333](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L333)
