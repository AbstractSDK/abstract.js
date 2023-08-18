[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractModule

# Class: AbstractModule

A class representing an abstract module.

## Implements

- [`Module`](../interfaces/RegistryTypes.Module.md)

## Table of contents

### Constructors

- [constructor](AbstractModule.md#constructor)

### Properties

- [\_data](AbstractModule.md#_data)
- [config](AbstractModule.md#config)
- [info](AbstractModule.md#info)
- [reference](AbstractModule.md#reference)

### Accessors

- [address](AbstractModule.md#address)
- [codeId](AbstractModule.md#codeid)
- [name](AbstractModule.md#name)
- [type](AbstractModule.md#type)

### Methods

- [getModuleData](AbstractModule.md#getmoduledata)
- [fromResponse](AbstractModule.md#fromresponse)
- [loadById](AbstractModule.md#loadbyid)
- [loadByInfo](AbstractModule.md#loadbyinfo)
- [loadByInfos](AbstractModule.md#loadbyinfos)

## Constructors

### constructor

• **new AbstractModule**(`«destructured»`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Module`](../interfaces/RegistryTypes.Module.md) |
| `config` | [`ModuleConfiguration`](../interfaces/RegistryTypes.ModuleConfiguration.md) |

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:30](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L30)

## Properties

### \_data

• **\_data**: ``null`` \| [`ModuleData`](../interfaces/ModuleData.md)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:28](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L28)

___

### config

• **config**: [`ModuleConfiguration`](../interfaces/RegistryTypes.ModuleConfiguration.md)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:27](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L27)

___

### info

• **info**: [`ModuleInfo`](ModuleInfo.md)

#### Implementation of

[Module](../interfaces/RegistryTypes.Module.md).[info](../interfaces/RegistryTypes.Module.md#info)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:25](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L25)

___

### reference

• **reference**: [`ModuleReference`](../modules/RegistryTypes.md#modulereference)

#### Implementation of

[Module](../interfaces/RegistryTypes.Module.md).[reference](../interfaces/RegistryTypes.Module.md#reference)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:26](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L26)

## Accessors

### address

• `get` **address**(): `string`

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:115](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L115)

___

### codeId

• `get` **codeId**(): `number`

#### Returns

`number`

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:124](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L124)

___

### name

• `get` **name**(): `string`

The module id with the namespace.
Example: abstract:bank

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:54](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L54)

___

### type

• `get` **type**(): [`ModuleType`](../modules.md#moduletype)

Get the type of this module.

#### Returns

[`ModuleType`](../modules.md#moduletype)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:103](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L103)

## Methods

### getModuleData

▸ **getModuleData**(`client`): `Promise`<``null`` \| [`ModuleData`](../interfaces/ModuleData.md)\>

Retrieve the module data for a given module.

**`Throws`**

Error if module not found

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |

#### Returns

`Promise`<``null`` \| [`ModuleData`](../interfaces/ModuleData.md)\>

module data if instantiated, null otherwise

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:139](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L139)

___

### fromResponse

▸ `Static` **fromResponse**(`response`): [`AbstractModule`](AbstractModule.md)

Create an Abstract module from the chain response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`ModuleResponse`](../interfaces/RegistryTypes.ModuleResponse.md) |

#### Returns

[`AbstractModule`](AbstractModule.md)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:41](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L41)

___

### loadById

▸ `Static` **loadById**(`registryClient`, `moduleId`, `version?`): `Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `registryClient` | [`RegistryQueryClient`](RegistryQueryClient.md) |
| `moduleId` | `string` |
| `version?` | `string` |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:58](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L58)

___

### loadByInfo

▸ `Static` **loadByInfo**(`registryClient`, `moduleInfo`): `Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `registryClient` | [`RegistryQueryClient`](RegistryQueryClient.md) |
| `moduleInfo` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:67](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L67)

___

### loadByInfos

▸ `Static` **loadByInfos**(`registryClient`, `moduleInfos`): `Promise`<[`AbstractModule`](AbstractModule.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `registryClient` | [`RegistryQueryClient`](RegistryQueryClient.md) |
| `moduleInfos` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)[] |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)[]\>

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:87](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/AbstractModule.ts#L87)
