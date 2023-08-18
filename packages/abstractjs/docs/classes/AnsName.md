[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AnsName

# Class: AnsName

## Table of contents

### Constructors

- [constructor](AnsName.md#constructor)

### Methods

- [chainNameIbcAsset](AnsName.md#chainnameibcasset)
- [joinAssetNames](AnsName.md#joinassetnames)
- [lpToken](AnsName.md#lptoken)
- [stakingContract](AnsName.md#stakingcontract)

## Constructors

### constructor

• **new AnsName**()

## Methods

### chainNameIbcAsset

▸ `Static` **chainNameIbcAsset**(`chainName`, `asset`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `asset` | `string` |

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AnsName.ts:2](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AnsName.ts#L2)

___

### joinAssetNames

▸ `Static` **joinAssetNames**(`assetNames`): `string`

asset names sorted by name and lowercased

#### Parameters

| Name | Type |
| :------ | :------ |
| `assetNames` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AnsName.ts:21](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AnsName.ts#L21)

___

### lpToken

▸ `Static` **lpToken**(`dexName`, `assetNames`): `string`

`wyndex/juno>juno,juno>wynd`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dexName` | `string` |
| `assetNames` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AnsName.ts:16](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AnsName.ts#L16)

___

### stakingContract

▸ `Static` **stakingContract**(`providerName`, `assetNames`): `string`

`staking/wyndex/juno>juno,juno>wynd`

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerName` | `string` |
| `assetNames` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/abstractjs/src/clients/objects/AnsName.ts:9](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/objects/AnsName.ts#L9)
