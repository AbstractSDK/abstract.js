[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsQueryClient

# Class: AnsQueryClient

A query client for interacting with Abstract Name Service.

## Hierarchy

- [`AnsHostQueryClient`](AnsHostQueryClient.md)

  ↳ **`AnsQueryClient`**

## Implements

- `IAnsQueryClient`

## Table of contents

### Constructors

- [constructor](AnsQueryClient.md#constructor)

### Properties

- [client](AnsQueryClient.md#client)
- [contractAddress](AnsQueryClient.md#contractaddress)

### Methods

- [assetInfoList](AnsQueryClient.md#assetinfolist)
- [assetInfos](AnsQueryClient.md#assetinfos)
- [assetList](AnsQueryClient.md#assetlist)
- [assets](AnsQueryClient.md#assets)
- [channelList](AnsQueryClient.md#channellist)
- [channels](AnsQueryClient.md#channels)
- [config](AnsQueryClient.md#config)
- [contractList](AnsQueryClient.md#contractlist)
- [contracts](AnsQueryClient.md#contracts)
- [filterAssets](AnsQueryClient.md#filterassets)
- [filterChannels](AnsQueryClient.md#filterchannels)
- [filterContracts](AnsQueryClient.md#filtercontracts)
- [listAssets](AnsQueryClient.md#listassets)
- [listChannels](AnsQueryClient.md#listchannels)
- [listContracts](AnsQueryClient.md#listcontracts)
- [ownership](AnsQueryClient.md#ownership)
- [poolList](AnsQueryClient.md#poollist)
- [poolMetadataList](AnsQueryClient.md#poolmetadatalist)
- [poolMetadatas](AnsQueryClient.md#poolmetadatas)
- [pools](AnsQueryClient.md#pools)
- [registeredDexes](AnsQueryClient.md#registereddexes)

## Constructors

### constructor

• **new AnsQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Overrides

[AnsHostQueryClient](AnsHostQueryClient.md).[constructor](AnsHostQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:55](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L55)

## Properties

### client

• **client**: `CosmWasmClient`

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[client](AnsHostQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:121](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L121)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

IAnsQueryClient.contractAddress

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[contractAddress](AnsHostQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:122](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L122)

## Methods

### assetInfoList

▸ **assetInfoList**(`«destructured»`): `Promise`<[`AssetInfoListResponse`](../interfaces/AnsHostTypes.AssetInfoListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`AssetInfoFilter`](../interfaces/AnsHostTypes.AssetInfoFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring) |

#### Returns

`Promise`<[`AssetInfoListResponse`](../interfaces/AnsHostTypes.AssetInfoListResponse.md)\>

#### Implementation of

IAnsQueryClient.assetInfoList

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[assetInfoList](AnsHostQueryClient.md#assetinfolist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:180](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L180)

___

### assetInfos

▸ **assetInfos**(`«destructured»`): `Promise`<[`AssetsResponse`](../interfaces/AnsHostTypes.AssetsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring)[] |

#### Returns

`Promise`<[`AssetsResponse`](../interfaces/AnsHostTypes.AssetsResponse.md)\>

#### Implementation of

IAnsQueryClient.assetInfos

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[assetInfos](AnsHostQueryClient.md#assetinfos)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:173](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L173)

___

### assetList

▸ **assetList**(`«destructured»`): `Promise`<[`AssetListResponse`](../interfaces/AnsHostTypes.AssetListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`AssetFilter`](../interfaces/AnsHostTypes.AssetFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`AssetListResponse`](../interfaces/AnsHostTypes.AssetListResponse.md)\>

#### Implementation of

IAnsQueryClient.assetList

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[assetList](AnsHostQueryClient.md#assetlist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:156](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L156)

___

### assets

▸ **assets**(`«destructured»`): `Promise`<[`AssetsResponse`](../interfaces/AnsHostTypes.AssetsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `names` | `string`[] |

#### Returns

`Promise`<[`AssetsResponse`](../interfaces/AnsHostTypes.AssetsResponse.md)\>

#### Implementation of

IAnsQueryClient.assets

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[assets](AnsHostQueryClient.md#assets)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:149](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L149)

___

### channelList

▸ **channelList**(`«destructured»`): `Promise`<[`ChannelListResponse`](../interfaces/AnsHostTypes.ChannelListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ChannelFilter`](../interfaces/AnsHostTypes.ChannelFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md) |

#### Returns

`Promise`<[`ChannelListResponse`](../interfaces/AnsHostTypes.ChannelListResponse.md)\>

#### Implementation of

IAnsQueryClient.channelList

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[channelList](AnsHostQueryClient.md#channellist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:228](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L228)

___

### channels

▸ **channels**(`«destructured»`): `Promise`<[`ChannelsResponse`](../interfaces/AnsHostTypes.ChannelsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entries` | [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md)[] |

#### Returns

`Promise`<[`ChannelsResponse`](../interfaces/AnsHostTypes.ChannelsResponse.md)\>

#### Implementation of

IAnsQueryClient.channels

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[channels](AnsHostQueryClient.md#channels)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:221](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L221)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/AnsHostTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/AnsHostTypes.ConfigResponse.md)\>

#### Implementation of

IAnsQueryClient.config

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[config](AnsHostQueryClient.md#config)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:144](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L144)

___

### contractList

▸ **contractList**(`«destructured»`): `Promise`<[`ContractListResponse`](../interfaces/AnsHostTypes.ContractListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ContractFilter`](../interfaces/AnsHostTypes.ContractFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md) |

#### Returns

`Promise`<[`ContractListResponse`](../interfaces/AnsHostTypes.ContractListResponse.md)\>

#### Implementation of

IAnsQueryClient.contractList

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[contractList](AnsHostQueryClient.md#contractlist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:204](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L204)

___

### contracts

▸ **contracts**(`«destructured»`): `Promise`<[`ContractsResponse`](../interfaces/AnsHostTypes.ContractsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entries` | [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md)[] |

#### Returns

`Promise`<[`ContractsResponse`](../interfaces/AnsHostTypes.ContractsResponse.md)\>

#### Implementation of

IAnsQueryClient.contracts

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[contracts](AnsHostQueryClient.md#contracts)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:197](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L197)

___

### filterAssets

▸ **filterAssets**(`ids`): `Promise`<[`AnsAssetEntry`](../modules.md#ansassetentry)[]\>

Filter assets in ANS by their ids.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Object` |
| `ids.ids` | `string`[] |

#### Returns

`Promise`<[`AnsAssetEntry`](../modules.md#ansassetentry)[]\>

#### Implementation of

IAnsQueryClient.filterAssets

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:99](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L99)

___

### filterChannels

▸ **filterChannels**(`entries`): `Promise`<[`AnsChannelEntry`](../modules.md#anschannelentry)[]\>

Filter channels in ANS by their ids.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `Object` |
| `entries.entries` | [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md)[] |

#### Returns

`Promise`<[`AnsChannelEntry`](../modules.md#anschannelentry)[]\>

#### Implementation of

IAnsQueryClient.filterChannels

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:139](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L139)

___

### filterContracts

▸ **filterContracts**(`entries`): `Promise`<[`AnsContractEntry`](../modules.md#anscontractentry)[]\>

Filter contracts in ANS by their ids.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `Object` |
| `entries.entries` | [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md)[] |

#### Returns

`Promise`<[`AnsContractEntry`](../modules.md#anscontractentry)[]\>

#### Implementation of

IAnsQueryClient.filterContracts

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:178](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L178)

___

### listAssets

▸ **listAssets**(`«destructured»`): `Promise`<[`AnsAssetEntry`](../modules.md#ansassetentry)[]\>

List all assets in ANS.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `startAfter` | `string` |

#### Returns

`Promise`<[`AnsAssetEntry`](../modules.md#ansassetentry)[]\>

#### Implementation of

IAnsQueryClient.listAssets

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:69](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L69)

___

### listChannels

▸ **listChannels**(`userPageToken`): `Promise`<[`AnsChannelEntry`](../modules.md#anschannelentry)[]\>

List all the channels in ANS.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userPageToken` | `Object` |
| `userPageToken.startAfter` | [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md) |

#### Returns

`Promise`<[`AnsChannelEntry`](../modules.md#anschannelentry)[]\>

#### Implementation of

IAnsQueryClient.listChannels

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:109](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L109)

___

### listContracts

▸ **listContracts**(`«destructured»`): `Promise`<[`AnsContractEntry`](../modules.md#anscontractentry)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `startAfter` | [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md) |

#### Returns

`Promise`<[`AnsContractEntry`](../modules.md#anscontractentry)[]\>

#### Implementation of

IAnsQueryClient.listContracts

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:149](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L149)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Implementation of

IAnsQueryClient.ownership

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[ownership](AnsHostQueryClient.md#ownership)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:298](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L298)

___

### poolList

▸ **poolList**(`«destructured»`): `Promise`<[`PoolAddressListResponse`](../interfaces/AnsHostTypes.PoolAddressListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`AssetPairingFilter`](../interfaces/AnsHostTypes.AssetPairingFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing) |

#### Returns

`Promise`<[`PoolAddressListResponse`](../interfaces/AnsHostTypes.PoolAddressListResponse.md)\>

#### Implementation of

IAnsQueryClient.poolList

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[poolList](AnsHostQueryClient.md#poollist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:257](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L257)

___

### poolMetadataList

▸ **poolMetadataList**(`«destructured»`): `Promise`<[`PoolMetadataListResponse`](../interfaces/AnsHostTypes.PoolMetadataListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`PoolMetadataFilter`](../interfaces/AnsHostTypes.PoolMetadataFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | `number` |

#### Returns

`Promise`<[`PoolMetadataListResponse`](../interfaces/AnsHostTypes.PoolMetadataListResponse.md)\>

#### Implementation of

IAnsQueryClient.poolMetadataList

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[poolMetadataList](AnsHostQueryClient.md#poolmetadatalist)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:281](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L281)

___

### poolMetadatas

▸ **poolMetadatas**(`«destructured»`): `Promise`<[`PoolMetadatasResponse`](../interfaces/AnsHostTypes.PoolMetadatasResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `number`[] |

#### Returns

`Promise`<[`PoolMetadatasResponse`](../interfaces/AnsHostTypes.PoolMetadatasResponse.md)\>

#### Implementation of

IAnsQueryClient.poolMetadatas

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[poolMetadatas](AnsHostQueryClient.md#poolmetadatas)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:274](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L274)

___

### pools

▸ **pools**(`«destructured»`): `Promise`<[`PoolsResponse`](../interfaces/AnsHostTypes.PoolsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pairings` | [`DexAssetPairing`](../modules/AnsHostTypes.md#dexassetpairing)[] |

#### Returns

`Promise`<[`PoolsResponse`](../interfaces/AnsHostTypes.PoolsResponse.md)\>

#### Implementation of

IAnsQueryClient.pools

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[pools](AnsHostQueryClient.md#pools)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:250](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L250)

___

### registeredDexes

▸ **registeredDexes**(): `Promise`<[`RegisteredDexesResponse`](../interfaces/AnsHostTypes.RegisteredDexesResponse.md)\>

#### Returns

`Promise`<[`RegisteredDexesResponse`](../interfaces/AnsHostTypes.RegisteredDexesResponse.md)\>

#### Implementation of

IAnsQueryClient.registeredDexes

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[registeredDexes](AnsHostQueryClient.md#registereddexes)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:245](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L245)
