[@abstract-money/core](../README.md) / [Exports](../modules.md) / EtfInterface

# Interface: EtfInterface

## Hierarchy

- [`EtfReadOnlyInterface`](EtfReadOnlyInterface.md)

  ↳ **`EtfInterface`**

## Implemented by

- [`EtfClient`](../classes/EtfClient.md)

## Table of contents

### Properties

- [base](EtfInterface.md#base)
- [configValidity](EtfInterface.md#configvalidity)
- [contractAddress](EtfInterface.md#contractaddress)
- [import](EtfInterface.md#import)
- [provideLiquidity](EtfInterface.md#provideliquidity)
- [receive](EtfInterface.md#receive)
- [sender](EtfInterface.md#sender)
- [setFee](EtfInterface.md#setfee)
- [state](EtfInterface.md#state)
- [updatePool](EtfInterface.md#updatepool)

## Properties

### base

• **base**: (`msg`: [`AddOnExecuteMsg`](../modules/EtfTypes.md#addonexecutemsg), `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`msg`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`AddOnExecuteMsg`](../modules/EtfTypes.md#addonexecutemsg) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:58](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L58)

___

### configValidity

• **configValidity**: () => `Promise`<[`ConfigValidityResponse`](EtfTypes.ConfigValidityResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigValidityResponse`](EtfTypes.ConfigValidityResponse.md)\>

##### Returns

`Promise`<[`ConfigValidityResponse`](EtfTypes.ConfigValidityResponse.md)\>

#### Inherited from

[EtfReadOnlyInterface](EtfReadOnlyInterface.md).[configValidity](EtfReadOnlyInterface.md#configvalidity)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:32](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L32)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[EtfReadOnlyInterface](EtfReadOnlyInterface.md).[contractAddress](EtfReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:56](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L56)

___

### import

• **import**: (`fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:102](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L102)

___

### provideLiquidity

• **provideLiquidity**: (`__namedParameters`: { `asset`: [`AssetBaseForString`](EtfTypes.AssetBaseForString.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | [`AssetBaseForString`](EtfTypes.AssetBaseForString.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:78](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L78)

___

### receive

• **receive**: (`__namedParameters`: { `amount`: `string` ; `msg`: `string` ; `sender`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `msg` | `string` |
| › `sender` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L64)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:57](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L57)

___

### setFee

• **setFee**: (`__namedParameters`: { `newFee`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFee` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:103](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L103)

___

### state

• **state**: () => `Promise`<[`StateResponse`](EtfTypes.StateResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`StateResponse`](EtfTypes.StateResponse.md)\>

##### Returns

`Promise`<[`StateResponse`](EtfTypes.StateResponse.md)\>

#### Inherited from

[EtfReadOnlyInterface](EtfReadOnlyInterface.md).[state](EtfReadOnlyInterface.md#state)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:31](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L31)

___

### updatePool

• **updatePool**: (`__namedParameters`: { `assetsToAdd`: `string`[] ; `assetsToRemove`: `string`[] ; `depositAsset?`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `assetsToAdd` | `string`[] |
| › `assetsToRemove` | `string`[] |
| › `depositAsset?` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:88](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L88)
