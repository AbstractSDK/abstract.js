[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20Client

# Class: Cw20Client

## Hierarchy

- [`Cw20QueryClient`](Cw20QueryClient.md)

  ↳ **`Cw20Client`**

## Implements

- [`Cw20Interface`](../interfaces/Cw20Interface.md)

## Table of contents

### Constructors

- [constructor](Cw20Client.md#constructor)

### Properties

- [client](Cw20Client.md#client)
- [contractAddress](Cw20Client.md#contractaddress)
- [sender](Cw20Client.md#sender)

### Methods

- [allAccounts](Cw20Client.md#allaccounts)
- [allAllowances](Cw20Client.md#allallowances)
- [allowance](Cw20Client.md#allowance)
- [balance](Cw20Client.md#balance)
- [burn](Cw20Client.md#burn)
- [burnFrom](Cw20Client.md#burnfrom)
- [decreaseAllowance](Cw20Client.md#decreaseallowance)
- [downloadLogo](Cw20Client.md#downloadlogo)
- [increaseAllowance](Cw20Client.md#increaseallowance)
- [marketingInfo](Cw20Client.md#marketinginfo)
- [mint](Cw20Client.md#mint)
- [minter](Cw20Client.md#minter)
- [send](Cw20Client.md#send)
- [sendFrom](Cw20Client.md#sendfrom)
- [tokenInfo](Cw20Client.md#tokeninfo)
- [transfer](Cw20Client.md#transfer)
- [transferFrom](Cw20Client.md#transferfrom)
- [updateMarketing](Cw20Client.md#updatemarketing)
- [updateMinter](Cw20Client.md#updateminter)
- [uploadLogo](Cw20Client.md#uploadlogo)

## Constructors

### constructor

• **new Cw20Client**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[Cw20QueryClient](Cw20QueryClient.md).[constructor](Cw20QueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:306](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L306)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[Cw20QueryClient](Cw20QueryClient.md).[client](Cw20QueryClient.md#client)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:302](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L302)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20Interface](../interfaces/Cw20Interface.md).[contractAddress](../interfaces/Cw20Interface.md#contractaddress)

#### Overrides

[Cw20QueryClient](Cw20QueryClient.md).[contractAddress](Cw20QueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:304](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L304)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw20Interface](../interfaces/Cw20Interface.md).[sender](../interfaces/Cw20Interface.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:303](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L303)

## Methods

### allAccounts

▸ **allAccounts**(`«destructured»`): `Promise`<[`AllAccountsResponse`](../interfaces/Cw20Types.AllAccountsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`AllAccountsResponse`](../interfaces/Cw20Types.AllAccountsResponse.md)\>

#### Implementation of

Cw20Interface.allAccounts

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[allAccounts](Cw20QueryClient.md#allaccounts)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:124](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L124)

___

### allAllowances

▸ **allAllowances**(`«destructured»`): `Promise`<[`AllAllowancesResponse`](../interfaces/Cw20Types.AllAllowancesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `owner` | `string` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`AllAllowancesResponse`](../interfaces/Cw20Types.AllAllowancesResponse.md)\>

#### Implementation of

Cw20Interface.allAllowances

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[allAllowances](Cw20QueryClient.md#allallowances)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:107](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L107)

___

### allowance

▸ **allowance**(`«destructured»`): `Promise`<[`AllowanceResponse`](../interfaces/Cw20Types.AllowanceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `owner` | `string` |
| › `spender` | `string` |

#### Returns

`Promise`<[`AllowanceResponse`](../interfaces/Cw20Types.AllowanceResponse.md)\>

#### Implementation of

Cw20Interface.allowance

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[allowance](Cw20QueryClient.md#allowance)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:93](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L93)

___

### balance

▸ **balance**(`«destructured»`): `Promise`<[`BalanceResponse`](../interfaces/Cw20Types.BalanceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/Cw20Types.BalanceResponse.md)\>

#### Implementation of

Cw20Interface.balance

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[balance](Cw20QueryClient.md#balance)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:76](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L76)

___

### burn

▸ **burn**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.burn

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:351](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L351)

___

### burnFrom

▸ **burnFrom**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `owner` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.burnFrom

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:522](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L522)

___

### decreaseAllowance

▸ **decreaseAllowance**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) | `undefined` |
| › `spender` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.decreaseAllowance

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:432](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L432)

___

### downloadLogo

▸ **downloadLogo**(): `Promise`<[`DownloadLogoResponse`](../interfaces/Cw20Types.DownloadLogoResponse.md)\>

#### Returns

`Promise`<[`DownloadLogoResponse`](../interfaces/Cw20Types.DownloadLogoResponse.md)\>

#### Implementation of

Cw20Interface.downloadLogo

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[downloadLogo](Cw20QueryClient.md#downloadlogo)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:143](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L143)

___

### increaseAllowance

▸ **increaseAllowance**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) | `undefined` |
| › `spender` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.increaseAllowance

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:403](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L403)

___

### marketingInfo

▸ **marketingInfo**(): `Promise`<[`MarketingInfoResponse`](../interfaces/Cw20Types.MarketingInfoResponse.md)\>

#### Returns

`Promise`<[`MarketingInfoResponse`](../interfaces/Cw20Types.MarketingInfoResponse.md)\>

#### Implementation of

Cw20Interface.marketingInfo

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[marketingInfo](Cw20QueryClient.md#marketinginfo)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:138](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L138)

___

### mint

▸ **mint**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `recipient` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.mint

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:548](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L548)

___

### minter

▸ **minter**(): `Promise`<[`MinterResponse`](../interfaces/Cw20Types.MinterResponse.md)\>

#### Returns

`Promise`<[`MinterResponse`](../interfaces/Cw20Types.MinterResponse.md)\>

#### Implementation of

Cw20Interface.minter

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[minter](Cw20QueryClient.md#minter)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:88](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L88)

___

### send

▸ **send**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `contract` | `string` | `undefined` |
| › `msg` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.send

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:374](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L374)

___

### sendFrom

▸ **sendFrom**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `contract` | `string` | `undefined` |
| › `msg` | `string` | `undefined` |
| › `owner` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.sendFrom

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:490](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L490)

___

### tokenInfo

▸ **tokenInfo**(): `Promise`<[`TokenInfoResponse`](../interfaces/Cw20Types.TokenInfoResponse.md)\>

#### Returns

`Promise`<[`TokenInfoResponse`](../interfaces/Cw20Types.TokenInfoResponse.md)\>

#### Implementation of

Cw20Interface.tokenInfo

#### Inherited from

[Cw20QueryClient](Cw20QueryClient.md).[tokenInfo](Cw20QueryClient.md#tokeninfo)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:83](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L83)

___

### transfer

▸ **transfer**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `recipient` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.transfer

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:325](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L325)

___

### transferFrom

▸ **transferFrom**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `owner` | `string` | `undefined` |
| › `recipient` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.transferFrom

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:461](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L461)

___

### updateMarketing

▸ **updateMarketing**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `description?` | `string` | `undefined` |
| › `marketing?` | `string` | `undefined` |
| › `project?` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.updateMarketing

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:597](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L597)

___

### updateMinter

▸ **updateMinter**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `newMinter` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.updateMinter

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:574](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L574)

___

### uploadLogo

▸ **uploadLogo**(`msg`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | [`Logo`](../modules/Cw20Types.md#logo) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | readonly `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20Interface.uploadLogo

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:626](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L626)
