[@abstract-money/core](../README.md) / [Exports](../modules.md) / ProxyQueryClient

# Class: ProxyQueryClient

## Hierarchy

- **`ProxyQueryClient`**

  ↳ [`ProxyClient`](ProxyClient.md)

## Implements

- [`ProxyReadOnlyInterface`](../interfaces/ProxyReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](ProxyQueryClient.md#constructor)

### Properties

- [client](ProxyQueryClient.md#client)
- [contractAddress](ProxyQueryClient.md#contractaddress)

### Methods

- [assetConfig](ProxyQueryClient.md#assetconfig)
- [assetsConfig](ProxyQueryClient.md#assetsconfig)
- [assetsInfo](ProxyQueryClient.md#assetsinfo)
- [baseAsset](ProxyQueryClient.md#baseasset)
- [config](ProxyQueryClient.md#config)
- [holdingAmount](ProxyQueryClient.md#holdingamount)
- [tokenValue](ProxyQueryClient.md#tokenvalue)
- [totalValue](ProxyQueryClient.md#totalvalue)

## Constructors

### constructor

• **new ProxyQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:85](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L85)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:82](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L82)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[ProxyReadOnlyInterface](../interfaces/ProxyReadOnlyInterface.md).[contractAddress](../interfaces/ProxyReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:83](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L83)

## Methods

### assetConfig

▸ **assetConfig**(`«destructured»`): `Promise`<[`AssetConfigResponse`](../interfaces/ProxyTypes.AssetConfigResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

#### Returns

`Promise`<[`AssetConfigResponse`](../interfaces/ProxyTypes.AssetConfigResponse.md)\>

#### Implementation of

ProxyReadOnlyInterface.assetConfig

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:126](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L126)

___

### assetsConfig

▸ **assetsConfig**(`«destructured»`): `Promise`<[`AssetsConfigResponse`](../interfaces/ProxyTypes.AssetsConfigResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`AssetsConfigResponse`](../interfaces/ProxyTypes.AssetsConfigResponse.md)\>

#### Implementation of

ProxyReadOnlyInterface.assetsConfig

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:137](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L137)

___

### assetsInfo

▸ **assetsInfo**(`«destructured»`): `Promise`<[`AssetsInfoResponse`](../interfaces/ProxyTypes.AssetsInfoResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | [`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr) |

#### Returns

`Promise`<[`AssetsInfoResponse`](../interfaces/ProxyTypes.AssetsInfoResponse.md)\>

#### Implementation of

ProxyReadOnlyInterface.assetsInfo

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:151](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L151)

___

### baseAsset

▸ **baseAsset**(): `Promise`<[`BaseAssetResponse`](../interfaces/ProxyTypes.BaseAssetResponse.md)\>

#### Returns

`Promise`<[`BaseAssetResponse`](../interfaces/ProxyTypes.BaseAssetResponse.md)\>

#### Implementation of

ProxyReadOnlyInterface.baseAsset

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:165](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L165)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/ProxyTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/ProxyTypes.ConfigResponse.md)\>

#### Implementation of

ProxyReadOnlyInterface.config

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:98](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L98)

___

### holdingAmount

▸ **holdingAmount**(`«destructured»`): `Promise`<[`HoldingAmountResponse`](../interfaces/ProxyTypes.HoldingAmountResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

#### Returns

`Promise`<[`HoldingAmountResponse`](../interfaces/ProxyTypes.HoldingAmountResponse.md)\>

#### Implementation of

ProxyReadOnlyInterface.holdingAmount

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L115)

___

### tokenValue

▸ **tokenValue**(`«destructured»`): `Promise`<[`TokenValueResponse`](../interfaces/ProxyTypes.TokenValueResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

#### Returns

`Promise`<[`TokenValueResponse`](../interfaces/ProxyTypes.TokenValueResponse.md)\>

#### Implementation of

ProxyReadOnlyInterface.tokenValue

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:108](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L108)

___

### totalValue

▸ **totalValue**(): `Promise`<[`AccountValue`](../interfaces/ProxyTypes.AccountValue.md)\>

#### Returns

`Promise`<[`AccountValue`](../interfaces/ProxyTypes.AccountValue.md)\>

#### Implementation of

ProxyReadOnlyInterface.totalValue

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:103](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L103)
