[@abstract-money/core](../README.md) / [Exports](../modules.md) / ProxyReadOnlyInterface

# Interface: ProxyReadOnlyInterface

## Hierarchy

- **`ProxyReadOnlyInterface`**

  ↳ [`ProxyInterface`](ProxyInterface.md)

## Implemented by

- [`ProxyQueryClient`](../classes/ProxyQueryClient.md)

## Table of contents

### Properties

- [assetConfig](ProxyReadOnlyInterface.md#assetconfig)
- [assetsConfig](ProxyReadOnlyInterface.md#assetsconfig)
- [assetsInfo](ProxyReadOnlyInterface.md#assetsinfo)
- [baseAsset](ProxyReadOnlyInterface.md#baseasset)
- [config](ProxyReadOnlyInterface.md#config)
- [contractAddress](ProxyReadOnlyInterface.md#contractaddress)
- [holdingAmount](ProxyReadOnlyInterface.md#holdingamount)
- [tokenValue](ProxyReadOnlyInterface.md#tokenvalue)
- [totalValue](ProxyReadOnlyInterface.md#totalvalue)

## Properties

### assetConfig

• **assetConfig**: (`__namedParameters`: { `identifier`: `string`  }) => `Promise`<[`AssetConfigResponse`](ProxyTypes.AssetConfigResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AssetConfigResponse`](ProxyTypes.AssetConfigResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

##### Returns

`Promise`<[`AssetConfigResponse`](ProxyTypes.AssetConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L64)

___

### assetsConfig

• **assetsConfig**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`AssetsConfigResponse`](ProxyTypes.AssetsConfigResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AssetsConfigResponse`](ProxyTypes.AssetsConfigResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`AssetsConfigResponse`](ProxyTypes.AssetsConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L65)

___

### assetsInfo

• **assetsInfo**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: [`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr)  }) => `Promise`<[`AssetsInfoResponse`](ProxyTypes.AssetsInfoResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AssetsInfoResponse`](ProxyTypes.AssetsInfoResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | [`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr) |

##### Returns

`Promise`<[`AssetsInfoResponse`](ProxyTypes.AssetsInfoResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:72](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L72)

___

### baseAsset

• **baseAsset**: () => `Promise`<[`BaseAssetResponse`](ProxyTypes.BaseAssetResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`BaseAssetResponse`](ProxyTypes.BaseAssetResponse.md)\>

##### Returns

`Promise`<[`BaseAssetResponse`](ProxyTypes.BaseAssetResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:79](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L79)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](ProxyTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](ProxyTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](ProxyTypes.ConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:60](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L60)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:59](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L59)

___

### holdingAmount

• **holdingAmount**: (`__namedParameters`: { `identifier`: `string`  }) => `Promise`<[`HoldingAmountResponse`](ProxyTypes.HoldingAmountResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`HoldingAmountResponse`](ProxyTypes.HoldingAmountResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

##### Returns

`Promise`<[`HoldingAmountResponse`](ProxyTypes.HoldingAmountResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:63](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L63)

___

### tokenValue

• **tokenValue**: (`__namedParameters`: { `identifier`: `string`  }) => `Promise`<[`TokenValueResponse`](ProxyTypes.TokenValueResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`TokenValueResponse`](ProxyTypes.TokenValueResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

##### Returns

`Promise`<[`TokenValueResponse`](ProxyTypes.TokenValueResponse.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:62](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L62)

___

### totalValue

• **totalValue**: () => `Promise`<[`AccountValue`](ProxyTypes.AccountValue.md)\>

#### Type declaration

▸ (): `Promise`<[`AccountValue`](ProxyTypes.AccountValue.md)\>

##### Returns

`Promise`<[`AccountValue`](ProxyTypes.AccountValue.md)\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:61](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.client.ts#L61)
