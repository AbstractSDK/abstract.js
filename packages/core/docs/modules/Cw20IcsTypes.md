[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw20IcsTypes

# Namespace: Cw20IcsTypes

## Table of contents

### Interfaces

- [AdminResponse](../interfaces/Cw20IcsTypes.AdminResponse.md)
- [AllowMsg](../interfaces/Cw20IcsTypes.AllowMsg.md)
- [AllowedInfo](../interfaces/Cw20IcsTypes.AllowedInfo.md)
- [AllowedResponse](../interfaces/Cw20IcsTypes.AllowedResponse.md)
- [ChannelInfo](../interfaces/Cw20IcsTypes.ChannelInfo.md)
- [ChannelResponse](../interfaces/Cw20IcsTypes.ChannelResponse.md)
- [Coin](../interfaces/Cw20IcsTypes.Coin.md)
- [ConfigResponse](../interfaces/Cw20IcsTypes.ConfigResponse.md)
- [Cw20Coin](../interfaces/Cw20IcsTypes.Cw20Coin.md)
- [Cw20ReceiveMsg](../interfaces/Cw20IcsTypes.Cw20ReceiveMsg.md)
- [IbcEndpoint](../interfaces/Cw20IcsTypes.IbcEndpoint.md)
- [InitMsg](../interfaces/Cw20IcsTypes.InitMsg.md)
- [ListAllowedResponse](../interfaces/Cw20IcsTypes.ListAllowedResponse.md)
- [ListChannelsResponse](../interfaces/Cw20IcsTypes.ListChannelsResponse.md)
- [PortResponse](../interfaces/Cw20IcsTypes.PortResponse.md)
- [TransferMsg](../interfaces/Cw20IcsTypes.TransferMsg.md)

### Type Aliases

- [Amount](Cw20IcsTypes.md#amount)
- [Binary](Cw20IcsTypes.md#binary)
- [ExecuteMsg](Cw20IcsTypes.md#executemsg)
- [QueryMsg](Cw20IcsTypes.md#querymsg)
- [Uint128](Cw20IcsTypes.md#uint128)

## Type Aliases

### Amount

Ƭ **Amount**: { `native`: [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)  } \| { `cw20`: [`Cw20Coin`](../interfaces/Cw20IcsTypes.Cw20Coin.md)  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.types.ts:14](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.types.ts#L14)

___

### Binary

Ƭ **Binary**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.types.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.types.ts#L64)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `receive`: [`Cw20ReceiveMsg`](../interfaces/Cw20IcsTypes.Cw20ReceiveMsg.md)  } \| { `transfer`: [`TransferMsg`](../interfaces/Cw20IcsTypes.TransferMsg.md)  } \| { `allow`: [`AllowMsg`](../interfaces/Cw20IcsTypes.AllowMsg.md)  } \| { `update_admin`: { `admin`: `string`  }  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.types.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.types.ts#L49)

___

### QueryMsg

Ƭ **QueryMsg**: { `port`: {}  } \| { `list_channels`: {}  } \| { `channel`: { `id`: `string`  }  } \| { `config`: {}  } \| { `admin`: {}  } \| { `allowed`: { `contract`: `string`  }  } \| { `list_allowed`: { `limit?`: `number` \| ``null`` ; `start_after?`: `string` \| ``null``  }  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.types.ts:98](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.types.ts#L98)

___

### Uint128

Ƭ **Uint128**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.types.ts:21](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.types.ts#L21)
