[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / EtfClient

# Class: EtfClient

## Hierarchy

- [`EtfQueryClient`](EtfQueryClient.md)

  ↳ **`EtfClient`**

## Implements

- [`EtfInterface`](../interfaces/EtfInterface.md)

## Table of contents

### Constructors

- [constructor](EtfClient.md#constructor)

### Properties

- [client](EtfClient.md#client)
- [contractAddress](EtfClient.md#contractaddress)
- [sender](EtfClient.md#sender)

### Methods

- [base](EtfClient.md#base)
- [configValidity](EtfClient.md#configvalidity)
- [import](EtfClient.md#import)
- [provideLiquidity](EtfClient.md#provideliquidity)
- [receive](EtfClient.md#receive)
- [setFee](EtfClient.md#setfee)
- [state](EtfClient.md#state)
- [updatePool](EtfClient.md#updatepool)

## Constructors

### constructor

• **new EtfClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[EtfQueryClient](EtfQueryClient.md).[constructor](EtfQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:119](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L119)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[EtfQueryClient](EtfQueryClient.md).[client](EtfQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L115)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[EtfInterface](../interfaces/EtfInterface.md).[contractAddress](../interfaces/EtfInterface.md#contractaddress)

#### Overrides

[EtfQueryClient](EtfQueryClient.md).[contractAddress](EtfQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:117](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L117)

___

### sender

• **sender**: `string`

#### Implementation of

[EtfInterface](../interfaces/EtfInterface.md).[sender](../interfaces/EtfInterface.md#sender)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:116](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L116)

## Methods

### base

▸ **base**(`execMsg`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `execMsg` | [`AddOnExecuteMsg`](../modules/EtfTypes.md#addonexecutemsg) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

EtfInterface.base

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:132](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L132)

___

### configValidity

▸ **configValidity**(): `Promise`<[`ConfigValidityResponse`](../interfaces/EtfTypes.ConfigValidityResponse.md)\>

#### Returns

`Promise`<[`ConfigValidityResponse`](../interfaces/EtfTypes.ConfigValidityResponse.md)\>

#### Implementation of

EtfInterface.configValidity

#### Inherited from

[EtfQueryClient](EtfQueryClient.md).[configValidity](EtfQueryClient.md#configvalidity)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L49)

___

### import

▸ **import**(`fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

EtfInterface.import

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:230](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L230)

___

### provideLiquidity

▸ **provideLiquidity**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `asset` | [`AssetBaseForString`](../interfaces/EtfTypes.AssetBaseForString.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

EtfInterface.provideLiquidity

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:178](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L178)

___

### receive

▸ **receive**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `msg` | `string` | `undefined` |
| › `sender` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

EtfInterface.receive

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:149](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L149)

___

### setFee

▸ **setFee**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `newFee` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

EtfInterface.setFee

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:246](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L246)

___

### state

▸ **state**(): `Promise`<[`StateResponse`](../interfaces/EtfTypes.StateResponse.md)\>

#### Returns

`Promise`<[`StateResponse`](../interfaces/EtfTypes.StateResponse.md)\>

#### Implementation of

EtfInterface.state

#### Inherited from

[EtfQueryClient](EtfQueryClient.md).[state](EtfQueryClient.md#state)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:44](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L44)

___

### updatePool

▸ **updatePool**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `assetsToAdd` | `string`[] | `undefined` |
| › `assetsToRemove` | `string`[] | `undefined` |
| › `depositAsset?` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

EtfInterface.updatePool

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:201](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L201)
