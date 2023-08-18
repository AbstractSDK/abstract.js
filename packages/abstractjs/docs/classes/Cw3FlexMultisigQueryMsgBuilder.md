[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigQueryMsgBuilder

# Class: Cw3FlexMultisigQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw3FlexMultisigQueryMsgBuilder.md#constructor)

### Methods

- [listProposals](Cw3FlexMultisigQueryMsgBuilder.md#listproposals)
- [listVoters](Cw3FlexMultisigQueryMsgBuilder.md#listvoters)
- [listVotes](Cw3FlexMultisigQueryMsgBuilder.md#listvotes)
- [proposal](Cw3FlexMultisigQueryMsgBuilder.md#proposal)
- [reverseProposals](Cw3FlexMultisigQueryMsgBuilder.md#reverseproposals)
- [threshold](Cw3FlexMultisigQueryMsgBuilder.md#threshold)
- [vote](Cw3FlexMultisigQueryMsgBuilder.md#vote)
- [voter](Cw3FlexMultisigQueryMsgBuilder.md#voter)

## Constructors

### constructor

• **new Cw3FlexMultisigQueryMsgBuilder**()

## Methods

### listProposals

▸ `Static` **listProposals**(`«destructured»`): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `number` |

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:157](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L157)

___

### listVoters

▸ `Static` **listVoters**(`«destructured»`): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:247](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L247)

___

### listVotes

▸ `Static` **listVotes**(`«destructured»`): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `proposalId` | `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:211](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L211)

___

### proposal

▸ `Static` **proposal**(`«destructured»`): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:141](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L141)

___

### reverseProposals

▸ `Static` **reverseProposals**(`«destructured»`): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startBefore` | `undefined` \| ``null`` \| `number` |

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:175](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L175)

___

### threshold

▸ `Static` **threshold**(): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:136](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L136)

___

### vote

▸ `Static` **vote**(`«destructured»`): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| › `voter` | `string` |

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:193](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L193)

___

### voter

▸ `Static` **voter**(`«destructured»`): [`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |

#### Returns

[`QueryMsg`](../modules/Cw3FlexMultisigTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:231](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L231)
