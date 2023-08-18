[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractModule

# Class: AbstractModule

A class representing an abstract module.

## Implements

- [`Module`](../interfaces/VersionControlTypes.Module.md)

## Table of contents

### Constructors

- [constructor](AbstractModule.md#constructor)

### Properties

- [config](AbstractModule.md#config)
- [info](AbstractModule.md#info)
- [reference](AbstractModule.md#reference)

### Accessors

- [address](AbstractModule.md#address)
- [codeId](AbstractModule.md#codeid)
- [name](AbstractModule.md#name)

### Methods

- [fromResponse](AbstractModule.md#fromresponse)
- [loadById](AbstractModule.md#loadbyid)
- [loadByInfo](AbstractModule.md#loadbyinfo)

## Constructors

### constructor

• **new AbstractModule**(`«destructured»`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Module`](../interfaces/VersionControlTypes.Module.md) |
| `config` | [`ModuleConfiguration`](../interfaces/VersionControlTypes.ModuleConfiguration.md) |

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:24](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L24)

## Properties

### config

• **config**: [`ModuleConfiguration`](../interfaces/VersionControlTypes.ModuleConfiguration.md)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:22](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L22)

___

### info

• **info**: [`ModuleInfo`](ModuleInfo.md)

#### Implementation of

[Module](../interfaces/VersionControlTypes.Module.md).[info](../interfaces/VersionControlTypes.Module.md#info)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:20](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L20)

___

### reference

• **reference**: [`ModuleReference`](../modules/VersionControlTypes.md#modulereference)

#### Implementation of

[Module](../interfaces/VersionControlTypes.Module.md).[reference](../interfaces/VersionControlTypes.Module.md#reference)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:21](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L21)

## Accessors

### address

• `get` **address**(): `string`

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:77](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L77)

___

### codeId

• `get` **codeId**(): `number`

#### Returns

`number`

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:86](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L86)

___

### name

• `get` **name**(): `string`

The module id with the namespace.
Example: abstract:bank

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:47](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L47)

## Methods

### fromResponse

▸ `Static` **fromResponse**(`response`): [`AbstractModule`](AbstractModule.md)

Create an Abstract module from the chain response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`ModuleResponse`](../interfaces/VersionControlTypes.ModuleResponse.md) |

#### Returns

[`AbstractModule`](AbstractModule.md)

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:34](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L34)

___

### loadById

▸ `Static` **loadById**(`versionControlClient`, `moduleId`, `version?`): `Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionControlClient` | [`VersionControlQueryClient`](VersionControlQueryClient.md) |
| `moduleId` | `string` |
| `version?` | `string` |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:51](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L51)

___

### loadByInfo

▸ `Static` **loadByInfo**(`versionControlClient`, `moduleInfo`): `Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionControlClient` | [`VersionControlQueryClient`](VersionControlQueryClient.md) |
| `moduleInfo` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

`Promise`<[`AbstractModule`](AbstractModule.md)\>

#### Defined in

[packages/abstractjs/src/clients/objects/AbstractModule.ts:60](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AbstractModule.ts#L60)
