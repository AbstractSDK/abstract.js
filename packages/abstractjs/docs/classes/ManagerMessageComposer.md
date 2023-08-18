[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ManagerMessageComposer

# Class: ManagerMessageComposer

## Implements

- [`ManagerMessage`](../interfaces/ManagerMessage.md)

## Table of contents

### Constructors

- [constructor](ManagerMessageComposer.md#constructor)

### Properties

- [contractAddress](ManagerMessageComposer.md#contractaddress)
- [sender](ManagerMessageComposer.md#sender)

### Methods

- [callback](ManagerMessageComposer.md#callback)
- [execOnModule](ManagerMessageComposer.md#execonmodule)
- [installModule](ManagerMessageComposer.md#installmodule)
- [registerModule](ManagerMessageComposer.md#registermodule)
- [setOwner](ManagerMessageComposer.md#setowner)
- [uninstallModule](ManagerMessageComposer.md#uninstallmodule)
- [updateInfo](ManagerMessageComposer.md#updateinfo)
- [updateInternalConfig](ManagerMessageComposer.md#updateinternalconfig)
- [updateOwnership](ManagerMessageComposer.md#updateownership)
- [updateSettings](ManagerMessageComposer.md#updatesettings)
- [updateStatus](ManagerMessageComposer.md#updatestatus)
- [upgrade](ManagerMessageComposer.md#upgrade)

## Constructors

### constructor

• **new ManagerMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:133](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L133)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[ManagerMessage](../interfaces/ManagerMessage.md).[contractAddress](../interfaces/ManagerMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:131](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L131)

___

### sender

• **sender**: `string`

#### Implementation of

[ManagerMessage](../interfaces/ManagerMessage.md).[sender](../interfaces/ManagerMessage.md#sender)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:130](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L130)

## Methods

### callback

▸ **callback**(`_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.callback

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:386](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L386)

___

### execOnModule

▸ **execOnModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `execMsg` | `string` |
| › `moduleId` | `string` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.execOnModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:150](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L150)

___

### installModule

▸ **installModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `initMsg?` | `string` |
| › `module` | [`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md) |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.installModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:190](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L190)

___

### registerModule

▸ **registerModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`Module`](../interfaces/ManagerTypes.Module.md) |
| › `moduleAddr` | `string` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.registerModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:216](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L216)

___

### setOwner

▸ **setOwner**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `owner` | [`GovernanceDetailsForString`](../modules/ManagerTypes.md#governancedetailsforstring) |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.setOwner

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:317](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L317)

___

### uninstallModule

▸ **uninstallModule**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleId` | `string` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.uninstallModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:242](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L242)

___

### updateInfo

▸ **updateInfo**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `link?` | `string` |
| › `name?` | `string` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.updateInfo

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:288](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L288)

___

### updateInternalConfig

▸ **updateInternalConfig**(`_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.updateInternalConfig

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:176](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L176)

___

### updateOwnership

▸ **updateOwnership**(`action`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/ManagerTypes.md#action) |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.updateOwnership

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:400](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L400)

___

### updateSettings

▸ **updateSettings**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ibcEnabled?` | `boolean` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.updateSettings

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:363](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L363)

___

### updateStatus

▸ **updateStatus**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `isSuspended?` | `boolean` |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.updateStatus

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:340](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L340)

___

### upgrade

▸ **upgrade**(`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md)[][] |
| `_funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

ManagerMessage.upgrade

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:265](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L265)
