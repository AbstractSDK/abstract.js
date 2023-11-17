[@abstract-money/core](../README.md) / [Exports](../modules.md) / ProxyMessageComposer

# Class: ProxyMessageComposer

## Implements

- [`ProxyMessage`](../interfaces/ProxyMessage.md)

## Table of contents

### Constructors

- [constructor](ProxyMessageComposer.md#constructor)

### Properties

- [contractAddress](ProxyMessageComposer.md#contractaddress)
- [sender](ProxyMessageComposer.md#sender)

### Methods

- [addModule](ProxyMessageComposer.md#addmodule)
- [ibcAction](ProxyMessageComposer.md#ibcaction)
- [moduleAction](ProxyMessageComposer.md#moduleaction)
- [moduleActionWithData](ProxyMessageComposer.md#moduleactionwithdata)
- [removeModule](ProxyMessageComposer.md#removemodule)
- [setAdmin](ProxyMessageComposer.md#setadmin)
- [updateAssets](ProxyMessageComposer.md#updateassets)

## Constructors

### constructor

• **new ProxyMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:125](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L125)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[ProxyMessage](../interfaces/ProxyMessage.md).[contractAddress](../interfaces/ProxyMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:123](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L123)

___

### sender

• **sender**: `string`

#### Implementation of

[ProxyMessage](../interfaces/ProxyMessage.md).[sender](../interfaces/ProxyMessage.md#sender)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:122](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L122)

## Methods

### addModule

▸ **addModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ProxyMessage.addModule

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:229](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L229)

___

### ibcAction

▸ **ibcAction**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)[] |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ProxyMessage.ibcAction

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:206](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L206)

___

### moduleAction

▸ **moduleAction**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)[] |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ProxyMessage.moduleAction

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:160](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L160)

___

### moduleActionWithData

▸ **moduleActionWithData**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msg` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty) |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ProxyMessage.moduleActionWithData

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:183](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L183)

___

### removeModule

▸ **removeModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ProxyMessage.removeModule

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:252](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L252)

___

### setAdmin

▸ **setAdmin**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ProxyMessage.setAdmin

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:137](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L137)

___

### updateAssets

▸ **updateAssets**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[][] |
| › `toRemove` | `string`[] |
| `_funds?` | [`Coin`](../interfaces/ProxyTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ProxyMessage.updateAssets

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.message-composer.ts:275](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.message-composer.ts#L275)
