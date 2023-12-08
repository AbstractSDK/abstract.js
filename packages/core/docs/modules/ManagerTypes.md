[@abstract-money/core](../README.md) / [Exports](../modules.md) / ManagerTypes

# Namespace: ManagerTypes

## Table of contents

### Interfaces

- [AccountInfoForAddr](../interfaces/ManagerTypes.AccountInfoForAddr.md)
- [CallbackMsg](../interfaces/ManagerTypes.CallbackMsg.md)
- [ConfigResponse](../interfaces/ManagerTypes.ConfigResponse.md)
- [ContractVersion](../interfaces/ManagerTypes.ContractVersion.md)
- [InfoResponse](../interfaces/ManagerTypes.InfoResponse.md)
- [InstantiateMsg](../interfaces/ManagerTypes.InstantiateMsg.md)
- [ManagerModuleInfo](../interfaces/ManagerTypes.ManagerModuleInfo.md)
- [MigrateMsg](../interfaces/ManagerTypes.MigrateMsg.md)
- [Module](../interfaces/ManagerTypes.Module.md)
- [ModuleAddressesResponse](../interfaces/ManagerTypes.ModuleAddressesResponse.md)
- [ModuleInfo](../interfaces/ManagerTypes.ModuleInfo.md)
- [ModuleInfosResponse](../interfaces/ManagerTypes.ModuleInfosResponse.md)
- [ModuleVersionsResponse](../interfaces/ManagerTypes.ModuleVersionsResponse.md)
- [OwnershipForString](../interfaces/ManagerTypes.OwnershipForString.md)

### Type Aliases

- [Action](ManagerTypes.md#action)
- [Addr](ManagerTypes.md#addr)
- [Binary](ManagerTypes.md#binary)
- [ExecuteMsg](ManagerTypes.md#executemsg)
- [Expiration](ManagerTypes.md#expiration)
- [GovernanceDetailsForAddr](ManagerTypes.md#governancedetailsforaddr)
- [GovernanceDetailsForString](ManagerTypes.md#governancedetailsforstring)
- [ManagerExecuteMsg](ManagerTypes.md#managerexecutemsg)
- [ModuleReference](ManagerTypes.md#modulereference)
- [ModuleVersion](ManagerTypes.md#moduleversion)
- [Namespace](ManagerTypes.md#namespace)
- [QueryMsg](ManagerTypes.md#querymsg)
- [Timestamp](ManagerTypes.md#timestamp)
- [Uint64](ManagerTypes.md#uint64)

## Type Aliases

### Action

Ƭ **Action**: { `transfer_ownership`: { `expiry?`: [`Expiration`](ManagerTypes.md#expiration) \| ``null`` ; `new_owner`: `string`  }  } \| ``"accept_ownership"`` \| ``"renounce_ownership"``

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:114](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L114)

___

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:113](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L113)

___

### Binary

Ƭ **Binary**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:90](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L90)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `exec_on_module`: { `exec_msg`: [`Binary`](ManagerTypes.md#binary) ; `module_id`: `string`  }  } \| { `update_internal_config`: [`Binary`](ManagerTypes.md#binary)  } \| { `install_module`: { `init_msg?`: [`Binary`](ManagerTypes.md#binary) \| ``null`` ; `module`: [`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md)  }  } \| { `register_module`: { `module`: [`Module`](../interfaces/ManagerTypes.Module.md) ; `module_addr`: `string`  }  } \| { `uninstall_module`: { `module_id`: `string`  }  } \| { `upgrade`: { `modules`: [[`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md), [`Binary`](ManagerTypes.md#binary) \| ``null``][]  }  } \| { `update_info`: { `description?`: `string` \| ``null`` ; `link?`: `string` \| ``null`` ; `name?`: `string` \| ``null``  }  } \| { `set_owner`: { `owner`: [`GovernanceDetailsForString`](ManagerTypes.md#governancedetailsforstring)  }  } \| { `update_status`: { `is_suspended?`: `boolean` \| ``null``  }  } \| { `update_settings`: { `ibc_enabled?`: `boolean` \| ``null``  }  } \| { `callback`: [`CallbackMsg`](../interfaces/ManagerTypes.CallbackMsg.md)  } \| { `update_ownership`: [`Action`](ManagerTypes.md#action)  }

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:30](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L30)

___

### Expiration

Ƭ **Expiration**: { `at_height`: `number`  } \| { `at_time`: [`Timestamp`](ManagerTypes.md#timestamp)  } \| { `never`: {}  }

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:123](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L123)

___

### GovernanceDetailsForAddr

Ƭ **GovernanceDetailsForAddr**: { `Monarchy`: { `[k: string]`: `unknown`; `monarch`: [`Addr`](ManagerTypes.md#addr)  }  } \| { `External`: { `[k: string]`: `unknown`; `governance_address`: [`Addr`](ManagerTypes.md#addr) ; `governance_type`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:178](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L178)

___

### GovernanceDetailsForString

Ƭ **GovernanceDetailsForString**: { `Monarchy`: { `[k: string]`: `unknown`; `monarch`: `string`  }  } \| { `External`: { `[k: string]`: `unknown`; `governance_address`: `string` ; `governance_type`: `string`  }  }

This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
and run the @cosmwasm/ts-codegen generate command to regenerate this file.

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:7](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L7)

___

### ManagerExecuteMsg

Ƭ **ManagerExecuteMsg**: [`ExecuteMsg`](ManagerTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:225](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L225)

___

### ModuleReference

Ƭ **ModuleReference**: { `account_base`: `number`  } \| { `native`: [`Addr`](ManagerTypes.md#addr)  } \| { `adapter`: [`Addr`](ManagerTypes.md#addr)  } \| { `app`: `number`  } \| { `standalone`: `number`  }

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:97](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L97)

___

### ModuleVersion

Ƭ **ModuleVersion**: ``"latest"`` \| { `version`: `string`  }

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:92](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L92)

___

### Namespace

Ƭ **Namespace**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:91](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L91)

___

### QueryMsg

Ƭ **QueryMsg**: { `module_versions`: { `ids`: `string`[]  }  } \| { `module_addresses`: { `ids`: `string`[]  }  } \| { `module_infos`: { `limit?`: `number` \| ``null`` ; `start_after?`: `string` \| ``null``  }  } \| { `config`: {}  } \| { `info`: {}  } \| { `ownership`: {}  }

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:145](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L145)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](ManagerTypes.md#uint64)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:133](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L133)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.types.ts:134](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.types.ts#L134)
