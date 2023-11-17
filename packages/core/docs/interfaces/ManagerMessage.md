[@abstract-money/core](../README.md) / [Exports](../modules.md) / ManagerMessage

# Interface: ManagerMessage

## Implemented by

- [`ManagerMessageComposer`](../classes/ManagerMessageComposer.md)

## Table of contents

### Properties

- [callback](ManagerMessage.md#callback)
- [contractAddress](ManagerMessage.md#contractaddress)
- [execOnModule](ManagerMessage.md#execonmodule)
- [installModule](ManagerMessage.md#installmodule)
- [registerModule](ManagerMessage.md#registermodule)
- [sender](ManagerMessage.md#sender)
- [setOwner](ManagerMessage.md#setowner)
- [uninstallModule](ManagerMessage.md#uninstallmodule)
- [updateInfo](ManagerMessage.md#updateinfo)
- [updateInternalConfig](ManagerMessage.md#updateinternalconfig)
- [updateOwnership](ManagerMessage.md#updateownership)
- [updateSettings](ManagerMessage.md#updatesettings)
- [updateStatus](ManagerMessage.md#updatestatus)
- [upgrade](ManagerMessage.md#upgrade)

## Properties

### callback

• **callback**: (`_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:126](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L126)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:41](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L41)

___

### execOnModule

• **execOnModule**: (`__namedParameters`: { `execMsg`: `string` ; `moduleId`: `string`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `execMsg` | `string` |
| › `moduleId` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:43](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L43)

___

### installModule

• **installModule**: (`__namedParameters`: { `initMsg?`: `string` ; `module`: [`ModuleInfo`](ManagerTypes.ModuleInfo.md)  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `initMsg?` | `string` |
| › `module` | [`ModuleInfo`](ManagerTypes.ModuleInfo.md) |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:54](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L54)

___

### registerModule

• **registerModule**: (`__namedParameters`: { `module`: [`Module`](ManagerTypes.Module.md) ; `moduleAddr`: `string`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`Module`](ManagerTypes.Module.md) |
| › `moduleAddr` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L64)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:42](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L42)

___

### setOwner

• **setOwner**: (`__namedParameters`: { `owner`: [`GovernanceDetailsForString`](../modules/ManagerTypes.md#governancedetailsforstring)  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `owner` | [`GovernanceDetailsForString`](../modules/ManagerTypes.md#governancedetailsforstring) |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:102](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L102)

___

### uninstallModule

• **uninstallModule**: (`__namedParameters`: { `moduleId`: `string`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleId` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L74)

___

### updateInfo

• **updateInfo**: (`__namedParameters`: { `description?`: `string` ; `link?`: `string` ; `name?`: `string`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `link?` | `string` |
| › `name?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:90](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L90)

___

### updateInternalConfig

• **updateInternalConfig**: (`_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:53](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L53)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/ManagerTypes.md#action), `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`action`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/ManagerTypes.md#action) |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:127](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L127)

___

### updateSettings

• **updateSettings**: (`__namedParameters`: { `ibcEnabled?`: `boolean`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ibcEnabled?` | `boolean` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:118](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L118)

___

### updateStatus

• **updateStatus**: (`__namedParameters`: { `isSuspended?`: `boolean`  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `isSuspended?` | `boolean` |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:110](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L110)

___

### upgrade

• **upgrade**: (`__namedParameters`: { `modules`: [`ModuleInfo`](ManagerTypes.ModuleInfo.md)[][]  }, `_funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `_funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [`ModuleInfo`](ManagerTypes.ModuleInfo.md)[][] |
| `_funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.message-composer.ts:82](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.message-composer.ts#L82)
