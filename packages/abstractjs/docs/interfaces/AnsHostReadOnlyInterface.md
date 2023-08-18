[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsHostReadOnlyInterface

# Interface: AnsHostReadOnlyInterface

## Hierarchy

- **`AnsHostReadOnlyInterface`**

  ↳ [`AnsHostInterface`](AnsHostInterface.md)

## Implemented by

- [`AnsHostQueryClient`](../classes/AnsHostQueryClient.md)

## Table of contents

### Properties

- [assetInfoList](AnsHostReadOnlyInterface.md#assetinfolist)
- [assetInfos](AnsHostReadOnlyInterface.md#assetinfos)
- [assetList](AnsHostReadOnlyInterface.md#assetlist)
- [assets](AnsHostReadOnlyInterface.md#assets)
- [channelList](AnsHostReadOnlyInterface.md#channellist)
- [channels](AnsHostReadOnlyInterface.md#channels)
- [config](AnsHostReadOnlyInterface.md#config)
- [contractAddress](AnsHostReadOnlyInterface.md#contractaddress)
- [contractList](AnsHostReadOnlyInterface.md#contractlist)
- [contracts](AnsHostReadOnlyInterface.md#contracts)
- [ownership](AnsHostReadOnlyInterface.md#ownership)
- [poolList](AnsHostReadOnlyInterface.md#poollist)
- [poolMetadataList](AnsHostReadOnlyInterface.md#poolmetadatalist)
- [poolMetadatas](AnsHostReadOnlyInterface.md#poolmetadatas)
- [pools](AnsHostReadOnlyInterface.md#pools)
- [registeredDexes](AnsHostReadOnlyInterface.md#registereddexes)

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

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:55](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L55)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](AnsHostTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](AnsHostTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](AnsHostTypes.ConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:12](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L12)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:11](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L11)

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

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:41](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L41)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](AnsHostTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](AnsHostTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](AnsHostTypes.OwnershipForString.md)\>

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

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:70](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L70)

___

### registeredDexes

• **registeredDexes**: () => `Promise`<[`RegisteredDexesResponse`](AnsHostTypes.RegisteredDexesResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`RegisteredDexesResponse`](AnsHostTypes.RegisteredDexesResponse.md)\>

##### Returns

`Promise`<[`RegisteredDexesResponse`](AnsHostTypes.RegisteredDexesResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:69](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L69)
