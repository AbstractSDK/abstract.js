[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ProxyInterface

# Interface: ProxyInterface

## Hierarchy

- [`ProxyReadOnlyInterface`](ProxyReadOnlyInterface.md)

  ↳ **`ProxyInterface`**

## Implemented by

- [`ProxyClient`](../classes/ProxyClient.md)

## Table of contents

### Properties

- [addModule](ProxyInterface.md#addmodule)
- [assetConfig](ProxyInterface.md#assetconfig)
- [assetsConfig](ProxyInterface.md#assetsconfig)
- [assetsInfo](ProxyInterface.md#assetsinfo)
- [baseAsset](ProxyInterface.md#baseasset)
- [config](ProxyInterface.md#config)
- [contractAddress](ProxyInterface.md#contractaddress)
- [holdingAmount](ProxyInterface.md#holdingamount)
- [ibcAction](ProxyInterface.md#ibcaction)
- [moduleAction](ProxyInterface.md#moduleaction)
- [moduleActionWithData](ProxyInterface.md#moduleactionwithdata)
- [removeModule](ProxyInterface.md#removemodule)
- [sender](ProxyInterface.md#sender)
- [setAdmin](ProxyInterface.md#setadmin)
- [tokenValue](ProxyInterface.md#tokenvalue)
- [totalValue](ProxyInterface.md#totalvalue)
- [updateAssets](ProxyInterface.md#updateassets)

## Properties

### addModule

• **addModule**: (`__namedParameters`: { `module`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:214](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L214)

___

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

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[assetConfig](ProxyReadOnlyInterface.md#assetconfig)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:64](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L64)

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

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[assetsConfig](ProxyReadOnlyInterface.md#assetsconfig)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:65](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L65)

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

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[assetsInfo](ProxyReadOnlyInterface.md#assetsinfo)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:72](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L72)

___

### baseAsset

• **baseAsset**: () => `Promise`<[`BaseAssetResponse`](ProxyTypes.BaseAssetResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`BaseAssetResponse`](ProxyTypes.BaseAssetResponse.md)\>

##### Returns

`Promise`<[`BaseAssetResponse`](ProxyTypes.BaseAssetResponse.md)\>

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[baseAsset](ProxyReadOnlyInterface.md#baseasset)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:79](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L79)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](ProxyTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](ProxyTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](ProxyTypes.ConfigResponse.md)\>

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[config](ProxyReadOnlyInterface.md#config)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:60](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L60)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[contractAddress](ProxyReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:172](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L172)

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

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[holdingAmount](ProxyReadOnlyInterface.md#holdingamount)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:63](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L63)

___

### ibcAction

• **ibcAction**: (`__namedParameters`: { `msgs`: [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:204](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L204)

___

### moduleAction

• **moduleAction**: (`__namedParameters`: { `msgs`: [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:184](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L184)

___

### moduleActionWithData

• **moduleActionWithData**: (`__namedParameters`: { `msg`: [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msg` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:194](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L194)

___

### removeModule

• **removeModule**: (`__namedParameters`: { `module`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:224](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L224)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:173](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L173)

___

### setAdmin

• **setAdmin**: (`__namedParameters`: { `admin`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:174](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L174)

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

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[tokenValue](ProxyReadOnlyInterface.md#tokenvalue)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:62](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L62)

___

### totalValue

• **totalValue**: () => `Promise`<[`AccountValue`](ProxyTypes.AccountValue.md)\>

#### Type declaration

▸ (): `Promise`<[`AccountValue`](ProxyTypes.AccountValue.md)\>

##### Returns

`Promise`<[`AccountValue`](ProxyTypes.AccountValue.md)\>

#### Inherited from

[ProxyReadOnlyInterface](ProxyReadOnlyInterface.md).[totalValue](ProxyReadOnlyInterface.md#totalvalue)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:61](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L61)

___

### updateAssets

• **updateAssets**: (`__namedParameters`: { `toAdd`: `string`[][] ; `toRemove`: `string`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[][] |
| › `toRemove` | `string`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:234](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L234)
