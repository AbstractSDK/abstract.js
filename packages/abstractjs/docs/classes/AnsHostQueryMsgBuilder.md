[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsHostQueryMsgBuilder

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:208](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L208)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:192](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L192)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:172](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L172)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:156](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L156)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:280](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L280)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:264](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L264)

___

### config

▸ `Static` **config**(): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:151](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L151)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:244](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L244)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:228](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L228)

___

### ownership

▸ `Static` **ownership**(): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:377](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L377)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:321](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L321)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:357](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L357)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:341](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L341)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:305](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L305)

___

### registeredDexes

▸ `Static` **registeredDexes**(): [`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/AnsHostTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:300](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L300)
