[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ProxyClient

# Class: ProxyClient

## Hierarchy

- [`ProxyQueryClient`](ProxyQueryClient.md)

  ↳ **`ProxyClient`**

## Implements

- [`ProxyInterface`](../interfaces/ProxyInterface.md)

## Table of contents

### Constructors

- [constructor](ProxyClient.md#constructor)

### Properties

- [client](ProxyClient.md#client)
- [contractAddress](ProxyClient.md#contractaddress)
- [sender](ProxyClient.md#sender)

### Methods

- [addModule](ProxyClient.md#addmodule)
- [assetConfig](ProxyClient.md#assetconfig)
- [assetsConfig](ProxyClient.md#assetsconfig)
- [assetsInfo](ProxyClient.md#assetsinfo)
- [baseAsset](ProxyClient.md#baseasset)
- [config](ProxyClient.md#config)
- [holdingAmount](ProxyClient.md#holdingamount)
- [ibcAction](ProxyClient.md#ibcaction)
- [moduleAction](ProxyClient.md#moduleaction)
- [moduleActionWithData](ProxyClient.md#moduleactionwithdata)
- [removeModule](ProxyClient.md#removemodule)
- [setAdmin](ProxyClient.md#setadmin)
- [tokenValue](ProxyClient.md#tokenvalue)
- [totalValue](ProxyClient.md#totalvalue)
- [updateAssets](ProxyClient.md#updateassets)

## Constructors

### constructor

• **new ProxyClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[ProxyQueryClient](ProxyQueryClient.md).[constructor](ProxyQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:252](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L252)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[ProxyQueryClient](ProxyQueryClient.md).[client](ProxyQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:248](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L248)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[ProxyInterface](../interfaces/ProxyInterface.md).[contractAddress](../interfaces/ProxyInterface.md#contractaddress)

#### Overrides

[ProxyQueryClient](ProxyQueryClient.md).[contractAddress](ProxyQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:250](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L250)

___

### sender

• **sender**: `string`

#### Implementation of

[ProxyInterface](../interfaces/ProxyInterface.md).[sender](../interfaces/ProxyInterface.md#sender)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:249](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L249)

## Methods

### addModule

▸ **addModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `module` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ProxyInterface.addModule

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:358](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L358)

___

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

ProxyInterface.assetConfig

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[assetConfig](ProxyQueryClient.md#assetconfig)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:126](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L126)

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

ProxyInterface.assetsConfig

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[assetsConfig](ProxyQueryClient.md#assetsconfig)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:137](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L137)

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

ProxyInterface.assetsInfo

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[assetsInfo](ProxyQueryClient.md#assetsinfo)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:151](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L151)

___

### baseAsset

▸ **baseAsset**(): `Promise`<[`BaseAssetResponse`](../interfaces/ProxyTypes.BaseAssetResponse.md)\>

#### Returns

`Promise`<[`BaseAssetResponse`](../interfaces/ProxyTypes.BaseAssetResponse.md)\>

#### Implementation of

ProxyInterface.baseAsset

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[baseAsset](ProxyQueryClient.md#baseasset)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:165](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L165)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/ProxyTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/ProxyTypes.ConfigResponse.md)\>

#### Implementation of

ProxyInterface.config

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[config](ProxyQueryClient.md#config)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:98](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L98)

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

ProxyInterface.holdingAmount

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[holdingAmount](ProxyQueryClient.md#holdingamount)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:115](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L115)

___

### ibcAction

▸ **ibcAction**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `msgs` | [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ProxyInterface.ibcAction

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:335](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L335)

___

### moduleAction

▸ **moduleAction**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ProxyInterface.moduleAction

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:289](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L289)

___

### moduleActionWithData

▸ **moduleActionWithData**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `msg` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ProxyInterface.moduleActionWithData

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:312](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L312)

___

### removeModule

▸ **removeModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `module` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ProxyInterface.removeModule

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:381](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L381)

___

### setAdmin

▸ **setAdmin**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `admin` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ProxyInterface.setAdmin

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:266](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L266)

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

ProxyInterface.tokenValue

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[tokenValue](ProxyQueryClient.md#tokenvalue)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:108](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L108)

___

### totalValue

▸ **totalValue**(): `Promise`<[`AccountValue`](../interfaces/ProxyTypes.AccountValue.md)\>

#### Returns

`Promise`<[`AccountValue`](../interfaces/ProxyTypes.AccountValue.md)\>

#### Implementation of

ProxyInterface.totalValue

#### Inherited from

[ProxyQueryClient](ProxyQueryClient.md).[totalValue](ProxyQueryClient.md#totalvalue)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:103](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L103)

___

### updateAssets

▸ **updateAssets**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `toAdd` | `string`[][] | `undefined` |
| › `toRemove` | `string`[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ProxyInterface.updateAssets

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.client.ts:404](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.client.ts#L404)
