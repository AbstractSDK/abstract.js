[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ModuleInfo

# Class: ModuleInfo

## Implements

- [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md)

## Table of contents

### Constructors

- [constructor](ModuleInfo.md#constructor)

### Properties

- [name](ModuleInfo.md#name)
- [namespace](ModuleInfo.md#namespace)
- [version](ModuleInfo.md#version)
- [ABSTRACT\_PROVIDER](ModuleInfo.md#abstract_provider)

### Accessors

- [id](ModuleInfo.md#id)
- [idWithVersion](ModuleInfo.md#idwithversion)
- [versionString](ModuleInfo.md#versionstring)

### Methods

- [abstract](ModuleInfo.md#abstract)
- [from](ModuleInfo.md#from)
- [fromString](ModuleInfo.md#fromstring)
- [latest](ModuleInfo.md#latest)
- [versionAsString](ModuleInfo.md#versionasstring)

## Constructors

### constructor

• **new ModuleInfo**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:35](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L35)

## Properties

### name

• **name**: `string`

#### Implementation of

[ModuleInfo](../interfaces/RegistryTypes.ModuleInfo.md).[name](../interfaces/RegistryTypes.ModuleInfo.md#name)

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:22](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L22)

___

### namespace

• **namespace**: `string`

#### Implementation of

[ModuleInfo](../interfaces/RegistryTypes.ModuleInfo.md).[namespace](../interfaces/RegistryTypes.ModuleInfo.md#namespace)

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:23](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L23)

___

### version

• **version**: [`ModuleVersion`](../modules/RegistryTypes.md#moduleversion)

#### Implementation of

[ModuleInfo](../interfaces/RegistryTypes.ModuleInfo.md).[version](../interfaces/RegistryTypes.ModuleInfo.md#version)

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:24](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L24)

___

### ABSTRACT\_PROVIDER

▪ `Static` `Readonly` **ABSTRACT\_PROVIDER**: ``"abstract"``

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:26](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L26)

## Accessors

### id

• `get` **id**(): `string`

Return the full module id with the namespace and name.

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:54](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L54)

___

### idWithVersion

• `get` **idWithVersion**(): `string`

Return the full module id with the namespace and name concatenated with the version.

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:61](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L61)

___

### versionString

• `get` **versionString**(): `string`

Get the version as a string.
Latest version returns "latest".

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:69](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L69)

## Methods

### abstract

▸ `Static` **abstract**(`moduleName`, `version?`): [`ModuleInfo`](ModuleInfo.md)

Build abstract module info from the given name and version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `version?` | `string` |

#### Returns

[`ModuleInfo`](ModuleInfo.md)

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:101](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L101)

___

### from

▸ `Static` **from**(`moduleInfo`): [`ModuleInfo`](ModuleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleInfo` | [`ModuleInfo`](../interfaces/RegistryTypes.ModuleInfo.md) |

#### Returns

[`ModuleInfo`](ModuleInfo.md)

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:73](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L73)

___

### fromString

▸ `Static` **fromString**(`info`): [`ModuleInfo`](ModuleInfo.md)

Transform a string formatted like "namespace:name:version" into a ModuleInfo object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `string` |

#### Returns

[`ModuleInfo`](ModuleInfo.md)

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:113](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L113)

___

### latest

▸ `Static` **latest**(`idOrName`): [`ModuleInfo`](ModuleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `idOrName` | [`ModuleByIdOrName`](../modules.md#modulebyidorname) |

#### Returns

[`ModuleInfo`](ModuleInfo.md)

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:92](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L92)

___

### versionAsString

▸ `Static` `Private` **versionAsString**(`version`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | [`ModuleVersion`](../modules/RegistryTypes.md#moduleversion) |

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/moduleInfo.ts:83](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/moduleInfo.ts#L83)
