[@abstract-money/core](../README.md) / [Exports](../modules.md) / ManagerExecuteMsgBuilder

# Class: ManagerExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](ManagerExecuteMsgBuilder.md#constructor)

### Methods

- [callback](ManagerExecuteMsgBuilder.md#callback)
- [execOnModule](ManagerExecuteMsgBuilder.md#execonmodule)
- [installModule](ManagerExecuteMsgBuilder.md#installmodule)
- [registerModule](ManagerExecuteMsgBuilder.md#registermodule)
- [setOwner](ManagerExecuteMsgBuilder.md#setowner)
- [uninstallModule](ManagerExecuteMsgBuilder.md#uninstallmodule)
- [updateInfo](ManagerExecuteMsgBuilder.md#updateinfo)
- [updateInternalConfig](ManagerExecuteMsgBuilder.md#updateinternalconfig)
- [updateOwnership](ManagerExecuteMsgBuilder.md#updateownership)
- [updateSettings](ManagerExecuteMsgBuilder.md#updatesettings)
- [updateStatus](ManagerExecuteMsgBuilder.md#updatestatus)
- [upgrade](ManagerExecuteMsgBuilder.md#upgrade)

## Constructors

### constructor

• **new ManagerExecuteMsgBuilder**()

## Methods

### callback

▸ `Static` **callback**(): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:197](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L197)

___

### execOnModule

▸ `Static` **execOnModule**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `execMsg` | `string` |
| › `moduleId` | `string` |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:38](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L38)

___

### installModule

▸ `Static` **installModule**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `initMsg` | `undefined` \| ``null`` \| `string` |
| › `module` | [`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md) |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:61](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L61)

___

### registerModule

▸ `Static` **registerModule**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`Module`](../interfaces/ManagerTypes.Module.md) |
| › `moduleAddr` | `string` |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:79](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L79)

___

### setOwner

▸ `Static` **setOwner**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `owner` | [`GovernanceDetailsForString`](../modules/ManagerTypes.md#governancedetailsforstring) |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:149](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L149)

___

### uninstallModule

▸ `Static` **uninstallModule**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleId` | `string` |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:97](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L97)

___

### updateInfo

▸ `Static` **updateInfo**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `undefined` \| ``null`` \| `string` |
| › `link` | `undefined` \| ``null`` \| `string` |
| › `name` | `undefined` \| ``null`` \| `string` |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:129](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L129)

___

### updateInternalConfig

▸ `Static` **updateInternalConfig**(`binary`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `binary` | `string` |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:56](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L56)

___

### updateOwnership

▸ `Static` **updateOwnership**(`action`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/ManagerTypes.md#action) |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:202](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L202)

___

### updateSettings

▸ `Static` **updateSettings**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ibcEnabled` | `undefined` \| ``null`` \| `boolean` |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:181](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L181)

___

### updateStatus

▸ `Static` **updateStatus**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `isSuspended` | `undefined` \| ``null`` \| `boolean` |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:165](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L165)

___

### upgrade

▸ `Static` **upgrade**(`«destructured»`): [`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [[`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md), ``null`` \| `string`][] |

#### Returns

[`ExecuteMsg`](../modules/ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:113](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L113)
