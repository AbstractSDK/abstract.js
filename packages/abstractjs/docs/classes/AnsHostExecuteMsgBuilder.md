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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:72](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L72)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:90](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L90)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:54](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L54)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:108](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L108)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:144](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L144)

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

[packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts:126](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.msg-builder.ts#L126)
