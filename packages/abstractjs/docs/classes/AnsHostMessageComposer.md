[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsHostMessageComposer

# Class: AnsHostMessageComposer

## Implements

- [`AnsHostMessage`](../interfaces/AnsHostMessage.md)

## Table of contents

### Constructors

- [constructor](AnsHostMessageComposer.md#constructor)

### Properties

- [contractAddress](AnsHostMessageComposer.md#contractaddress)
- [sender](AnsHostMessageComposer.md#sender)

### Methods

- [updateAssetAddresses](AnsHostMessageComposer.md#updateassetaddresses)
- [updateChannels](AnsHostMessageComposer.md#updatechannels)
- [updateContractAddresses](AnsHostMessageComposer.md#updatecontractaddresses)
- [updateDexes](AnsHostMessageComposer.md#updatedexes)
- [updateOwnership](AnsHostMessageComposer.md#updateownership)
- [updatePools](AnsHostMessageComposer.md#updatepools)

## Constructors

### constructor

• **new AnsHostMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:116](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L116)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[AnsHostMessage](../interfaces/AnsHostMessage.md).[contractAddress](../interfaces/AnsHostMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:114](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L114)

___

### sender

• **sender**: `string`

#### Implementation of

[AnsHostMessage](../interfaces/AnsHostMessage.md).[sender](../interfaces/AnsHostMessage.md#sender)

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:113](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L113)

## Methods

### updateAssetAddresses

▸ **updateAssetAddresses**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[][] |
| › `toRemove` | `string`[] |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

AnsHostMessage.updateAssetAddresses

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:153](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L153)

___

### updateChannels

▸ **updateChannels**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md)[][] |
| › `toRemove` | [`UncheckedChannelEntry`](../interfaces/AnsHostTypes.UncheckedChannelEntry.md)[] |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

AnsHostMessage.updateChannels

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:179](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L179)

___

### updateContractAddresses

▸ **updateContractAddresses**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md)[][] |
| › `toRemove` | [`UncheckedContractEntry`](../interfaces/AnsHostTypes.UncheckedContractEntry.md)[] |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

AnsHostMessage.updateContractAddresses

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:127](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L127)

___

### updateDexes

▸ **updateDexes**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[] |
| › `toRemove` | `string`[] |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

AnsHostMessage.updateDexes

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:205](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L205)

___

### updateOwnership

▸ **updateOwnership**(`action`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/AnsHostTypes.md#action) |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

AnsHostMessage.updateOwnership

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:257](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L257)

___

### updatePools

▸ **updatePools**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`PoolAddressBaseForString`](../modules/AnsHostTypes.md#pooladdressbaseforstring)[][] |
| › `toRemove` | `number`[] |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

AnsHostMessage.updatePools

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:231](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L231)
