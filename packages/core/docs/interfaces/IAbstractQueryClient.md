[@abstract-money/core](../README.md) / [Exports](../modules.md) / IAbstractQueryClient

# Interface: IAbstractQueryClient

## Implemented by

- [`AbstractQueryClient`](../classes/AbstractQueryClient.md)

## Table of contents

### Properties

- [ansHostAddress](IAbstractQueryClient.md#anshostaddress)
- [client](IAbstractQueryClient.md#client)
- [factoryAddress](IAbstractQueryClient.md#factoryaddress)
- [versionControlAddress](IAbstractQueryClient.md#versioncontroladdress)

### Methods

- [connectSigningClient](IAbstractQueryClient.md#connectsigningclient)

## Properties

### ansHostAddress

• `Readonly` **ansHostAddress**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:19](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L19)

___

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:17](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L17)

___

### factoryAddress

• `Readonly` **factoryAddress**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:20](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L20)

___

### versionControlAddress

• `Readonly` **versionControlAddress**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:18](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L18)

## Methods

### connectSigningClient

▸ **connectSigningClient**(`signingClient`, `sender`): [`AbstractClient`](../classes/AbstractClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signingClient` | `SigningCosmWasmClient` |
| `sender` | `string` |

#### Returns

[`AbstractClient`](../classes/AbstractClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:21](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L21)
