[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw4GroupInterface

# Interface: Cw4GroupInterface

## Hierarchy

- [`Cw4GroupReadOnlyInterface`](Cw4GroupReadOnlyInterface.md)

  ↳ **`Cw4GroupInterface`**

## Implemented by

- [`Cw4GroupClient`](../classes/Cw4GroupClient.md)

## Table of contents

### Properties

- [addHook](Cw4GroupInterface.md#addhook)
- [admin](Cw4GroupInterface.md#admin)
- [contractAddress](Cw4GroupInterface.md#contractaddress)
- [hooks](Cw4GroupInterface.md#hooks)
- [listMembers](Cw4GroupInterface.md#listmembers)
- [member](Cw4GroupInterface.md#member)
- [removeHook](Cw4GroupInterface.md#removehook)
- [sender](Cw4GroupInterface.md#sender)
- [totalWeight](Cw4GroupInterface.md#totalweight)
- [updateAdmin](Cw4GroupInterface.md#updateadmin)
- [updateMembers](Cw4GroupInterface.md#updatemembers)

## Properties

### addHook

• **addHook**: (`__namedParameters`: { `addr`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:118](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L118)

___

### admin

• **admin**: () => `Promise`<[`AdminResponse`](Cw4GroupTypes.AdminResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`AdminResponse`](Cw4GroupTypes.AdminResponse.md)\>

##### Returns

`Promise`<[`AdminResponse`](Cw4GroupTypes.AdminResponse.md)\>

#### Inherited from

[Cw4GroupReadOnlyInterface](Cw4GroupReadOnlyInterface.md).[admin](Cw4GroupReadOnlyInterface.md#admin)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:23](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L23)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[Cw4GroupReadOnlyInterface](Cw4GroupReadOnlyInterface.md).[contractAddress](Cw4GroupReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:94](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L94)

___

### hooks

• **hooks**: () => `Promise`<[`HooksResponse`](Cw4GroupTypes.HooksResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`HooksResponse`](Cw4GroupTypes.HooksResponse.md)\>

##### Returns

`Promise`<[`HooksResponse`](Cw4GroupTypes.HooksResponse.md)\>

#### Inherited from

[Cw4GroupReadOnlyInterface](Cw4GroupReadOnlyInterface.md).[hooks](Cw4GroupReadOnlyInterface.md#hooks)

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

#### Inherited from

[Cw4GroupReadOnlyInterface](Cw4GroupReadOnlyInterface.md).[listMembers](Cw4GroupReadOnlyInterface.md#listmembers)

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

#### Inherited from

[Cw4GroupReadOnlyInterface](Cw4GroupReadOnlyInterface.md).[member](Cw4GroupReadOnlyInterface.md#member)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:32](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L32)

___

### removeHook

• **removeHook**: (`__namedParameters`: { `addr`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:128](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L128)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:95](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L95)

___

### totalWeight

• **totalWeight**: () => `Promise`<[`TotalWeightResponse`](Cw4GroupTypes.TotalWeightResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`TotalWeightResponse`](Cw4GroupTypes.TotalWeightResponse.md)\>

##### Returns

`Promise`<[`TotalWeightResponse`](Cw4GroupTypes.TotalWeightResponse.md)\>

#### Inherited from

[Cw4GroupReadOnlyInterface](Cw4GroupReadOnlyInterface.md).[totalWeight](Cw4GroupReadOnlyInterface.md#totalweight)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:24](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L24)

___

### updateAdmin

• **updateAdmin**: (`__namedParameters`: { `admin?`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin?` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:96](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L96)

___

### updateMembers

• **updateMembers**: (`__namedParameters`: { `add`: [`Member`](Cw4GroupTypes.Member.md)[] ; `remove`: `string`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `add` | [`Member`](Cw4GroupTypes.Member.md)[] |
| › `remove` | `string`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:106](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L106)
