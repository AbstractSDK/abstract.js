[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigMessageComposer

# Class: Cw3FlexMultisigMessageComposer

## Implements

- [`Cw3FlexMultisigMessage`](../interfaces/Cw3FlexMultisigMessage.md)

## Table of contents

### Constructors

- [constructor](Cw3FlexMultisigMessageComposer.md#constructor)

### Properties

- [contractAddress](Cw3FlexMultisigMessageComposer.md#contractaddress)
- [sender](Cw3FlexMultisigMessageComposer.md#sender)

### Methods

- [close](Cw3FlexMultisigMessageComposer.md#close)
- [execute](Cw3FlexMultisigMessageComposer.md#execute)
- [memberChangedHook](Cw3FlexMultisigMessageComposer.md#memberchangedhook)
- [propose](Cw3FlexMultisigMessageComposer.md#propose)
- [vote](Cw3FlexMultisigMessageComposer.md#vote)

## Constructors

### constructor

• **new Cw3FlexMultisigMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:103](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L103)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw3FlexMultisigMessage](../interfaces/Cw3FlexMultisigMessage.md).[contractAddress](../interfaces/Cw3FlexMultisigMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:101](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L101)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw3FlexMultisigMessage](../interfaces/Cw3FlexMultisigMessage.md).[sender](../interfaces/Cw3FlexMultisigMessage.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:100](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L100)

## Methods

### close

▸ **close**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw3FlexMultisigMessage.close

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:197](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L197)

___

### execute

▸ **execute**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw3FlexMultisigMessage.execute

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:173](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L173)

___

### memberChangedHook

▸ **memberChangedHook**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `diffs` | [`MemberDiff`](../interfaces/Cw3FlexMultisigTypes.MemberDiff.md)[] |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw3FlexMultisigMessage.memberChangedHook

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:221](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L221)

___

### propose

▸ **propose**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `latest?` | [`Expiration`](../modules/Cw3FlexMultisigTypes.md#expiration) |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/Cw3FlexMultisigTypes.md#cosmosmsgforempty)[] |
| › `title` | `string` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw3FlexMultisigMessage.propose

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:113](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L113)

___

### vote

▸ **vote**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| › `vote` | [`Vote`](../modules/Cw3FlexMultisigTypes.md#vote) |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw3FlexMultisigMessage.vote

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:146](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L146)
