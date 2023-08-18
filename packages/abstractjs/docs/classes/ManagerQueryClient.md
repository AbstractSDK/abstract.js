[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ManagerQueryClient

# Class: ManagerQueryClient

## Hierarchy

- **`ManagerQueryClient`**

  ↳ [`ManagerClient`](ManagerClient.md)

## Implements

- [`ManagerReadOnlyInterface`](../interfaces/ManagerReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](ManagerQueryClient.md#constructor)

### Properties

- [client](ManagerQueryClient.md#client)
- [contractAddress](ManagerQueryClient.md#contractaddress)

### Methods

- [config](ManagerQueryClient.md#config)
- [info](ManagerQueryClient.md#info)
- [moduleAddresses](ManagerQueryClient.md#moduleaddresses)
- [moduleInfos](ManagerQueryClient.md#moduleinfos)
- [moduleVersions](ManagerQueryClient.md#moduleversions)
- [ownership](ManagerQueryClient.md#ownership)

## Constructors

### constructor

• **new ManagerQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:57](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L57)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:54](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L54)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[ManagerReadOnlyInterface](../interfaces/ManagerReadOnlyInterface.md).[contractAddress](../interfaces/ManagerReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:55](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L55)

## Methods

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/ManagerTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/ManagerTypes.ConfigResponse.md)\>

#### Implementation of

ManagerReadOnlyInterface.config

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:96](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L96)

___

### info

▸ **info**(): `Promise`<[`InfoResponse`](../interfaces/ManagerTypes.InfoResponse.md)\>

#### Returns

`Promise`<[`InfoResponse`](../interfaces/ManagerTypes.InfoResponse.md)\>

#### Implementation of

ManagerReadOnlyInterface.info

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:101](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L101)

___

### moduleAddresses

▸ **moduleAddresses**(`«destructured»`): `Promise`<[`ModuleAddressesResponse`](../interfaces/ManagerTypes.ModuleAddressesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

#### Returns

`Promise`<[`ModuleAddressesResponse`](../interfaces/ManagerTypes.ModuleAddressesResponse.md)\>

#### Implementation of

ManagerReadOnlyInterface.moduleAddresses

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:75](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L75)

___

### moduleInfos

▸ **moduleInfos**(`«destructured»`): `Promise`<[`ModuleInfosResponse`](../interfaces/ManagerTypes.ModuleInfosResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`ModuleInfosResponse`](../interfaces/ManagerTypes.ModuleInfosResponse.md)\>

#### Implementation of

ManagerReadOnlyInterface.moduleInfos

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:82](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L82)

___

### moduleVersions

▸ **moduleVersions**(`«destructured»`): `Promise`<[`ModuleVersionsResponse`](../interfaces/ManagerTypes.ModuleVersionsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

#### Returns

`Promise`<[`ModuleVersionsResponse`](../interfaces/ManagerTypes.ModuleVersionsResponse.md)\>

#### Implementation of

ManagerReadOnlyInterface.moduleVersions

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L68)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/ManagerTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/ManagerTypes.OwnershipForString.md)\>

#### Implementation of

ManagerReadOnlyInterface.ownership

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:106](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L106)
