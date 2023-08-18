[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw4GroupClient

# Class: Cw4GroupClient

## Hierarchy

- [`Cw4GroupQueryClient`](Cw4GroupQueryClient.md)

  ↳ **`Cw4GroupClient`**

## Implements

- [`Cw4GroupInterface`](../interfaces/Cw4GroupInterface.md)

## Table of contents

### Constructors

- [constructor](Cw4GroupClient.md#constructor)

### Properties

- [client](Cw4GroupClient.md#client)
- [contractAddress](Cw4GroupClient.md#contractaddress)
- [sender](Cw4GroupClient.md#sender)

### Methods

- [addHook](Cw4GroupClient.md#addhook)
- [admin](Cw4GroupClient.md#admin)
- [hooks](Cw4GroupClient.md#hooks)
- [listMembers](Cw4GroupClient.md#listmembers)
- [member](Cw4GroupClient.md#member)
- [removeHook](Cw4GroupClient.md#removehook)
- [totalWeight](Cw4GroupClient.md#totalweight)
- [updateAdmin](Cw4GroupClient.md#updateadmin)
- [updateMembers](Cw4GroupClient.md#updatemembers)

## Constructors

### constructor

• **new Cw4GroupClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[constructor](Cw4GroupQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:144](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L144)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[client](Cw4GroupQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:140](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L140)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw4GroupInterface](../interfaces/Cw4GroupInterface.md).[contractAddress](../interfaces/Cw4GroupInterface.md#contractaddress)

#### Overrides

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[contractAddress](Cw4GroupQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:142](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L142)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw4GroupInterface](../interfaces/Cw4GroupInterface.md).[sender](../interfaces/Cw4GroupInterface.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:141](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L141)

## Methods

### addHook

▸ **addHook**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `addr` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw4GroupInterface.addHook

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:204](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L204)

___

### admin

▸ **admin**(): `Promise`<[`AdminResponse`](../interfaces/Cw4GroupTypes.AdminResponse.md)\>

#### Returns

`Promise`<[`AdminResponse`](../interfaces/Cw4GroupTypes.AdminResponse.md)\>

#### Implementation of

Cw4GroupInterface.admin

#### Inherited from

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[admin](Cw4GroupQueryClient.md#admin)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L49)

___

### hooks

▸ **hooks**(): `Promise`<[`HooksResponse`](../interfaces/Cw4GroupTypes.HooksResponse.md)\>

#### Returns

`Promise`<[`HooksResponse`](../interfaces/Cw4GroupTypes.HooksResponse.md)\>

#### Implementation of

Cw4GroupInterface.hooks

#### Inherited from

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[hooks](Cw4GroupQueryClient.md#hooks)

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

Cw4GroupInterface.listMembers

#### Inherited from

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[listMembers](Cw4GroupQueryClient.md#listmembers)

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

Cw4GroupInterface.member

#### Inherited from

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[member](Cw4GroupQueryClient.md#member)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:73](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L73)

___

### removeHook

▸ **removeHook**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `addr` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw4GroupInterface.removeHook

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:227](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L227)

___

### totalWeight

▸ **totalWeight**(): `Promise`<[`TotalWeightResponse`](../interfaces/Cw4GroupTypes.TotalWeightResponse.md)\>

#### Returns

`Promise`<[`TotalWeightResponse`](../interfaces/Cw4GroupTypes.TotalWeightResponse.md)\>

#### Implementation of

Cw4GroupInterface.totalWeight

#### Inherited from

[Cw4GroupQueryClient](Cw4GroupQueryClient.md).[totalWeight](Cw4GroupQueryClient.md#totalweight)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:54](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L54)

___

### updateAdmin

▸ **updateAdmin**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `admin?` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw4GroupInterface.updateAdmin

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:155](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L155)

___

### updateMembers

▸ **updateMembers**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `add` | [`Member`](../interfaces/Cw4GroupTypes.Member.md)[] | `undefined` |
| › `remove` | `string`[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw4GroupInterface.updateMembers

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.client.ts:178](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.client.ts#L178)
