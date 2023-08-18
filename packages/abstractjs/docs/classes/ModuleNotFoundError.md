[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ModuleNotFoundError

# Class: ModuleNotFoundError

## Hierarchy

- `Error`

  ↳ **`ModuleNotFoundError`**

## Table of contents

### Constructors

- [constructor](ModuleNotFoundError.md#constructor)

### Properties

- [message](ModuleNotFoundError.md#message)
- [name](ModuleNotFoundError.md#name)
- [stack](ModuleNotFoundError.md#stack)
- [prepareStackTrace](ModuleNotFoundError.md#preparestacktrace)
- [stackTraceLimit](ModuleNotFoundError.md#stacktracelimit)

### Methods

- [captureStackTrace](ModuleNotFoundError.md#capturestacktrace)

## Constructors

### constructor

• **new ModuleNotFoundError**(`moduleId`, `version?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `version?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[packages/abstractjs/src/clients/errors.ts:2](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/errors.ts#L2)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.9.3/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.9.3/node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.9.3/node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.11.10/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@18.11.10/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.11.10/node_modules/@types/node/globals.d.ts:4
