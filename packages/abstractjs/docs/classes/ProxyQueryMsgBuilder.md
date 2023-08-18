[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ProxyQueryMsgBuilder

# Class: ProxyQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](ProxyQueryMsgBuilder.md#constructor)

### Methods

- [assetConfig](ProxyQueryMsgBuilder.md#assetconfig)
- [assetsConfig](ProxyQueryMsgBuilder.md#assetsconfig)
- [assetsInfo](ProxyQueryMsgBuilder.md#assetsinfo)
- [baseAsset](ProxyQueryMsgBuilder.md#baseasset)
- [config](ProxyQueryMsgBuilder.md#config)
- [holdingAmount](ProxyQueryMsgBuilder.md#holdingamount)
- [tokenValue](ProxyQueryMsgBuilder.md#tokenvalue)
- [totalValue](ProxyQueryMsgBuilder.md#totalvalue)

## Constructors

### constructor

• **new ProxyQueryMsgBuilder**()

## Methods

### assetConfig

▸ `Static` **assetConfig**(`«destructured»`): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:216](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L216)

___

### assetsConfig

▸ `Static` **assetsConfig**(`«destructured»`): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:232](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L232)

___

### assetsInfo

▸ `Static` **assetsInfo**(`«destructured»`): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| [`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr) |

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:250](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L250)

___

### baseAsset

▸ `Static` **baseAsset**(): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:268](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L268)

___

### config

▸ `Static` **config**(): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:174](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L174)

___

### holdingAmount

▸ `Static` **holdingAmount**(`«destructured»`): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:200](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L200)

___

### tokenValue

▸ `Static` **tokenValue**(`«destructured»`): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identifier` | `string` |

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:184](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L184)

___

### totalValue

▸ `Static` **totalValue**(): [`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/ProxyTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts:179](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.msg-builder.ts#L179)
