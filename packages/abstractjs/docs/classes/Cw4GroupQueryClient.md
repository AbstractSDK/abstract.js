[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw4GroupQueryClient

# Class: Cw4GroupQueryClient

## Hierarchy

- **`Cw4GroupQueryClient`**

  ↳ [`Cw4GroupClient`](Cw4GroupClient.md)

## Implements

- [`Cw4GroupReadOnlyInterface`](../interfaces/Cw4GroupReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](Cw4GroupQueryClient.md#constructor)

### Properties

- [client](Cw4GroupQueryClient.md#client)
- [contractAddress](Cw4GroupQueryClient.md#contractaddress)

### Methods

- [admin](Cw4GroupQueryClient.md#admin)
- [hooks](Cw4GroupQueryClient.md#hooks)
- [listMembers](Cw4GroupQueryClient.md#listmembers)
- [member](Cw4GroupQueryClient.md#member)
- [totalWeight](Cw4GroupQueryClient.md#totalweight)

## Constructors

### constructor

• **new Cw4GroupQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:39](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L39)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:36](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L36)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw4GroupReadOnlyInterface](../interfaces/Cw4GroupReadOnlyInterface.md).[contractAddress](../interfaces/Cw4GroupReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:37](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L37)

## Methods

### admin

▸ **admin**(): `Promise`<[`AdminResponse`](../interfaces/Cw4GroupTypes.AdminResponse.md)\>

#### Returns

`Promise`<[`AdminResponse`](../interfaces/Cw4GroupTypes.AdminResponse.md)\>

#### Implementation of

Cw4GroupReadOnlyInterface.admin

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L49)

___

### hooks

▸ **hooks**(): `Promise`<[`HooksResponse`](../interfaces/Cw4GroupTypes.HooksResponse.md)\>

#### Returns

`Promise`<[`HooksResponse`](../interfaces/Cw4GroupTypes.HooksResponse.md)\>

#### Implementation of

Cw4GroupReadOnlyInterface.hooks

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:87](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L87)

___

### listMembers

▸ **listMembers**(`«destructured»`): `Promise`<[`ListMembersResponse`](../interfaces/Cw4GroupTypes.ListMembersResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`ListMembersResponse`](../interfaces/Cw4GroupTypes.ListMembersResponse.md)\>

#### Implementation of

Cw4GroupReadOnlyInterface.listMembers

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:59](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L59)

___

### member

▸ **member**(`«destructured»`): `Promise`<[`MemberResponse`](../interfaces/Cw4GroupTypes.MemberResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| › `atHeight?` | `number` |

#### Returns

`Promise`<[`MemberResponse`](../interfaces/Cw4GroupTypes.MemberResponse.md)\>

#### Implementation of

Cw4GroupReadOnlyInterface.member

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:73](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L73)

___

### totalWeight

▸ **totalWeight**(): `Promise`<[`TotalWeightResponse`](../interfaces/Cw4GroupTypes.TotalWeightResponse.md)\>

#### Returns

`Promise`<[`TotalWeightResponse`](../interfaces/Cw4GroupTypes.TotalWeightResponse.md)\>

#### Implementation of

Cw4GroupReadOnlyInterface.totalWeight

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:54](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L54)
