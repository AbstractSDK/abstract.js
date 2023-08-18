[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ModuleInfo

# Class: ModuleInfo

## Implements

- [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md)

## Table of contents

### Constructors

- [constructor](ModuleInfo.md#constructor)

### Properties

- [\_name](ModuleInfo.md#_name)
- [\_namespace](ModuleInfo.md#_namespace)
- [\_version](ModuleInfo.md#_version)
- [ABSTRACT\_PROVIDER](ModuleInfo.md#abstract_provider)

### Accessors

- [id](ModuleInfo.md#id)
- [idWithVersion](ModuleInfo.md#idwithversion)
- [name](ModuleInfo.md#name)
- [namespace](ModuleInfo.md#namespace)
- [version](ModuleInfo.md#version)
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

packages/abstractjs/src/clients/objects/ModuleInfo.ts:35

## Properties

### \_name

• **\_name**: `string`

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:22

___

### \_namespace

• **\_namespace**: `string`

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:23

___

### \_version

• **\_version**: [`ModuleVersion`](../modules/VersionControlTypes.md#moduleversion)

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:24

___

### ABSTRACT\_PROVIDER

▪ `Static` `Readonly` **ABSTRACT\_PROVIDER**: ``"abstract"``

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:26

## Accessors

### id

• `get` **id**(): `string`

Return the full module id with the namespace and name.

#### Returns

`string`

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:66

___

### idWithVersion

• `get` **idWithVersion**(): `string`

Return the full module id with the namespace and name concatinated with the version.

#### Returns

`string`

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:73

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[ModuleInfo](../interfaces/VersionControlTypes.ModuleInfo.md).[name](../interfaces/VersionControlTypes.ModuleInfo.md#name)

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:55

___

### namespace

• `get` **namespace**(): `string`

#### Returns

`string`

#### Implementation of

[ModuleInfo](../interfaces/VersionControlTypes.ModuleInfo.md).[namespace](../interfaces/VersionControlTypes.ModuleInfo.md#namespace)

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:51

___

### version

• `get` **version**(): [`ModuleVersion`](../modules/VersionControlTypes.md#moduleversion)

#### Returns

[`ModuleVersion`](../modules/VersionControlTypes.md#moduleversion)

#### Implementation of

[ModuleInfo](../interfaces/VersionControlTypes.ModuleInfo.md).[version](../interfaces/VersionControlTypes.ModuleInfo.md#version)

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:59

___

### versionString

• `get` **versionString**(): `string`

Get the version as a string.
Latest version returns "latest".

#### Returns

`string`

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:81

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

packages/abstractjs/src/clients/objects/ModuleInfo.ts:113

___

### from

▸ `Static` **from**(`moduleInfo`): [`ModuleInfo`](ModuleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleInfo` | [`ModuleInfo`](../interfaces/VersionControlTypes.ModuleInfo.md) |

#### Returns

[`ModuleInfo`](ModuleInfo.md)

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:85

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

packages/abstractjs/src/clients/objects/ModuleInfo.ts:125

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

packages/abstractjs/src/clients/objects/ModuleInfo.ts:104

___

### versionAsString

▸ `Static` `Private` **versionAsString**(`version`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | [`ModuleVersion`](../modules/VersionControlTypes.md#moduleversion) |

#### Returns

`string`

#### Defined in

packages/abstractjs/src/clients/objects/ModuleInfo.ts:95
