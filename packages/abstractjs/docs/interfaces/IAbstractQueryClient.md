[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / IAbstractQueryClient

# Interface: IAbstractQueryClient

## Implemented by

- [`AbstractQueryClient`](../classes/AbstractQueryClient.md)

## Table of contents

### Properties

- [ansHostAddress](IAbstractQueryClient.md#anshostaddress)
- [client](IAbstractQueryClient.md#client)
- [factoryAddress](IAbstractQueryClient.md#factoryaddress)
- [registryAddress](IAbstractQueryClient.md#registryaddress)

### Methods

- [connectSigningClient](IAbstractQueryClient.md#connectsigningclient)

## Properties

### ansHostAddress

• `Readonly` **ansHostAddress**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:25](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L25)

___

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:23](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L23)

___

### factoryAddress

• `Readonly` **factoryAddress**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:26](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L26)

___

### registryAddress

• `Readonly` **registryAddress**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:24](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L24)

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

[packages/abstractjs/src/clients/AbstractClient.ts:27](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L27)
