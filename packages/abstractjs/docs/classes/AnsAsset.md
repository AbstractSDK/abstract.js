[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsAsset

# Class: AnsAsset

A class representing an Asset in Abstract Name Service (ANS)
Model: [chain]>[symbol]
If the asset has passed through multiple chains, the most recent chain is first.
So, "dao" that went through osmosis and then IBC-ed to terra would be:
osmosis>juno>dao (ON TERRA)

This is because on juno, it is juno>dao. On osmosis, it is juno>dao.
From osmosis -> terra, it is osmosis>juno>dao

## Table of contents

### Constructors

- [constructor](AnsAsset.md#constructor)

### Properties

- [ansName](AnsAsset.md#ansname)

### Accessors

- [hasProtocol](AnsAsset.md#hasprotocol)
- [sourceChain](AnsAsset.md#sourcechain)
- [sourceProtocol](AnsAsset.md#sourceprotocol)
- [symbol](AnsAsset.md#symbol)
- [withoutProtocol](AnsAsset.md#withoutprotocol)

## Constructors

### constructor

• **new AnsAsset**(`ansName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ansName` | `string` |

#### Defined in

[packages/abstractjs/src/clients/objects/ansAsset.tsx:16](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/ansAsset.tsx#L16)

## Properties

### ansName

• `Private` **ansName**: `string`

#### Defined in

[packages/abstractjs/src/clients/objects/ansAsset.tsx:15](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/ansAsset.tsx#L15)

## Accessors

### hasProtocol

• `get` **hasProtocol**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/abstractjs/src/clients/objects/ansAsset.tsx:28](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/ansAsset.tsx#L28)

___

### sourceChain

• `get` **sourceChain**(): `string`

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/ansAsset.tsx:41](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/ansAsset.tsx#L41)

___

### sourceProtocol

• `get` **sourceProtocol**(): `string`

Returns the protocol of the asset.
astroport/x,y -> astroport

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/ansAsset.tsx:24](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/ansAsset.tsx#L24)

___

### symbol

• `get` **symbol**(): `string`

Returns the lowercased symbol of the asset.
osmosis>juno>dao -> juno>dao

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/ansAsset.tsx:49](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/ansAsset.tsx#L49)

___

### withoutProtocol

• `get` **withoutProtocol**(): `string`

Returns the lowercased name of the asset without the protocol.
astroport/x,y -> x,y

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/ansAsset.tsx:36](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/objects/ansAsset.tsx#L36)
