[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20QueryClient

# Class: Cw20QueryClient

## Hierarchy

- **`Cw20QueryClient`**

  ↳ [`Cw20Client`](Cw20Client.md)

## Implements

- [`Cw20ReadOnlyInterface`](../interfaces/Cw20ReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](Cw20QueryClient.md#constructor)

### Properties

- [client](Cw20QueryClient.md#client)
- [contractAddress](Cw20QueryClient.md#contractaddress)

### Methods

- [allAccounts](Cw20QueryClient.md#allaccounts)
- [allAllowances](Cw20QueryClient.md#allallowances)
- [allowance](Cw20QueryClient.md#allowance)
- [balance](Cw20QueryClient.md#balance)
- [downloadLogo](Cw20QueryClient.md#downloadlogo)
- [marketingInfo](Cw20QueryClient.md#marketinginfo)
- [minter](Cw20QueryClient.md#minter)
- [tokenInfo](Cw20QueryClient.md#tokeninfo)

## Constructors

### constructor

• **new Cw20QueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:63](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L63)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:60](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L60)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20ReadOnlyInterface](../interfaces/Cw20ReadOnlyInterface.md).[contractAddress](../interfaces/Cw20ReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:61](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L61)

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

Cw20ReadOnlyInterface.allAccounts

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:124](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L124)

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

Cw20ReadOnlyInterface.allAllowances

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:107](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L107)

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

Cw20ReadOnlyInterface.allowance

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:93](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L93)

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

Cw20ReadOnlyInterface.balance

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:76](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L76)

___

### downloadLogo

▸ **downloadLogo**(): `Promise`<[`DownloadLogoResponse`](../interfaces/Cw20Types.DownloadLogoResponse.md)\>

#### Returns

`Promise`<[`DownloadLogoResponse`](../interfaces/Cw20Types.DownloadLogoResponse.md)\>

#### Implementation of

Cw20ReadOnlyInterface.downloadLogo

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:143](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L143)

___

### marketingInfo

▸ **marketingInfo**(): `Promise`<[`MarketingInfoResponse`](../interfaces/Cw20Types.MarketingInfoResponse.md)\>

#### Returns

`Promise`<[`MarketingInfoResponse`](../interfaces/Cw20Types.MarketingInfoResponse.md)\>

#### Implementation of

Cw20ReadOnlyInterface.marketingInfo

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:138](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L138)

___

### minter

▸ **minter**(): `Promise`<[`MinterResponse`](../interfaces/Cw20Types.MinterResponse.md)\>

#### Returns

`Promise`<[`MinterResponse`](../interfaces/Cw20Types.MinterResponse.md)\>

#### Implementation of

Cw20ReadOnlyInterface.minter

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:88](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L88)

___

### tokenInfo

▸ **tokenInfo**(): `Promise`<[`TokenInfoResponse`](../interfaces/Cw20Types.TokenInfoResponse.md)\>

#### Returns

`Promise`<[`TokenInfoResponse`](../interfaces/Cw20Types.TokenInfoResponse.md)\>

#### Implementation of

Cw20ReadOnlyInterface.tokenInfo

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:83](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L83)
