[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsHostExecuteMsgBuilder

# Class: AnsHostExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](AnsHostExecuteMsgBuilder.md#constructor)

### Methods

- [updateAssetAddresses](AnsHostExecuteMsgBuilder.md#updateassetaddresses)
- [updateChannels](AnsHostExecuteMsgBuilder.md#updatechannels)
- [updateContractAddresses](AnsHostExecuteMsgBuilder.md#updatecontractaddresses)
- [updateDexes](AnsHostExecuteMsgBuilder.md#updatedexes)
- [updateOwnership](AnsHostExecuteMsgBuilder.md#updateownership)
- [updatePools](AnsHostExecuteMsgBuilder.md#updatepools)

## Constructors

### constructor

• **new AnsHostExecuteMsgBuilder**()

## Methods

### updateAssetAddresses

▸ `Static` **updateAssetAddresses**(`«destructured»`): [`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`string`, [`AssetInfoBaseForString`](../modules/AnsHostTypes.md#assetinfobaseforstring)][] |
| › `toRemove` | `string`[] |

#### Returns

[`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:23](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L23)

___

### updateChannels

▸ `Static` **updateChannels**(`«destructured»`): [`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [[`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md), `string`][] |
| › `toRemove` | [`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md)[] |

#### Returns

[`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:36](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L36)

___

### updateContractAddresses

▸ `Static` **updateContractAddresses**(`«destructured»`): [`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [[`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md), `string`][] |
| › `toRemove` | [`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md)[] |

#### Returns

[`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:10](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L10)

___

### updateDexes

▸ `Static` **updateDexes**(`«destructured»`): [`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[] |
| › `toRemove` | `string`[] |

#### Returns

[`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L49)

___

### updateOwnership

▸ `Static` **updateOwnership**(`action`): [`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/AnsHostTypes.md#action) |

#### Returns

[`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:75](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L75)

___

### updatePools

▸ `Static` **updatePools**(`«destructured»`): [`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [[`PoolAddressBaseForString`](../modules/AnsHostTypes.md#pooladdressbaseforstring), [`PoolMetadata`](../interfaces/AnsHostTypes.PoolMetadata.md)][] |
| › `toRemove` | `number`[] |

#### Returns

[`ExecuteMsg`](../modules/AnsHostTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:62](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L62)
