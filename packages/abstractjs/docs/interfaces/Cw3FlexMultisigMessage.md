[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigMessage

# Interface: Cw3FlexMultisigMessage

## Implemented by

- [`Cw3FlexMultisigMessageComposer`](../classes/Cw3FlexMultisigMessageComposer.md)

## Table of contents

### Properties

- [close](Cw3FlexMultisigMessage.md#close)
- [contractAddress](Cw3FlexMultisigMessage.md#contractaddress)
- [execute](Cw3FlexMultisigMessage.md#execute)
- [memberChangedHook](Cw3FlexMultisigMessage.md#memberchangedhook)
- [propose](Cw3FlexMultisigMessage.md#propose)
- [sender](Cw3FlexMultisigMessage.md#sender)
- [vote](Cw3FlexMultisigMessage.md#vote)

## Properties

### close

• **close**: (`__namedParameters`: { `proposalId`: `number`  }, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:82](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L82)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:48](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L48)

___

### execute

• **execute**: (`__namedParameters`: { `proposalId`: `number`  }, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L74)

___

### memberChangedHook

• **memberChangedHook**: (`__namedParameters`: { `diffs`: [`MemberDiff`](Cw3FlexMultisigTypes.MemberDiff.md)[]  }, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `diffs` | [`MemberDiff`](Cw3FlexMultisigTypes.MemberDiff.md)[] |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:90](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L90)

___

### propose

• **propose**: (`__namedParameters`: { `description`: `string` ; `latest?`: [`Expiration`](../modules/Cw3FlexMultisigTypes.md#expiration) ; `msgs`: [`CosmosMsgForEmpty`](../modules/Cw3FlexMultisigTypes.md#cosmosmsgforempty)[] ; `title`: `string`  }, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `latest?` | [`Expiration`](../modules/Cw3FlexMultisigTypes.md#expiration) |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/Cw3FlexMultisigTypes.md#cosmosmsgforempty)[] |
| › `title` | `string` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:50](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L50)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L49)

___

### vote

• **vote**: (`__namedParameters`: { `proposalId`: `number` ; `vote`: [`Vote`](../modules/Cw3FlexMultisigTypes.md#vote)  }, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| › `vote` | [`Vote`](../modules/Cw3FlexMultisigTypes.md#vote) |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.message-composer.ts#L64)
