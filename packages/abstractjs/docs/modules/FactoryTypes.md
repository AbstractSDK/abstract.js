[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / FactoryTypes

# Namespace: FactoryTypes

## Table of contents

### Interfaces

- [ConfigResponse](../interfaces/FactoryTypes.ConfigResponse.md)
- [InstantiateMsg](../interfaces/FactoryTypes.InstantiateMsg.md)
- [MigrateMsg](../interfaces/FactoryTypes.MigrateMsg.md)
- [OwnershipForString](../interfaces/FactoryTypes.OwnershipForString.md)

### Type Aliases

- [Action](FactoryTypes.md#action)
- [Addr](FactoryTypes.md#addr)
- [ExecuteMsg](FactoryTypes.md#executemsg)
- [Expiration](FactoryTypes.md#expiration)
- [FactoryExecuteMsg](FactoryTypes.md#factoryexecutemsg)
- [GovernanceDetailsForString](FactoryTypes.md#governancedetailsforstring)
- [QueryMsg](FactoryTypes.md#querymsg)
- [Timestamp](FactoryTypes.md#timestamp)
- [Uint64](FactoryTypes.md#uint64)

## Type Aliases

### Action

Ƭ **Action**: { `transfer_ownership`: { `expiry?`: [`Expiration`](FactoryTypes.md#expiration) \| ``null`` ; `new_owner`: `string`  }  } \| ``"accept_ownership"`` \| ``"renounce_ownership"``

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:43](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L43)

___

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:72](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L72)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `update_config`: { `ans_host_contract?`: `string` \| ``null`` ; `module_factory_address?`: `string` \| ``null`` ; `version_control_contract?`: `string` \| ``null``  }  } \| { `create_account`: { `description?`: `string` \| ``null`` ; `governance`: [`GovernanceDetailsForString`](FactoryTypes.md#governancedetailsforstring) ; `link?`: `string` \| ``null`` ; `name`: `string`  }  } \| { `update_ownership`: [`Action`](FactoryTypes.md#action)  }

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:12](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L12)

___

### Expiration

Ƭ **Expiration**: { `at_height`: `number`  } \| { `at_time`: [`Timestamp`](FactoryTypes.md#timestamp)  } \| { `never`: {}  }

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:52](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L52)

___

### FactoryExecuteMsg

Ƭ **FactoryExecuteMsg**: [`ExecuteMsg`](FactoryTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:84](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L84)

___

### GovernanceDetailsForString

Ƭ **GovernanceDetailsForString**: { `Monarchy`: { `monarch`: `string`  }  } \| { `External`: { `governance_address`: `string` ; `governance_type`: `string`  }  }

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:31](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L31)

___

### QueryMsg

Ƭ **QueryMsg**: { `config`: {}  } \| { `ownership`: {}  }

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:64](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L64)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](FactoryTypes.md#uint64)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:62](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L62)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.types.ts:63](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.types.ts#L63)
