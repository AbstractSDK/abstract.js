[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsHostQueryClient

# Class: AnsHostQueryClient

## Hierarchy

- **`AnsHostQueryClient`**

  ↳ [`AnsHostClient`](AnsHostClient.md)

  ↳ [`AnsQueryClient`](AnsQueryClient.md)

## Implements

- [`AnsHostReadOnlyInterface`](../interfaces/AnsHostReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](AnsHostQueryClient.md#constructor)

### Properties

- [client](AnsHostQueryClient.md#client)
- [contractAddress](AnsHostQueryClient.md#contractaddress)

### Methods

- [assetInfoList](AnsHostQueryClient.md#assetinfolist)
- [assetInfos](AnsHostQueryClient.md#assetinfos)
- [assetList](AnsHostQueryClient.md#assetlist)
- [assets](AnsHostQueryClient.md#assets)
- [channelList](AnsHostQueryClient.md#channellist)
- [channels](AnsHostQueryClient.md#channels)
- [config](AnsHostQueryClient.md#config)
- [contractList](AnsHostQueryClient.md#contractlist)
- [contracts](AnsHostQueryClient.md#contracts)
- [ownership](AnsHostQueryClient.md#ownership)
- [poolList](AnsHostQueryClient.md#poollist)
- [poolMetadataList](AnsHostQueryClient.md#poolmetadatalist)
- [poolMetadatas](AnsHostQueryClient.md#poolmetadatas)
- [pools](AnsHostQueryClient.md#pools)
- [registeredDexes](AnsHostQueryClient.md#registereddexes)

## Constructors

### constructor

• **new AnsHostQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:124](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L124)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:121](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L121)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[AnsHostReadOnlyInterface](../interfaces/AnsHostReadOnlyInterface.md).[contractAddress](../interfaces/AnsHostReadOnlyInterface.md#contractaddress)

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

AnsHostReadOnlyInterface.assetInfoList

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

AnsHostReadOnlyInterface.assetInfos

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

AnsHostReadOnlyInterface.assetList

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

AnsHostReadOnlyInterface.assets

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

AnsHostReadOnlyInterface.channelList

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

AnsHostReadOnlyInterface.channels

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:221](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L221)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/AnsHostTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/AnsHostTypes.ConfigResponse.md)\>

#### Implementation of

AnsHostReadOnlyInterface.config

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

AnsHostReadOnlyInterface.contractList

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

AnsHostReadOnlyInterface.contracts

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:197](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L197)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Implementation of

AnsHostReadOnlyInterface.ownership

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

AnsHostReadOnlyInterface.poolList

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

AnsHostReadOnlyInterface.poolMetadataList

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

AnsHostReadOnlyInterface.poolMetadatas

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

AnsHostReadOnlyInterface.pools

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:250](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L250)

___

### registeredDexes

▸ **registeredDexes**(): `Promise`<[`RegisteredDexesResponse`](../interfaces/AnsHostTypes.RegisteredDexesResponse.md)\>

#### Returns

`Promise`<[`RegisteredDexesResponse`](../interfaces/AnsHostTypes.RegisteredDexesResponse.md)\>

#### Implementation of

AnsHostReadOnlyInterface.registeredDexes

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:245](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L245)
