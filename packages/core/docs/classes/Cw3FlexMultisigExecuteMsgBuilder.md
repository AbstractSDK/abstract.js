[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigExecuteMsgBuilder

# Class: Cw3FlexMultisigExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw3FlexMultisigExecuteMsgBuilder.md#constructor)

### Methods

- [close](Cw3FlexMultisigExecuteMsgBuilder.md#close)
- [execute](Cw3FlexMultisigExecuteMsgBuilder.md#execute)
- [memberChangedHook](Cw3FlexMultisigExecuteMsgBuilder.md#memberchangedhook)
- [propose](Cw3FlexMultisigExecuteMsgBuilder.md#propose)
- [vote](Cw3FlexMultisigExecuteMsgBuilder.md#vote)

## Constructors

### constructor

• **new Cw3FlexMultisigExecuteMsgBuilder**()

## Methods

### close

▸ `Static` **close**(`«destructured»`): [`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |

#### Returns

[`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:102](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L102)

___

### execute

▸ `Static` **execute**(`«destructured»`): [`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |

#### Returns

[`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:86](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L86)

___

### memberChangedHook

▸ `Static` **memberChangedHook**(`«destructured»`): [`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `diffs` | [`MemberDiff`](../interfaces/Cw3FlexMultisigTypes.MemberDiff.md)[] |

#### Returns

[`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:118](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L118)

___

### propose

▸ `Static` **propose**(`«destructured»`): [`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `latest` | `undefined` \| ``null`` \| [`Expiration`](../modules/Cw3FlexMultisigTypes.md#expiration) |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/Cw3FlexMultisigTypes.md#cosmosmsgforempty)[] |
| › `title` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:46](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L46)

___

### vote

▸ `Static` **vote**(`«destructured»`): [`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| › `vote` | [`Vote`](../modules/Cw3FlexMultisigTypes.md#vote) |

#### Returns

[`ExecuteMsg`](../modules/Cw3FlexMultisigTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.msg-builder.ts#L68)
