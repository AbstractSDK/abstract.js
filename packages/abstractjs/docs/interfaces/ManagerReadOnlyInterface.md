[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ManagerReadOnlyInterface

# Interface: ManagerReadOnlyInterface

## Hierarchy

- **`ManagerReadOnlyInterface`**

  ↳ [`ManagerInterface`](ManagerInterface.md)

## Implemented by

- [`ManagerQueryClient`](../classes/ManagerQueryClient.md)

## Table of contents

### Properties

- [config](ManagerReadOnlyInterface.md#config)
- [contractAddress](ManagerReadOnlyInterface.md#contractaddress)
- [info](ManagerReadOnlyInterface.md#info)
- [moduleAddresses](ManagerReadOnlyInterface.md#moduleaddresses)
- [moduleInfos](ManagerReadOnlyInterface.md#moduleinfos)
- [moduleVersions](ManagerReadOnlyInterface.md#moduleversions)
- [ownership](ManagerReadOnlyInterface.md#ownership)

## Properties

### config

• **config**: () => `Promise`<[`ConfigResponse`](ManagerTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](ManagerTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](ManagerTypes.ConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:49](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.client.ts#L49)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:39](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.client.ts#L39)

___

### info

• **info**: () => `Promise`<[`InfoResponse`](ManagerTypes.InfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`InfoResponse`](ManagerTypes.InfoResponse.md)\>

##### Returns

`Promise`<[`InfoResponse`](ManagerTypes.InfoResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:50](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.client.ts#L50)

___

### moduleAddresses

• **moduleAddresses**: (`__namedParameters`: { `ids`: `string`[]  }) => `Promise`<[`ModuleAddressesResponse`](ManagerTypes.ModuleAddressesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModuleAddressesResponse`](ManagerTypes.ModuleAddressesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

##### Returns

`Promise`<[`ModuleAddressesResponse`](ManagerTypes.ModuleAddressesResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:41](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.client.ts#L41)

___

### moduleInfos

• **moduleInfos**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`ModuleInfosResponse`](ManagerTypes.ModuleInfosResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModuleInfosResponse`](ManagerTypes.ModuleInfosResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`ModuleInfosResponse`](ManagerTypes.ModuleInfosResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:42](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.client.ts#L42)

___

### moduleVersions

• **moduleVersions**: (`__namedParameters`: { `ids`: `string`[]  }) => `Promise`<[`ModuleVersionsResponse`](ManagerTypes.ModuleVersionsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModuleVersionsResponse`](ManagerTypes.ModuleVersionsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

##### Returns

`Promise`<[`ModuleVersionsResponse`](ManagerTypes.ModuleVersionsResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:40](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.client.ts#L40)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](ManagerTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](ManagerTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](ManagerTypes.OwnershipForString.md)\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:51](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.client.ts#L51)
