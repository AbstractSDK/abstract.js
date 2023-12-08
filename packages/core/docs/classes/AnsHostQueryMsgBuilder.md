[@abstract-money/core](../README.md) / [Exports](../modules.md) / AnsHostQueryMsgBuilder

# Class: AnsHostQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](AnsHostQueryMsgBuilder.md#constructor)

### Methods

- [assetInfoList](AnsHostQueryMsgBuilder.md#assetinfolist)
- [assetInfos](AnsHostQueryMsgBuilder.md#assetinfos)
- [assetList](AnsHostQueryMsgBuilder.md#assetlist)
- [assets](AnsHostQueryMsgBuilder.md#assets)
- [channelList](AnsHostQueryMsgBuilder.md#channellist)
- [channels](AnsHostQueryMsgBuilder.md#channels)
- [config](AnsHostQueryMsgBuilder.md#config)
- [contractList](AnsHostQueryMsgBuilder.md#contractlist)
- [contracts](AnsHostQueryMsgBuilder.md#contracts)
- [ownership](AnsHostQueryMsgBuilder.md#ownership)
- [poolList](AnsHostQueryMsgBuilder.md#poollist)
- [poolMetadataList](AnsHostQueryMsgBuilder.md#poolmetadatalist)
- [poolMetadatas](AnsHostQueryMsgBuilder.md#poolmetadatas)
- [pools](AnsHostQueryMsgBuilder.md#pools)
- [registeredDexes](AnsHostQueryMsgBuilder.md#registereddexes)

## Constructors

### constructor

• **new AnsHostQueryMsgBuilder**()

## Methods

### assetInfoList

▸ `Static` **assetInfoList**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`AssetInfoFilter`](../interfaces/AnsHostTypes.AssetInfoFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring) |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:124](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L124)

___

### assetInfos

▸ `Static` **assetInfos**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring)[] |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:113](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L113)

___

### assetList

▸ `Static` **assetList**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`AssetFilter`](../interfaces/AnsHostTypes.AssetFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:98](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L98)

___

### assets

▸ `Static` **assets**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `names` | `string`[] |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:87](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L87)

___

### channelList

▸ `Static` **channelList**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`ChannelFilter`](../interfaces/AnsHostTypes.ChannelFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md) |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:176](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L176)

___

### channels

▸ `Static` **channels**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entries` | [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md)[] |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:165](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L165)

___

### config

▸ `Static` **config**(): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:82](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L82)

___

### contractList

▸ `Static` **contractList**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`ContractFilter`](../interfaces/AnsHostTypes.ContractFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md) |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:150](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L150)

___

### contracts

▸ `Static` **contracts**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entries` | [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md)[] |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:139](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L139)

___

### ownership

▸ `Static` **ownership**(): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:248](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L248)

___

### poolList

▸ `Static` **poolList**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`AssetPairingFilter`](../interfaces/AnsHostTypes.AssetPairingFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing) |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:207](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L207)

___

### poolMetadataList

▸ `Static` **poolMetadataList**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter` | `undefined` \| ``null`` \| [`PoolMetadataFilter`](../interfaces/AnsHostTypes.PoolMetadataFilter.md) |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `number` |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:233](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L233)

___

### poolMetadatas

▸ `Static` **poolMetadatas**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `number`[] |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:222](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L222)

___

### pools

▸ `Static` **pools**(`«destructured»`): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pairings` | [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing)[] |

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:196](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L196)

___

### registeredDexes

▸ `Static` **registeredDexes**(): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:191](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L191)
