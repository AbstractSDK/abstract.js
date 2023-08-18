[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsClient

# Class: AnsClient

AnsClient is a client for interacting with the Abstract Name Service.

## Hierarchy

- [`AnsHostClient`](AnsHostClient.md)<`this`\> & [`AnsQueryClient`](AnsQueryClient.md)<`this`\>

  ↳ **`AnsClient`**

## Implements

- `IAnsClient`

## Table of contents

### Constructors

- [constructor](AnsClient.md#constructor)

### Properties

- [client](AnsClient.md#client)
- [contractAddress](AnsClient.md#contractaddress)
- [sender](AnsClient.md#sender)

### Methods

- [assetInfoList](AnsClient.md#assetinfolist)
- [assetInfos](AnsClient.md#assetinfos)
- [assetList](AnsClient.md#assetlist)
- [assets](AnsClient.md#assets)
- [channelList](AnsClient.md#channellist)
- [channels](AnsClient.md#channels)
- [config](AnsClient.md#config)
- [contractList](AnsClient.md#contractlist)
- [contracts](AnsClient.md#contracts)
- [filterAssets](AnsClient.md#filterassets)
- [filterChannels](AnsClient.md#filterchannels)
- [filterContracts](AnsClient.md#filtercontracts)
- [listAssets](AnsClient.md#listassets)
- [listChannels](AnsClient.md#listchannels)
- [listContracts](AnsClient.md#listcontracts)
- [ownership](AnsClient.md#ownership)
- [poolList](AnsClient.md#poollist)
- [poolMetadataList](AnsClient.md#poolmetadatalist)
- [poolMetadatas](AnsClient.md#poolmetadatas)
- [pools](AnsClient.md#pools)
- [registeredDexes](AnsClient.md#registereddexes)
- [updateAssetAddresses](AnsClient.md#updateassetaddresses)
- [updateChannels](AnsClient.md#updatechannels)
- [updateContractAddresses](AnsClient.md#updatecontractaddresses)
- [updateDexes](AnsClient.md#updatedexes)
- [updateOwnership](AnsClient.md#updateownership)
- [updatePools](AnsClient.md#updatepools)

## Constructors

### constructor

• **new AnsClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

Mixin(AnsHostClient, AnsQueryClient).constructor

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:198](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L198)

## Properties

### client

• **client**: `SigningCosmWasmClient` & `CosmWasmClient`

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).client

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:375](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L375)

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:121](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L121)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

IAnsClient.contractAddress

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).contractAddress

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:377](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L377)

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:122](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L122)

___

### sender

• **sender**: `string`

#### Implementation of

IAnsClient.sender

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).sender

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:376](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L376)

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

IAnsClient.assetInfoList

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).assetInfoList

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

IAnsClient.assetInfos

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).assetInfos

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

IAnsClient.assetList

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).assetList

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

IAnsClient.assets

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).assets

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

IAnsClient.channelList

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).channelList

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

IAnsClient.channels

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).channels

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:221](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L221)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/AnsHostTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/AnsHostTypes.ConfigResponse.md)\>

#### Implementation of

IAnsClient.config

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).config

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

IAnsClient.contractList

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).contractList

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

IAnsClient.contracts

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).contracts

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

IAnsClient.filterAssets

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).filterAssets

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

IAnsClient.filterChannels

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).filterChannels

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

IAnsClient.filterContracts

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).filterContracts

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

IAnsClient.listAssets

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).listAssets

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

IAnsClient.listChannels

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).listChannels

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

IAnsClient.listContracts

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).listContracts

#### Defined in

[packages/abstractjs/src/clients/AnsClient.ts:149](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AnsClient.ts#L149)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Implementation of

IAnsClient.ownership

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).ownership

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

IAnsClient.poolList

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).poolList

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

IAnsClient.poolMetadataList

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).poolMetadataList

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

IAnsClient.poolMetadatas

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).poolMetadatas

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

IAnsClient.pools

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).pools

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:250](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L250)

___

### registeredDexes

▸ **registeredDexes**(): `Promise`<[`RegisteredDexesResponse`](../interfaces/AnsHostTypes.RegisteredDexesResponse.md)\>

#### Returns

`Promise`<[`RegisteredDexesResponse`](../interfaces/AnsHostTypes.RegisteredDexesResponse.md)\>

#### Implementation of

IAnsClient.registeredDexes

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).registeredDexes

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:245](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L245)

___

### updateAssetAddresses

▸ **updateAssetAddresses**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `toAdd` | `string`[][] | `undefined` |
| › `toRemove` | `string`[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IAnsClient.updateAssetAddresses

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).updateAssetAddresses

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:418](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L418)

___

### updateChannels

▸ **updateChannels**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `toAdd` | [`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md)[][] | `undefined` |
| › `toRemove` | [`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md)[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IAnsClient.updateChannels

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).updateChannels

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:444](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L444)

___

### updateContractAddresses

▸ **updateContractAddresses**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `toAdd` | [`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md)[][] | `undefined` |
| › `toRemove` | [`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md)[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IAnsClient.updateContractAddresses

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).updateContractAddresses

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:392](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L392)

___

### updateDexes

▸ **updateDexes**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `toAdd` | `string`[] | `undefined` |
| › `toRemove` | `string`[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IAnsClient.updateDexes

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).updateDexes

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:470](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L470)

___

### updateOwnership

▸ **updateOwnership**(`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | [`Action`](../modules/AnsHostTypes.md#action) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IAnsClient.updateOwnership

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).updateOwnership

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:522](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L522)

___

### updatePools

▸ **updatePools**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `toAdd` | [`PoolAddressBaseForString`](../modules/AnsHostTypes.md#pooladdressbaseforstring)[][] | `undefined` |
| › `toRemove` | `number`[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

IAnsClient.updatePools

#### Inherited from

Mixin(AnsHostClient, AnsQueryClient).updatePools

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:496](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L496)
