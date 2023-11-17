[@abstract-money/core](../README.md) / [Exports](../modules.md) / AnsHostInterface

# Interface: AnsHostInterface

## Hierarchy

- [`AnsHostReadOnlyInterface`](AnsHostReadOnlyInterface.md)

  ↳ **`AnsHostInterface`**

## Implemented by

- [`AnsHostClient`](../classes/AnsHostClient.md)

## Table of contents

### Properties

- [assetInfoList](AnsHostInterface.md#assetinfolist)
- [assetInfos](AnsHostInterface.md#assetinfos)
- [assetList](AnsHostInterface.md#assetlist)
- [assets](AnsHostInterface.md#assets)
- [channelList](AnsHostInterface.md#channellist)
- [channels](AnsHostInterface.md#channels)
- [config](AnsHostInterface.md#config)
- [contractAddress](AnsHostInterface.md#contractaddress)
- [contractList](AnsHostInterface.md#contractlist)
- [contracts](AnsHostInterface.md#contracts)
- [ownership](AnsHostInterface.md#ownership)
- [poolList](AnsHostInterface.md#poollist)
- [poolMetadataList](AnsHostInterface.md#poolmetadatalist)
- [poolMetadatas](AnsHostInterface.md#poolmetadatas)
- [pools](AnsHostInterface.md#pools)
- [registeredDexes](AnsHostInterface.md#registereddexes)
- [sender](AnsHostInterface.md#sender)
- [updateAssetAddresses](AnsHostInterface.md#updateassetaddresses)
- [updateChannels](AnsHostInterface.md#updatechannels)
- [updateContractAddresses](AnsHostInterface.md#updatecontractaddresses)
- [updateDexes](AnsHostInterface.md#updatedexes)
- [updateOwnership](AnsHostInterface.md#updateownership)
- [updatePools](AnsHostInterface.md#updatepools)

## Properties

### assetInfoList

• **assetInfoList**: (`__namedParameters`: { `filter?`: [`AssetInfoFilter`](AnsHostTypes.AssetInfoFilter.md) ; `limit?`: `number` ; `startAfter?`: [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring)  }) => `Promise`<[`AssetInfoListResponse`](AnsHostTypes.AssetInfoListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AssetInfoListResponse`](AnsHostTypes.AssetInfoListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`AssetInfoFilter`](AnsHostTypes.AssetInfoFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring) |

##### Returns

`Promise`<[`AssetInfoListResponse`](AnsHostTypes.AssetInfoListResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[assetInfoList](AnsHostReadOnlyInterface.md#assetinfolist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:32](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L32)

___

### assetInfos

• **assetInfos**: (`__namedParameters`: { `infos`: [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring)[]  }) => `Promise`<[`AssetsResponse`](AnsHostTypes.AssetsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AssetsResponse`](AnsHostTypes.AssetsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring)[] |

##### Returns

`Promise`<[`AssetsResponse`](AnsHostTypes.AssetsResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[assetInfos](AnsHostReadOnlyInterface.md#assetinfos)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:27](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L27)

___

### assetList

• **assetList**: (`__namedParameters`: { `filter?`: [`AssetFilter`](AnsHostTypes.AssetFilter.md) ; `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`AssetListResponse`](AnsHostTypes.AssetListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AssetListResponse`](AnsHostTypes.AssetListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`AssetFilter`](AnsHostTypes.AssetFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`AssetListResponse`](AnsHostTypes.AssetListResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[assetList](AnsHostReadOnlyInterface.md#assetlist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:18](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L18)

___

### assets

• **assets**: (`__namedParameters`: { `names`: `string`[]  }) => `Promise`<[`AssetsResponse`](AnsHostTypes.AssetsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AssetsResponse`](AnsHostTypes.AssetsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `names` | `string`[] |

##### Returns

`Promise`<[`AssetsResponse`](AnsHostTypes.AssetsResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[assets](AnsHostReadOnlyInterface.md#assets)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:13](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L13)

___

### channelList

• **channelList**: (`__namedParameters`: { `filter?`: [`ChannelFilter`](AnsHostTypes.ChannelFilter.md) ; `limit?`: `number` ; `startAfter?`: [`ChannelEntry`](AnsHostTypes.ChannelEntry.md)  }) => `Promise`<[`ChannelListResponse`](AnsHostTypes.ChannelListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ChannelListResponse`](AnsHostTypes.ChannelListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ChannelFilter`](AnsHostTypes.ChannelFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ChannelEntry`](AnsHostTypes.ChannelEntry.md) |

##### Returns

`Promise`<[`ChannelListResponse`](AnsHostTypes.ChannelListResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[channelList](AnsHostReadOnlyInterface.md#channellist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:60](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L60)

___

### channels

• **channels**: (`__namedParameters`: { `entries`: [`ChannelEntry`](AnsHostTypes.ChannelEntry.md)[]  }) => `Promise`<[`ChannelsResponse`](AnsHostTypes.ChannelsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ChannelsResponse`](AnsHostTypes.ChannelsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entries` | [`ChannelEntry`](AnsHostTypes.ChannelEntry.md)[] |

##### Returns

`Promise`<[`ChannelsResponse`](AnsHostTypes.ChannelsResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[channels](AnsHostReadOnlyInterface.md#channels)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:55](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L55)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](AnsHostTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](AnsHostTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](AnsHostTypes.ConfigResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[config](AnsHostReadOnlyInterface.md#config)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:12](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L12)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[contractAddress](AnsHostReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:309](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L309)

___

### contractList

• **contractList**: (`__namedParameters`: { `filter?`: [`ContractFilter`](AnsHostTypes.ContractFilter.md) ; `limit?`: `number` ; `startAfter?`: [`ContractEntry`](AnsHostTypes.ContractEntry.md)  }) => `Promise`<[`ContractListResponse`](AnsHostTypes.ContractListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ContractListResponse`](AnsHostTypes.ContractListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ContractFilter`](AnsHostTypes.ContractFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ContractEntry`](AnsHostTypes.ContractEntry.md) |

##### Returns

`Promise`<[`ContractListResponse`](AnsHostTypes.ContractListResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[contractList](AnsHostReadOnlyInterface.md#contractlist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:46](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L46)

___

### contracts

• **contracts**: (`__namedParameters`: { `entries`: [`ContractEntry`](AnsHostTypes.ContractEntry.md)[]  }) => `Promise`<[`ContractsResponse`](AnsHostTypes.ContractsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ContractsResponse`](AnsHostTypes.ContractsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entries` | [`ContractEntry`](AnsHostTypes.ContractEntry.md)[] |

##### Returns

`Promise`<[`ContractsResponse`](AnsHostTypes.ContractsResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[contracts](AnsHostReadOnlyInterface.md#contracts)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:41](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L41)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](AnsHostTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](AnsHostTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](AnsHostTypes.OwnershipForString.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[ownership](AnsHostReadOnlyInterface.md#ownership)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:98](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L98)

___

### poolList

• **poolList**: (`__namedParameters`: { `filter?`: [`AssetPairingFilter`](AnsHostTypes.AssetPairingFilter.md) ; `limit?`: `number` ; `startAfter?`: [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing)  }) => `Promise`<[`PoolAddressListResponse`](AnsHostTypes.PoolAddressListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`PoolAddressListResponse`](AnsHostTypes.PoolAddressListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`AssetPairingFilter`](AnsHostTypes.AssetPairingFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing) |

##### Returns

`Promise`<[`PoolAddressListResponse`](AnsHostTypes.PoolAddressListResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[poolList](AnsHostReadOnlyInterface.md#poollist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:75](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L75)

___

### poolMetadataList

• **poolMetadataList**: (`__namedParameters`: { `filter?`: [`PoolMetadataFilter`](AnsHostTypes.PoolMetadataFilter.md) ; `limit?`: `number` ; `startAfter?`: `number`  }) => `Promise`<[`PoolMetadataListResponse`](AnsHostTypes.PoolMetadataListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`PoolMetadataListResponse`](AnsHostTypes.PoolMetadataListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`PoolMetadataFilter`](AnsHostTypes.PoolMetadataFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | `number` |

##### Returns

`Promise`<[`PoolMetadataListResponse`](AnsHostTypes.PoolMetadataListResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[poolMetadataList](AnsHostReadOnlyInterface.md#poolmetadatalist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:89](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L89)

___

### poolMetadatas

• **poolMetadatas**: (`__namedParameters`: { `ids`: `number`[]  }) => `Promise`<[`PoolMetadatasResponse`](AnsHostTypes.PoolMetadatasResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`PoolMetadatasResponse`](AnsHostTypes.PoolMetadatasResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `number`[] |

##### Returns

`Promise`<[`PoolMetadatasResponse`](AnsHostTypes.PoolMetadatasResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[poolMetadatas](AnsHostReadOnlyInterface.md#poolmetadatas)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:84](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L84)

___

### pools

• **pools**: (`__namedParameters`: { `pairings`: [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing)[]  }) => `Promise`<[`PoolsResponse`](AnsHostTypes.PoolsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`PoolsResponse`](AnsHostTypes.PoolsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pairings` | [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing)[] |

##### Returns

`Promise`<[`PoolsResponse`](AnsHostTypes.PoolsResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[pools](AnsHostReadOnlyInterface.md#pools)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:70](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L70)

___

### registeredDexes

• **registeredDexes**: () => `Promise`<[`RegisteredDexesResponse`](AnsHostTypes.RegisteredDexesResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`RegisteredDexesResponse`](AnsHostTypes.RegisteredDexesResponse.md)\>

##### Returns

`Promise`<[`RegisteredDexesResponse`](AnsHostTypes.RegisteredDexesResponse.md)\>

#### Inherited from

[AnsHostReadOnlyInterface](AnsHostReadOnlyInterface.md).[registeredDexes](AnsHostReadOnlyInterface.md#registereddexes)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:69](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L69)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:310](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L310)

___

### updateAssetAddresses

• **updateAssetAddresses**: (`__namedParameters`: { `toAdd`: `string`[][] ; `toRemove`: `string`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[][] |
| › `toRemove` | `string`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:318](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L318)

___

### updateChannels

• **updateChannels**: (`__namedParameters`: { `toAdd`: [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[][] ; `toRemove`: [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[][] |
| › `toRemove` | [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:325](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L325)

___

### updateContractAddresses

• **updateContractAddresses**: (`__namedParameters`: { `toAdd`: [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[][] ; `toRemove`: [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[][] |
| › `toRemove` | [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:311](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L311)

___

### updateDexes

• **updateDexes**: (`__namedParameters`: { `toAdd`: `string`[] ; `toRemove`: `string`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[] |
| › `toRemove` | `string`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:332](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L332)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/AnsHostTypes.md#action), `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/AnsHostTypes.md#action) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:346](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L346)

___

### updatePools

• **updatePools**: (`__namedParameters`: { `toAdd`: [`PoolAddressBaseForString`](../modules/AnsHostTypes.md#pooladdressbaseforstring)[][] ; `toRemove`: `number`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`PoolAddressBaseForString`](../modules/AnsHostTypes.md#pooladdressbaseforstring)[][] |
| › `toRemove` | `number`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:339](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L339)
