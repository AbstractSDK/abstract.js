[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20Types

# Namespace: Cw20Types

## Table of contents

### Interfaces

- [AllAccountsResponse](../interfaces/Cw20Types.AllAccountsResponse.md)
- [AllAllowancesResponse](../interfaces/Cw20Types.AllAllowancesResponse.md)
- [AllowanceInfo](../interfaces/Cw20Types.AllowanceInfo.md)
- [AllowanceResponse](../interfaces/Cw20Types.AllowanceResponse.md)
- [BalanceResponse](../interfaces/Cw20Types.BalanceResponse.md)
- [Cw20Coin](../interfaces/Cw20Types.Cw20Coin.md)
- [DownloadLogoResponse](../interfaces/Cw20Types.DownloadLogoResponse.md)
- [InstantiateMarketingInfo](../interfaces/Cw20Types.InstantiateMarketingInfo.md)
- [InstantiateMsg](../interfaces/Cw20Types.InstantiateMsg.md)
- [MarketingInfoResponse](../interfaces/Cw20Types.MarketingInfoResponse.md)
- [MinterResponse](../interfaces/Cw20Types.MinterResponse.md)
- [TokenInfoResponse](../interfaces/Cw20Types.TokenInfoResponse.md)

### Type Aliases

- [Addr](Cw20Types.md#addr)
- [Binary](Cw20Types.md#binary)
- [EmbeddedLogo](Cw20Types.md#embeddedlogo)
- [ExecuteMsg](Cw20Types.md#executemsg)
- [Expiration](Cw20Types.md#expiration)
- [Logo](Cw20Types.md#logo)
- [LogoInfo](Cw20Types.md#logoinfo)
- [QueryMsg](Cw20Types.md#querymsg)
- [Timestamp](Cw20Types.md#timestamp)
- [Uint128](Cw20Types.md#uint128)
- [Uint64](Cw20Types.md#uint64)

## Type Aliases

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:159](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L159)

___

### Binary

Ƭ **Binary**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:38](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L38)

___

### EmbeddedLogo

Ƭ **EmbeddedLogo**: { `svg`: [`Binary`](Cw20Types.md#binary)  } \| { `png`: [`Binary`](Cw20Types.md#binary)  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:125](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L125)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `transfer`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `recipient`: `string`  }  } \| { `burn`: { `amount`: [`Uint128`](Cw20Types.md#uint128)  }  } \| { `send`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `contract`: `string` ; `msg`: [`Binary`](Cw20Types.md#binary)  }  } \| { `increase_allowance`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `expires?`: [`Expiration`](Cw20Types.md#expiration) \| ``null`` ; `spender`: `string`  }  } \| { `decrease_allowance`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `expires?`: [`Expiration`](Cw20Types.md#expiration) \| ``null`` ; `spender`: `string`  }  } \| { `transfer_from`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `owner`: `string` ; `recipient`: `string`  }  } \| { `send_from`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `contract`: `string` ; `msg`: [`Binary`](Cw20Types.md#binary) ; `owner`: `string`  }  } \| { `burn_from`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `owner`: `string`  }  } \| { `mint`: { `amount`: [`Uint128`](Cw20Types.md#uint128) ; `recipient`: `string`  }  } \| { `update_minter`: { `new_minter`: `string`  }  } \| { `update_marketing`: { `description?`: `string` \| ``null`` ; `marketing?`: `string` \| ``null`` ; `project?`: `string` \| ``null``  }  } \| { `upload_logo`: [`Logo`](Cw20Types.md#logo)  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:43](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L43)

___

### Expiration

Ƭ **Expiration**: { `at_height`: `number`  } \| { `at_time`: [`Timestamp`](Cw20Types.md#timestamp)  } \| { `never`: {}  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:11](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L11)

___

### Logo

Ƭ **Logo**: { `url`: `string`  } \| { `embedded`: [`EmbeddedLogo`](Cw20Types.md#embeddedlogo)  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:118](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L118)

___

### LogoInfo

Ƭ **LogoInfo**: ``"embedded"`` \| { `url`: `string`  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L154)

___

### QueryMsg

Ƭ **QueryMsg**: { `balance`: { `address`: `string`  }  } \| { `token_info`: {}  } \| { `minter`: {}  } \| { `allowance`: { `owner`: `string` ; `spender`: `string`  }  } \| { `all_allowances`: { `limit?`: `number` \| ``null`` ; `owner`: `string` ; `start_after?`: `string` \| ``null``  }  } \| { `all_accounts`: { `limit?`: `number` \| ``null`` ; `start_after?`: `string` \| ``null``  }  } \| { `marketing_info`: {}  } \| { `download_logo`: {}  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:166](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L166)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](Cw20Types.md#uint64)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:21](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L21)

___

### Uint128

Ƭ **Uint128**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:10](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L10)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.types.ts:22](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.types.ts#L22)
