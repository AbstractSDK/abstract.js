[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20ReadOnlyInterface

# Interface: Cw20ReadOnlyInterface

## Hierarchy

- **`Cw20ReadOnlyInterface`**

  ↳ [`Cw20Interface`](Cw20Interface.md)

## Implemented by

- [`Cw20QueryClient`](../classes/Cw20QueryClient.md)

## Table of contents

### Properties

- [allAccounts](Cw20ReadOnlyInterface.md#allaccounts)
- [allAllowances](Cw20ReadOnlyInterface.md#allallowances)
- [allowance](Cw20ReadOnlyInterface.md#allowance)
- [balance](Cw20ReadOnlyInterface.md#balance)
- [contractAddress](Cw20ReadOnlyInterface.md#contractaddress)
- [downloadLogo](Cw20ReadOnlyInterface.md#downloadlogo)
- [marketingInfo](Cw20ReadOnlyInterface.md#marketinginfo)
- [minter](Cw20ReadOnlyInterface.md#minter)
- [tokenInfo](Cw20ReadOnlyInterface.md#tokeninfo)

## Properties

### allAccounts

• **allAccounts**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`AllAccountsResponse`](Cw20Types.AllAccountsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AllAccountsResponse`](Cw20Types.AllAccountsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`AllAccountsResponse`](Cw20Types.AllAccountsResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:49](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L49)

___

### allAllowances

• **allAllowances**: (`__namedParameters`: { `limit?`: `number` ; `owner`: `string` ; `startAfter?`: `string`  }) => `Promise`<[`AllAllowancesResponse`](Cw20Types.AllAllowancesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AllAllowancesResponse`](Cw20Types.AllAllowancesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `owner` | `string` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`AllAllowancesResponse`](Cw20Types.AllAllowancesResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:40](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L40)

___

### allowance

• **allowance**: (`__namedParameters`: { `owner`: `string` ; `spender`: `string`  }) => `Promise`<[`AllowanceResponse`](Cw20Types.AllowanceResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AllowanceResponse`](Cw20Types.AllowanceResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `owner` | `string` |
| › `spender` | `string` |

##### Returns

`Promise`<[`AllowanceResponse`](Cw20Types.AllowanceResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:39](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L39)

___

### balance

• **balance**: (`__namedParameters`: { `address`: `string`  }) => `Promise`<[`BalanceResponse`](Cw20Types.BalanceResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`BalanceResponse`](Cw20Types.BalanceResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |

##### Returns

`Promise`<[`BalanceResponse`](Cw20Types.BalanceResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:36](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L36)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:35](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L35)

___

### downloadLogo

• **downloadLogo**: () => `Promise`<[`DownloadLogoResponse`](Cw20Types.DownloadLogoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`DownloadLogoResponse`](Cw20Types.DownloadLogoResponse.md)\>

##### Returns

`Promise`<[`DownloadLogoResponse`](Cw20Types.DownloadLogoResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:57](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L57)

___

### marketingInfo

• **marketingInfo**: () => `Promise`<[`MarketingInfoResponse`](Cw20Types.MarketingInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MarketingInfoResponse`](Cw20Types.MarketingInfoResponse.md)\>

##### Returns

`Promise`<[`MarketingInfoResponse`](Cw20Types.MarketingInfoResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:56](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L56)

___

### minter

• **minter**: () => `Promise`<[`MinterResponse`](Cw20Types.MinterResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MinterResponse`](Cw20Types.MinterResponse.md)\>

##### Returns

`Promise`<[`MinterResponse`](Cw20Types.MinterResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:38](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L38)

___

### tokenInfo

• **tokenInfo**: () => `Promise`<[`TokenInfoResponse`](Cw20Types.TokenInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`TokenInfoResponse`](Cw20Types.TokenInfoResponse.md)\>

##### Returns

`Promise`<[`TokenInfoResponse`](Cw20Types.TokenInfoResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:37](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.client.ts#L37)
