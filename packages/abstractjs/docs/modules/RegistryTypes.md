[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryTypes

# Namespace: RegistryTypes

## Table of contents

### Interfaces

- [AccountBase](../interfaces/RegistryTypes.AccountBase.md)
- [AccountBaseResponse](../interfaces/RegistryTypes.AccountBaseResponse.md)
- [Coin](../interfaces/RegistryTypes.Coin.md)
- [ConfigResponse](../interfaces/RegistryTypes.ConfigResponse.md)
- [FixedFee](../interfaces/RegistryTypes.FixedFee.md)
- [InstantiateMsg](../interfaces/RegistryTypes.InstantiateMsg.md)
- [MigrateMsg](../interfaces/RegistryTypes.MigrateMsg.md)
- [Module](../interfaces/RegistryTypes.Module.md)
- [ModuleConfiguration](../interfaces/RegistryTypes.ModuleConfiguration.md)
- [ModuleFilter](../interfaces/RegistryTypes.ModuleFilter.md)
- [ModuleInfo](../interfaces/RegistryTypes.ModuleInfo.md)
- [ModuleResponse](../interfaces/RegistryTypes.ModuleResponse.md)
- [ModulesListResponse](../interfaces/RegistryTypes.ModulesListResponse.md)
- [ModulesResponse](../interfaces/RegistryTypes.ModulesResponse.md)
- [NamespaceListResponse](../interfaces/RegistryTypes.NamespaceListResponse.md)
- [NamespaceResponse](../interfaces/RegistryTypes.NamespaceResponse.md)
- [NamespacesResponse](../interfaces/RegistryTypes.NamespacesResponse.md)
- [OwnershipForString](../interfaces/RegistryTypes.OwnershipForString.md)

### Type Aliases

- [Action](RegistryTypes.md#action)
- [Addr](RegistryTypes.md#addr)
- [ExecuteMsg](RegistryTypes.md#executemsg)
- [Expiration](RegistryTypes.md#expiration)
- [ModuleReference](RegistryTypes.md#modulereference)
- [ModuleStatus](RegistryTypes.md#modulestatus)
- [ModuleVersion](RegistryTypes.md#moduleversion)
- [Monetization](RegistryTypes.md#monetization)
- [Namespace](RegistryTypes.md#namespace)
- [QueryMsg](RegistryTypes.md#querymsg)
- [Timestamp](RegistryTypes.md#timestamp)
- [Uint128](RegistryTypes.md#uint128)
- [Uint64](RegistryTypes.md#uint64)
- [VersionControlExecuteMsg](RegistryTypes.md#versioncontrolexecutemsg)

## Type Aliases

### Action

Ƭ **Action**: { `transfer_ownership`: { `expiry?`: [`Expiration`](RegistryTypes.md#expiration) \| ``null`` ; `new_owner`: `string`  }  } \| ``"accept_ownership"`` \| ``"renounce_ownership"``

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:111](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L111)

___

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:105](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L105)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `remove_module`: { `module`: [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)  }  } \| { `yank_module`: { `module`: [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)  }  } \| { `propose_modules`: { `modules`: [[`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md), [`ModuleReference`](RegistryTypes.md#modulereference)][]  }  } \| { `set_module_monetization`: { `module_name`: `string` ; `monetization`: [`Monetization`](RegistryTypes.md#monetization) ; `namespace`: [`Namespace`](RegistryTypes.md#namespace)  }  } \| { `set_module_metadata`: { `metadata`: `string` ; `module`: [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)  }  } \| { `approve_or_reject_modules`: { `approves`: [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] ; `rejects`: [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[]  }  } \| { `claim_namespace`: { `account_id`: `number` ; `namespace`: `string`  }  } \| { `remove_namespaces`: { `namespaces`: `string`[]  }  } \| { `add_account`: { `account_base`: [`AccountBase`](../interfaces/RegistryTypes.AccountBase.md) ; `account_id`: `number`  }  } \| { `update_config`: { `allow_direct_module_registration_and_updates?`: `boolean` \| ``null`` ; `namespace_registration_fee?`: [`Coin`](../interfaces/RegistryTypes.Coin.md) \| ``null``  }  } \| { `set_factory`: { `new_factory`: `string`  }  } \| { `update_ownership`: [`Action`](RegistryTypes.md#action)  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:17](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L17)

___

### Expiration

Ƭ **Expiration**: { `at_height`: `number`  } \| { `at_time`: [`Timestamp`](RegistryTypes.md#timestamp)  } \| { `never`: {}  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:120](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L120)

___

### ModuleReference

Ƭ **ModuleReference**: { `account_base`: `number`  } \| { `native`: [`Addr`](RegistryTypes.md#addr)  } \| { `adapter`: [`Addr`](RegistryTypes.md#addr)  } \| { `app`: `number`  } \| { `standalone`: `number`  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:89](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L89)

___

### ModuleStatus

Ƭ **ModuleStatus**: ``"r_e_g_i_s_t_e_r_e_d"`` \| ``"p_e_n_d_i_n_g"`` \| ``"y_a_n_k_e_d"``

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:184](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L184)

___

### ModuleVersion

Ƭ **ModuleVersion**: ``"latest"`` \| { `version`: `string`  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:84](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L84)

___

### Monetization

Ƭ **Monetization**: ``"none"`` \| { `install_fee`: [`FixedFee`](../interfaces/RegistryTypes.FixedFee.md)  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:106](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L106)

___

### Namespace

Ƭ **Namespace**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:83](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L83)

___

### QueryMsg

Ƭ **QueryMsg**: { `account_base`: { `account_id`: `number`  }  } \| { `modules`: { `infos`: [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[]  }  } \| { `namespaces`: { `accounts`: `number`[]  }  } \| { `namespace`: { `namespace`: [`Namespace`](RegistryTypes.md#namespace)  }  } \| { `config`: {}  } \| { `module_list`: { `filter?`: [`ModuleFilter`](../interfaces/RegistryTypes.ModuleFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) \| ``null``  }  } \| { `namespace_list`: { `limit?`: `number` \| ``null`` ; `start_after?`: `string` \| ``null``  }  } \| { `ownership`: {}  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:144](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L144)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](RegistryTypes.md#uint64)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:130](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L130)

___

### Uint128

Ƭ **Uint128**: `string`

This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
and run the @cosmwasm/ts-codegen generate command to regenerate this file.

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:7](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L7)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:131](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L131)

___

### VersionControlExecuteMsg

Ƭ **VersionControlExecuteMsg**: [`ExecuteMsg`](RegistryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:231](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.types.ts#L231)
