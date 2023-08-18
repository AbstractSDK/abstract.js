[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw4GroupReadOnlyInterface

# Interface: Cw4GroupReadOnlyInterface

## Hierarchy

- **`Cw4GroupReadOnlyInterface`**

  ↳ [`Cw4GroupInterface`](Cw4GroupInterface.md)

## Implemented by

- [`Cw4GroupQueryClient`](../classes/Cw4GroupQueryClient.md)

## Table of contents

### Properties

- [admin](Cw4GroupReadOnlyInterface.md#admin)
- [contractAddress](Cw4GroupReadOnlyInterface.md#contractaddress)
- [hooks](Cw4GroupReadOnlyInterface.md#hooks)
- [listMembers](Cw4GroupReadOnlyInterface.md#listmembers)
- [member](Cw4GroupReadOnlyInterface.md#member)
- [totalWeight](Cw4GroupReadOnlyInterface.md#totalweight)

## Properties

### admin

• **admin**: () => `Promise`<[`AdminResponse`](Cw4GroupTypes.AdminResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`AdminResponse`](Cw4GroupTypes.AdminResponse.md)\>

##### Returns

`Promise`<[`AdminResponse`](Cw4GroupTypes.AdminResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:23](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L23)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:22](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L22)

___

### hooks

• **hooks**: () => `Promise`<[`HooksResponse`](Cw4GroupTypes.HooksResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`HooksResponse`](Cw4GroupTypes.HooksResponse.md)\>

##### Returns

`Promise`<[`HooksResponse`](Cw4GroupTypes.HooksResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:33](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L33)

___

### listMembers

• **listMembers**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`ListMembersResponse`](Cw4GroupTypes.ListMembersResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ListMembersResponse`](Cw4GroupTypes.ListMembersResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`ListMembersResponse`](Cw4GroupTypes.ListMembersResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:25](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L25)

___

### member

• **member**: (`__namedParameters`: { `addr`: `string` ; `atHeight?`: `number`  }) => `Promise`<[`MemberResponse`](Cw4GroupTypes.MemberResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`MemberResponse`](Cw4GroupTypes.MemberResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| › `atHeight?` | `number` |

##### Returns

`Promise`<[`MemberResponse`](Cw4GroupTypes.MemberResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:32](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L32)

___

### totalWeight

• **totalWeight**: () => `Promise`<[`TotalWeightResponse`](Cw4GroupTypes.TotalWeightResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`TotalWeightResponse`](Cw4GroupTypes.TotalWeightResponse.md)\>

##### Returns

`Promise`<[`TotalWeightResponse`](Cw4GroupTypes.TotalWeightResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:24](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L24)
