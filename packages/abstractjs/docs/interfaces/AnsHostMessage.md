[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsHostMessage

# Interface: AnsHostMessage

## Implemented by

- [`AnsHostMessageComposer`](../classes/AnsHostMessageComposer.md)

## Table of contents

### Properties

- [contractAddress](AnsHostMessage.md#contractaddress)
- [sender](AnsHostMessage.md#sender)
- [updateAssetAddresses](AnsHostMessage.md#updateassetaddresses)
- [updateChannels](AnsHostMessage.md#updatechannels)
- [updateContractAddresses](AnsHostMessage.md#updatecontractaddresses)
- [updateDexes](AnsHostMessage.md#updatedexes)
- [updateOwnership](AnsHostMessage.md#updateownership)
- [updatePools](AnsHostMessage.md#updatepools)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:58](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L58)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:59](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L59)

___

### updateAssetAddresses

• **updateAssetAddresses**: (`__namedParameters`: { `toAdd`: `string`[][] ; `toRemove`: `string`[]  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[][] |
| › `toRemove` | `string`[] |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:70](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L70)

___

### updateChannels

• **updateChannels**: (`__namedParameters`: { `toAdd`: [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[][] ; `toRemove`: [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[]  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[][] |
| › `toRemove` | [`UncheckedChannelEntry`](AnsHostTypes.UncheckedChannelEntry.md)[] |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:80](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L80)

___

### updateContractAddresses

• **updateContractAddresses**: (`__namedParameters`: { `toAdd`: [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[][] ; `toRemove`: [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[]  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[][] |
| › `toRemove` | [`UncheckedContractEntry`](AnsHostTypes.UncheckedContractEntry.md)[] |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:60](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L60)

___

### updateDexes

• **updateDexes**: (`__namedParameters`: { `toAdd`: `string`[] ; `toRemove`: `string`[]  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `string`[] |
| › `toRemove` | `string`[] |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:90](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L90)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/AnsHostTypes.md#action), `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`action`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/AnsHostTypes.md#action) |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:110](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L110)

___

### updatePools

• **updatePools**: (`__namedParameters`: { `toAdd`: [`PoolAddressBaseForString`](../modules/AnsHostTypes.md#pooladdressbaseforstring)[][] ; `toRemove`: `number`[]  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | [`PoolAddressBaseForString`](../modules/AnsHostTypes.md#pooladdressbaseforstring)[][] |
| › `toRemove` | `number`[] |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts:100](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/ans-host/AnsHost.message-composer.ts#L100)
