[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsHostClient

# Class: AnsHostClient

## Hierarchy

- [`AnsHostQueryClient`](AnsHostQueryClient.md)

  ↳ **`AnsHostClient`**

## Implements

- [`AnsHostInterface`](../interfaces/AnsHostInterface.md)

## Table of contents

### Constructors

- [constructor](AnsHostClient.md#constructor)

### Properties

- [client](AnsHostClient.md#client)
- [contractAddress](AnsHostClient.md#contractaddress)
- [sender](AnsHostClient.md#sender)

### Methods

- [assetInfoList](AnsHostClient.md#assetinfolist)
- [assetInfos](AnsHostClient.md#assetinfos)
- [assetList](AnsHostClient.md#assetlist)
- [assets](AnsHostClient.md#assets)
- [channelList](AnsHostClient.md#channellist)
- [channels](AnsHostClient.md#channels)
- [config](AnsHostClient.md#config)
- [contractList](AnsHostClient.md#contractlist)
- [contracts](AnsHostClient.md#contracts)
- [ownership](AnsHostClient.md#ownership)
- [poolList](AnsHostClient.md#poollist)
- [poolMetadataList](AnsHostClient.md#poolmetadatalist)
- [poolMetadatas](AnsHostClient.md#poolmetadatas)
- [pools](AnsHostClient.md#pools)
- [registeredDexes](AnsHostClient.md#registereddexes)
- [updateAssetAddresses](AnsHostClient.md#updateassetaddresses)
- [updateChannels](AnsHostClient.md#updatechannels)
- [updateContractAddresses](AnsHostClient.md#updatecontractaddresses)
- [updateDexes](AnsHostClient.md#updatedexes)
- [updateOwnership](AnsHostClient.md#updateownership)
- [updatePools](AnsHostClient.md#updatepools)

## Constructors

### constructor

• **new AnsHostClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[AnsHostQueryClient](AnsHostQueryClient.md).[constructor](AnsHostQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:379](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L379)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[AnsHostQueryClient](AnsHostQueryClient.md).[client](AnsHostQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:375](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L375)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[AnsHostInterface](../interfaces/AnsHostInterface.md).[contractAddress](../interfaces/AnsHostInterface.md#contractaddress)

#### Overrides

[AnsHostQueryClient](AnsHostQueryClient.md).[contractAddress](AnsHostQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:377](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L377)

___

### sender

• **sender**: `string`

#### Implementation of

[AnsHostInterface](../interfaces/AnsHostInterface.md).[sender](../interfaces/AnsHostInterface.md#sender)

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

AnsHostInterface.assetInfoList

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

AnsHostInterface.assetInfos

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

AnsHostInterface.assetList

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

AnsHostInterface.assets

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

AnsHostInterface.channelList

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

AnsHostInterface.channels

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

AnsHostInterface.config

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

AnsHostInterface.contractList

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

AnsHostInterface.contracts

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[contracts](AnsHostQueryClient.md#contracts)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:197](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L197)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/AnsHostTypes.OwnershipForString.md)\>

#### Implementation of

AnsHostInterface.ownership

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

AnsHostInterface.poolList

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

AnsHostInterface.poolMetadataList

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

AnsHostInterface.poolMetadatas

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

AnsHostInterface.pools

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

AnsHostInterface.registeredDexes

#### Inherited from

[AnsHostQueryClient](AnsHostQueryClient.md).[registeredDexes](AnsHostQueryClient.md#registereddexes)

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

AnsHostInterface.updateAssetAddresses

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

AnsHostInterface.updateChannels

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

AnsHostInterface.updateContractAddresses

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

AnsHostInterface.updateDexes

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

AnsHostInterface.updateOwnership

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

AnsHostInterface.updatePools

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.client.ts:496](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.client.ts#L496)
