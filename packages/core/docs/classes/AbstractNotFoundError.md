[@abstract-money/core](../README.md) / [Exports](../modules.md) / AbstractNotFoundError

# Class: AbstractNotFoundError

## Hierarchy

- `Error`

  ↳ **`AbstractNotFoundError`**

## Table of contents

### Constructors

- [constructor](AbstractNotFoundError.md#constructor)

### Properties

- [message](AbstractNotFoundError.md#message)
- [name](AbstractNotFoundError.md#name)
- [stack](AbstractNotFoundError.md#stack)
- [prepareStackTrace](AbstractNotFoundError.md#preparestacktrace)
- [stackTraceLimit](AbstractNotFoundError.md#stacktracelimit)

### Methods

- [captureStackTrace](AbstractNotFoundError.md#capturestacktrace)

## Constructors

### constructor

• **new AbstractNotFoundError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[packages/abstractjs/src/clients/errors.ts:9](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/errors.ts#L9)

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
