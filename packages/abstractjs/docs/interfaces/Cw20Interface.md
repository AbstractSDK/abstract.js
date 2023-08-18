[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20Interface

# Interface: Cw20Interface

## Hierarchy

- [`Cw20ReadOnlyInterface`](Cw20ReadOnlyInterface.md)

  ↳ **`Cw20Interface`**

## Implemented by

- [`Cw20Client`](../classes/Cw20Client.md)

## Table of contents

### Properties

- [allAccounts](Cw20Interface.md#allaccounts)
- [allAllowances](Cw20Interface.md#allallowances)
- [allowance](Cw20Interface.md#allowance)
- [balance](Cw20Interface.md#balance)
- [burn](Cw20Interface.md#burn)
- [burnFrom](Cw20Interface.md#burnfrom)
- [contractAddress](Cw20Interface.md#contractaddress)
- [decreaseAllowance](Cw20Interface.md#decreaseallowance)
- [downloadLogo](Cw20Interface.md#downloadlogo)
- [increaseAllowance](Cw20Interface.md#increaseallowance)
- [marketingInfo](Cw20Interface.md#marketinginfo)
- [mint](Cw20Interface.md#mint)
- [minter](Cw20Interface.md#minter)
- [send](Cw20Interface.md#send)
- [sendFrom](Cw20Interface.md#sendfrom)
- [sender](Cw20Interface.md#sender)
- [tokenInfo](Cw20Interface.md#tokeninfo)
- [transfer](Cw20Interface.md#transfer)
- [transferFrom](Cw20Interface.md#transferfrom)
- [updateMarketing](Cw20Interface.md#updatemarketing)
- [updateMinter](Cw20Interface.md#updateminter)
- [uploadLogo](Cw20Interface.md#uploadlogo)

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

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[allAccounts](Cw20ReadOnlyInterface.md#allaccounts)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L49)

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

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[allAllowances](Cw20ReadOnlyInterface.md#allallowances)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:40](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L40)

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

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[allowance](Cw20ReadOnlyInterface.md#allowance)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:39](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L39)

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

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[balance](Cw20ReadOnlyInterface.md#balance)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:36](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L36)

___

### burn

• **burn**: (`__namedParameters`: { `amount`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:164](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L164)

___

### burnFrom

• **burnFrom**: (`__namedParameters`: { `amount`: `string` ; `owner`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:246](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L246)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[contractAddress](Cw20ReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:150](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L150)

___

### decreaseAllowance

• **decreaseAllowance**: (`__namedParameters`: { `amount`: `string` ; `expires?`: [`Expiration`](../modules/Cw20Types.md#expiration) ; `spender`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:202](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L202)

___

### downloadLogo

• **downloadLogo**: () => `Promise`<[`DownloadLogoResponse`](Cw20Types.DownloadLogoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`DownloadLogoResponse`](Cw20Types.DownloadLogoResponse.md)\>

##### Returns

`Promise`<[`DownloadLogoResponse`](Cw20Types.DownloadLogoResponse.md)\>

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[downloadLogo](Cw20ReadOnlyInterface.md#downloadlogo)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:57](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L57)

___

### increaseAllowance

• **increaseAllowance**: (`__namedParameters`: { `amount`: `string` ; `expires?`: [`Expiration`](../modules/Cw20Types.md#expiration) ; `spender`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:188](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L188)

___

### marketingInfo

• **marketingInfo**: () => `Promise`<[`MarketingInfoResponse`](Cw20Types.MarketingInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MarketingInfoResponse`](Cw20Types.MarketingInfoResponse.md)\>

##### Returns

`Promise`<[`MarketingInfoResponse`](Cw20Types.MarketingInfoResponse.md)\>

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[marketingInfo](Cw20ReadOnlyInterface.md#marketinginfo)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:56](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L56)

___

### mint

• **mint**: (`__namedParameters`: { `amount`: `string` ; `recipient`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:258](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L258)

___

### minter

• **minter**: () => `Promise`<[`MinterResponse`](Cw20Types.MinterResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MinterResponse`](Cw20Types.MinterResponse.md)\>

##### Returns

`Promise`<[`MinterResponse`](Cw20Types.MinterResponse.md)\>

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[minter](Cw20ReadOnlyInterface.md#minter)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:38](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L38)

___

### send

• **send**: (`__namedParameters`: { `amount`: `string` ; `contract`: `string` ; `msg`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:174](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L174)

___

### sendFrom

• **sendFrom**: (`__namedParameters`: { `amount`: `string` ; `contract`: `string` ; `msg`: `string` ; `owner`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |
| › `owner` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:230](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L230)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:151](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L151)

___

### tokenInfo

• **tokenInfo**: () => `Promise`<[`TokenInfoResponse`](Cw20Types.TokenInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`TokenInfoResponse`](Cw20Types.TokenInfoResponse.md)\>

##### Returns

`Promise`<[`TokenInfoResponse`](Cw20Types.TokenInfoResponse.md)\>

#### Inherited from

[Cw20ReadOnlyInterface](Cw20ReadOnlyInterface.md).[tokenInfo](Cw20ReadOnlyInterface.md#tokeninfo)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:37](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L37)

___

### transfer

• **transfer**: (`__namedParameters`: { `amount`: `string` ; `recipient`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:152](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L152)

___

### transferFrom

• **transferFrom**: (`__namedParameters`: { `amount`: `string` ; `owner`: `string` ; `recipient`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |
| › `recipient` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:216](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L216)

___

### updateMarketing

• **updateMarketing**: (`__namedParameters`: { `description?`: `string` ; `marketing?`: `string` ; `project?`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `marketing?` | `string` |
| › `project?` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:280](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L280)

___

### updateMinter

• **updateMinter**: (`__namedParameters`: { `newMinter`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newMinter` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:270](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L270)

___

### uploadLogo

• **uploadLogo**: (`msg`: [`Logo`](../modules/Cw20Types.md#logo), `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`msg`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Logo`](../modules/Cw20Types.md#logo) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.client.ts:294](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.client.ts#L294)
