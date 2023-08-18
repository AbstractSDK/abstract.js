[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / VersionControlTypes

# Namespace: VersionControlTypes

## Table of contents

### Interfaces

- [AccountBase](../interfaces/VersionControlTypes.AccountBase.md)
- [AccountBaseResponse](../interfaces/VersionControlTypes.AccountBaseResponse.md)
- [Coin](../interfaces/VersionControlTypes.Coin.md)
- [ConfigResponse](../interfaces/VersionControlTypes.ConfigResponse.md)
- [FixedFee](../interfaces/VersionControlTypes.FixedFee.md)
- [InstantiateMsg](../interfaces/VersionControlTypes.InstantiateMsg.md)
- [MigrateMsg](../interfaces/VersionControlTypes.MigrateMsg.md)
- [Module](../interfaces/VersionControlTypes.Module.md)
- [ModuleConfiguration](../interfaces/VersionControlTypes.ModuleConfiguration.md)
- [ModuleFilter](../interfaces/VersionControlTypes.ModuleFilter.md)
- [ModuleInfo](../interfaces/VersionControlTypes.ModuleInfo.md)
- [ModuleResponse](../interfaces/VersionControlTypes.ModuleResponse.md)
- [ModulesListResponse](../interfaces/VersionControlTypes.ModulesListResponse.md)
- [ModulesResponse](../interfaces/VersionControlTypes.ModulesResponse.md)
- [NamespaceFilter](../interfaces/VersionControlTypes.NamespaceFilter.md)
- [NamespaceListResponse](../interfaces/VersionControlTypes.NamespaceListResponse.md)
- [NamespaceResponse](../interfaces/VersionControlTypes.NamespaceResponse.md)
- [NamespacesResponse](../interfaces/VersionControlTypes.NamespacesResponse.md)
- [OwnershipForString](../interfaces/VersionControlTypes.OwnershipForString.md)

### Type Aliases

- [Action](VersionControlTypes.md#action)
- [Addr](VersionControlTypes.md#addr)
- [ExecuteMsg](VersionControlTypes.md#executemsg)
- [Expiration](VersionControlTypes.md#expiration)
- [ModuleReference](VersionControlTypes.md#modulereference)
- [ModuleStatus](VersionControlTypes.md#modulestatus)
- [ModuleVersion](VersionControlTypes.md#moduleversion)
- [Monetization](VersionControlTypes.md#monetization)
- [Namespace](VersionControlTypes.md#namespace)
- [QueryMsg](VersionControlTypes.md#querymsg)
- [Timestamp](VersionControlTypes.md#timestamp)
- [Uint128](VersionControlTypes.md#uint128)
- [Uint64](VersionControlTypes.md#uint64)
- [VersionControlExecuteMsg](VersionControlTypes.md#versioncontrolexecutemsg)

## Type Aliases

### Action

Ƭ **Action**: { `transfer_ownership`: { `expiry?`: [`Expiration`](VersionControlTypes.md#expiration) \| ``null`` ; `new_owner`: `string`  }  } \| ``"accept_ownership"`` \| ``"renounce_ownership"``

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:106](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L106)

___

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:100](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L100)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `remove_module`: { `module`: [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)  }  } \| { `yank_module`: { `module`: [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)  }  } \| { `propose_modules`: { `modules`: [[`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md), [`ModuleReference`](VersionControlTypes.md#modulereference)][]  }  } \| { `set_module_monetization`: { `module_name`: `string` ; `monetization`: [`Monetization`](VersionControlTypes.md#monetization) ; `namespace`: [`Namespace`](VersionControlTypes.md#namespace)  }  } \| { `approve_or_reject_modules`: { `approves`: [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[] ; `rejects`: [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[]  }  } \| { `claim_namespaces`: { `account_id`: `number` ; `namespaces`: `string`[]  }  } \| { `remove_namespaces`: { `namespaces`: `string`[]  }  } \| { `add_account`: { `account_base`: [`AccountBase`](../interfaces/VersionControlTypes.AccountBase.md) ; `account_id`: `number`  }  } \| { `update_config`: { `allow_direct_module_registration?`: `boolean` \| ``null`` ; `namespace_limit?`: `number` \| ``null`` ; `namespace_registration_fee?`: [`Coin`](../interfaces/VersionControlTypes.Coin.md) \| ``null``  }  } \| { `set_factory`: { `new_factory`: `string`  }  } \| { `update_ownership`: [`Action`](VersionControlTypes.md#action)  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:17](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L17)

___

### Expiration

Ƭ **Expiration**: { `at_height`: `number`  } \| { `at_time`: [`Timestamp`](VersionControlTypes.md#timestamp)  } \| { `never`: {}  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L115)

___

### ModuleReference

Ƭ **ModuleReference**: { `account_base`: `number`  } \| { `native`: [`Addr`](VersionControlTypes.md#addr)  } \| { `adapter`: [`Addr`](VersionControlTypes.md#addr)  } \| { `app`: `number`  } \| { `standalone`: `number`  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:84](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L84)

___

### ModuleStatus

Ƭ **ModuleStatus**: ``"r_e_g_i_s_t_e_r_e_d"`` \| ``"p_e_n_d_i_n_g"`` \| ``"y_a_n_k_e_d"``

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:180](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L180)

___

### ModuleVersion

Ƭ **ModuleVersion**: ``"latest"`` \| { `version`: `string`  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:79](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L79)

___

### Monetization

Ƭ **Monetization**: ``"none"`` \| { `install_fee`: [`FixedFee`](../interfaces/VersionControlTypes.FixedFee.md)  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:101](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L101)

___

### Namespace

Ƭ **Namespace**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:78](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L78)

___

### QueryMsg

Ƭ **QueryMsg**: { `account_base`: { `account_id`: `number`  }  } \| { `modules`: { `infos`: [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)[]  }  } \| { `namespaces`: { `accounts`: `number`[]  }  } \| { `namespace`: { `namespace`: [`Namespace`](VersionControlTypes.md#namespace)  }  } \| { `config`: {}  } \| { `module_list`: { `filter?`: [`ModuleFilter`](../interfaces/VersionControlTypes.ModuleFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) \| ``null``  }  } \| { `namespace_list`: { `filter?`: [`NamespaceFilter`](../interfaces/VersionControlTypes.NamespaceFilter.md) \| ``null`` ; `limit?`: `number` \| ``null`` ; `start_after?`: `string` \| ``null``  }  } \| { `ownership`: {}  }

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:139](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L139)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](VersionControlTypes.md#uint64)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:125](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L125)

___

### Uint128

Ƭ **Uint128**: `string`

This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
and run the @cosmwasm/ts-codegen generate command to regenerate this file.

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:7](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L7)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:126](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L126)

___

### VersionControlExecuteMsg

Ƭ **VersionControlExecuteMsg**: [`ExecuteMsg`](VersionControlTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/registry/Registry.types.ts:229](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/registry/Registry.types.ts#L229)
