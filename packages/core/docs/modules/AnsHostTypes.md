[@abstract-money/core](../README.md) / [Exports](../modules.md) / AnsHostTypes

# Namespace: AnsHostTypes

## Table of contents

### Interfaces

- [AssetFilter](../interfaces/AnsHostTypes.AssetFilter.md)
- [AssetInfoFilter](../interfaces/AnsHostTypes.AssetInfoFilter.md)
- [AssetInfoListResponse](../interfaces/AnsHostTypes.AssetInfoListResponse.md)
- [AssetListResponse](../interfaces/AnsHostTypes.AssetListResponse.md)
- [AssetPairingFilter](../interfaces/AnsHostTypes.AssetPairingFilter.md)
- [AssetsResponse](../interfaces/AnsHostTypes.AssetsResponse.md)
- [ChannelEntry](../interfaces/AnsHostTypes.ChannelEntry.md)
- [ChannelFilter](../interfaces/AnsHostTypes.ChannelFilter.md)
- [ChannelListResponse](../interfaces/AnsHostTypes.ChannelListResponse.md)
- [ChannelsResponse](../interfaces/AnsHostTypes.ChannelsResponse.md)
- [ConfigResponse](../interfaces/AnsHostTypes.ConfigResponse.md)
- [ContractEntry](../interfaces/AnsHostTypes.ContractEntry.md)
- [ContractFilter](../interfaces/AnsHostTypes.ContractFilter.md)
- [ContractListResponse](../interfaces/AnsHostTypes.ContractListResponse.md)
- [ContractsResponse](../interfaces/AnsHostTypes.ContractsResponse.md)
- [InstantiateMsg](../interfaces/AnsHostTypes.InstantiateMsg.md)
- [MigrateMsg](../interfaces/AnsHostTypes.MigrateMsg.md)
- [OwnershipForString](../interfaces/AnsHostTypes.OwnershipForString.md)
- [PoolAddressListResponse](../interfaces/AnsHostTypes.PoolAddressListResponse.md)
- [PoolMetadata](../interfaces/AnsHostTypes.PoolMetadata.md)
- [PoolMetadataFilter](../interfaces/AnsHostTypes.PoolMetadataFilter.md)
- [PoolMetadataListResponse](../interfaces/AnsHostTypes.PoolMetadataListResponse.md)
- [PoolMetadatasResponse](../interfaces/AnsHostTypes.PoolMetadatasResponse.md)
- [PoolReference](../interfaces/AnsHostTypes.PoolReference.md)
- [PoolsResponse](../interfaces/AnsHostTypes.PoolsResponse.md)
- [RegisteredDexesResponse](../interfaces/AnsHostTypes.RegisteredDexesResponse.md)
- [UncheckedChannelEntry](../interfaces/AnsHostTypes.UncheckedChannelEntry.md)
- [UncheckedContractEntry](../interfaces/AnsHostTypes.UncheckedContractEntry.md)

### Type Aliases

- [Action](AnsHostTypes.md#action)
- [Addr](AnsHostTypes.md#addr)
- [AnsHostExecuteMsg](AnsHostTypes.md#anshostexecutemsg)
- [AssetEntry](AnsHostTypes.md#assetentry)
- [AssetInfoBaseForAddr](AnsHostTypes.md#assetinfobaseforaddr)
- [AssetInfoBaseForString](AnsHostTypes.md#assetinfobaseforstring)
- [DexAssetPairing](AnsHostTypes.md#dexassetpairing)
- [ExecuteMsg](AnsHostTypes.md#executemsg)
- [Expiration](AnsHostTypes.md#expiration)
- [PoolAddressBaseForAddr](AnsHostTypes.md#pooladdressbaseforaddr)
- [PoolAddressBaseForString](AnsHostTypes.md#pooladdressbaseforstring)
- [PoolType](AnsHostTypes.md#pooltype)
- [QueryMsg](AnsHostTypes.md#querymsg)
- [Timestamp](AnsHostTypes.md#timestamp)
- [Uint64](AnsHostTypes.md#uint64)
- [UniquePoolId](AnsHostTypes.md#uniquepoolid)

## Type Aliases

### Action

Ƭ **Action**: { `transfer_ownership`: { `expiry?`: [`Expiration`](AnsHostTypes.md#expiration) \| ``null`` ; `new_owner`: `string`  }  } \| ``"accept_ownership"`` \| ``"renounce_ownership"``

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:54](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L54)

___

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:180](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L180)

___

### AnsHostExecuteMsg

Ƭ **AnsHostExecuteMsg**: [`ExecuteMsg`](AnsHostTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:239](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L239)

___

### AssetEntry

Ƭ **AssetEntry**: `string`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:51](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L51)

___

### AssetInfoBaseForAddr

Ƭ **AssetInfoBaseForAddr**: { `native`: `string`  } \| { `cw20`: [`Addr`](AnsHostTypes.md#addr)  }

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:175](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L175)

___

### AssetInfoBaseForString

Ƭ **AssetInfoBaseForString**: { `native`: `string`  } \| { `cw20`: `string`  }

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:36](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L36)

___

### DexAssetPairing

Ƭ **DexAssetPairing**: [[`AssetEntry`](AnsHostTypes.md#assetentry), [`AssetEntry`](AnsHostTypes.md#assetentry), `string`]

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:152](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L152)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `update_contract_addresses`: { `to_add`: [[`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md), `string`][] ; `to_remove`: [`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md)[]  }  } \| { `update_asset_addresses`: { `to_add`: [`string`, [`AssetInfoBaseForString`](AnsHostTypes.md#assetinfobaseforstring)][] ; `to_remove`: `string`[]  }  } \| { `update_channels`: { `to_add`: [[`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md), `string`][] ; `to_remove`: [`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md)[]  }  } \| { `update_dexes`: { `to_add`: `string`[] ; `to_remove`: `string`[]  }  } \| { `update_pools`: { `to_add`: [[`PoolAddressBaseForString`](AnsHostTypes.md#pooladdressbaseforstring), [`PoolMetadata`](../interfaces/AnsHostTypes.PoolMetadata.md)][] ; `to_remove`: [`UniquePoolId`](AnsHostTypes.md#uniquepoolid)[]  }  } \| { `update_ownership`: [`Action`](AnsHostTypes.md#action)  }

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:8](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L8)

___

### Expiration

Ƭ **Expiration**: { `at_height`: `number`  } \| { `at_time`: [`Timestamp`](AnsHostTypes.md#timestamp)  } \| { `never`: {}  }

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:60](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L60)

___

### PoolAddressBaseForAddr

Ƭ **PoolAddressBaseForAddr**: { `separate_addresses`: { `liquidity`: [`Addr`](AnsHostTypes.md#addr) ; `swap`: [`Addr`](AnsHostTypes.md#addr)  }  } \| { `contract`: [`Addr`](AnsHostTypes.md#addr)  } \| { `id`: `number`  }

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:210](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L210)

___

### PoolAddressBaseForString

Ƭ **PoolAddressBaseForString**: { `separate_addresses`: { `liquidity`: `string` ; `swap`: `string`  }  } \| { `contract`: `string`  } \| { `id`: `number`  }

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:41](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L41)

___

### PoolType

Ƭ **PoolType**: ``"ConstantProduct"`` \| ``"Stable"`` \| ``"Weighted"`` \| ``"LiquidityBootstrap"``

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:52](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L52)

___

### QueryMsg

Ƭ **QueryMsg**: { `config`: {}  } \| { `assets`: { `names`: `string`[]  }  } \| { `asset_list`: { `filter?`: [`AssetFilter`](../interfaces/AnsHostTypes.AssetFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: `string` \| ``null``  }  } \| { `asset_infos`: { `infos`: [`AssetInfoBaseForString`](AnsHostTypes.md#assetinfobaseforstring)[]  }  } \| { `asset_info_list`: { `filter?`: [`AssetInfoFilter`](../interfaces/AnsHostTypes.AssetInfoFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: [`AssetInfoBaseForString`](AnsHostTypes.md#assetinfobaseforstring) \| ``null``  }  } \| { `contracts`: { `entries`: [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md)[]  }  } \| { `contract_list`: { `filter?`: [`ContractFilter`](../interfaces/AnsHostTypes.ContractFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: [`ContractEntry`](../interfaces/AnsHostTypes.ContractEntry.md) \| ``null``  }  } \| { `channels`: { `entries`: [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md)[]  }  } \| { `channel_list`: { `filter?`: [`ChannelFilter`](../interfaces/AnsHostTypes.ChannelFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: [`ChannelEntry`](../interfaces/AnsHostTypes.ChannelEntry.md) \| ``null``  }  } \| { `registered_dexes`: {}  } \| { `pools`: { `pairings`: [`DexAssetPairing`](AnsHostTypes.md#dexassetpairing)[]  }  } \| { `pool_list`: { `filter?`: [`AssetPairingFilter`](../interfaces/AnsHostTypes.AssetPairingFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: [`DexAssetPairing`](AnsHostTypes.md#dexassetpairing) \| ``null``  }  } \| { `pool_metadatas`: { `ids`: [`UniquePoolId`](AnsHostTypes.md#uniquepoolid)[]  }  } \| { `pool_metadata_list`: { `filter?`: [`PoolMetadataFilter`](../interfaces/AnsHostTypes.PoolMetadataFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: [`UniquePoolId`](AnsHostTypes.md#uniquepoolid) \| ``null``  }  } \| { `ownership`: {}  }

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:85](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L85)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](AnsHostTypes.md#uint64)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:67](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L67)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L68)

___

### UniquePoolId

Ƭ **UniquePoolId**: `number`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.types.ts:53](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.types.ts#L53)