[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ProxyExecuteMsgBuilder

# Class: ProxyExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](ProxyExecuteMsgBuilder.md#constructor)

### Methods

- [addModule](ProxyExecuteMsgBuilder.md#addmodule)
- [ibcAction](ProxyExecuteMsgBuilder.md#ibcaction)
- [moduleAction](ProxyExecuteMsgBuilder.md#moduleaction)
- [moduleActionWithData](ProxyExecuteMsgBuilder.md#moduleactionwithdata)
- [removeModule](ProxyExecuteMsgBuilder.md#removemodule)
- [setAdmin](ProxyExecuteMsgBuilder.md#setadmin)
- [updateAssets](ProxyExecuteMsgBuilder.md#updateassets)

## Constructors

### constructor

• **new ProxyExecuteMsgBuilder**()

## Methods

### addModule

▸ `Static` **addModule**(`«destructured»`): [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |

#### Returns

[`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:122](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L122)

___

### ibcAction

▸ `Static` **ibcAction**(`«destructured»`): [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`ExecuteMsg1`](../modules/ProxyTypes.md#executemsg1)[] |

#### Returns

[`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:106](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L106)

___

### moduleAction

▸ `Static` **moduleAction**(`«destructured»`): [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty)[] |

#### Returns

[`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L74)

___

### moduleActionWithData

▸ `Static` **moduleActionWithData**(`«destructured»`): [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `msg` | [`CosmosMsgForEmpty`](../modules/ProxyTypes.md#cosmosmsgforempty) |

#### Returns

[`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:90](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L90)

___

### removeModule

▸ `Static` **removeModule**(`«destructured»`): [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | `string` |

#### Returns

[`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:138](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L138)

___

### setAdmin

▸ `Static` **setAdmin**(`«destructured»`): [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |

#### Returns

[`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:58](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L58)

___

### updateAssets

▸ `Static` **updateAssets**(`«destructured»`): [`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`string`, [`UncheckedPriceSource`](../modules/ProxyTypes.md#uncheckedpricesource)][] |
| › `toRemove` | `string`[] |

#### Returns

[`ExecuteMsg`](../modules/ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L154)
