[@abstract-money/core](../README.md) / [Exports](../modules.md) / ProxyMessage

# Interface: ProxyMessage

## Implemented by

- [`ProxyMessageComposer`](../classes/ProxyMessageComposer.md)

## Table of contents

### Properties

- [addModule](ProxyMessage.md#addmodule)
- [contractAddress](ProxyMessage.md#contractaddress)
- [ibcAction](ProxyMessage.md#ibcaction)
- [moduleAction](ProxyMessage.md#moduleaction)
- [moduleActionWithData](ProxyMessage.md#moduleactionwithdata)
- [removeModule](ProxyMessage.md#removemodule)
- [sender](ProxyMessage.md#sender)
- [setAdmin](ProxyMessage.md#setadmin)
- [updateAssets](ProxyMessage.md#updateassets)

## Properties

### addModule

• **addModule**: (`__namedParameters`: { `module`: `string`  }, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:94](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L94)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:60](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L60)

___

### ibcAction

• **ibcAction**: (`__namedParameters`: { `msgs`: [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)[]  }, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)[] |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:86](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L86)

___

### moduleAction

• **moduleAction**: (`__namedParameters`: { `msgs`: [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)[]  }, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)[] |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:70](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L70)

___

### moduleActionWithData

• **moduleActionWithData**: (`__namedParameters`: { `msg`: [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)  }, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msg` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty) |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:78](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L78)

___

### removeModule

• **removeModule**: (`__namedParameters`: { `module`: `string`  }, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:102](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L102)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:61](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L61)

___

### setAdmin

• **setAdmin**: (`__namedParameters`: { `admin`: `string`  }, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:62](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L62)

___

### updateAssets

• **updateAssets**: (`__namedParameters`: { `toAdd`: `string`[][] ; `toRemove`: `string`[]  }, `_funds?`: [`Coin`](ProxyTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[][] |
| › `toRemove` | `string`[] |
| `_funds?` | [`Coin`](ProxyTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:110](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L110)
