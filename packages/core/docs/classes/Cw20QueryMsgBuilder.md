[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw20QueryMsgBuilder

# Class: Cw20QueryMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw20QueryMsgBuilder.md#constructor)

### Methods

- [allAccounts](Cw20QueryMsgBuilder.md#allaccounts)
- [allAllowances](Cw20QueryMsgBuilder.md#allallowances)
- [allowance](Cw20QueryMsgBuilder.md#allowance)
- [balance](Cw20QueryMsgBuilder.md#balance)
- [downloadLogo](Cw20QueryMsgBuilder.md#downloadlogo)
- [marketingInfo](Cw20QueryMsgBuilder.md#marketinginfo)
- [minter](Cw20QueryMsgBuilder.md#minter)
- [tokenInfo](Cw20QueryMsgBuilder.md#tokeninfo)

## Constructors

### constructor

• **new Cw20QueryMsgBuilder**()

## Methods

### allAccounts

▸ `Static` **allAccounts**(`«destructured»`): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:290](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L290)

___

### allAllowances

▸ `Static` **allAllowances**(`«destructured»`): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `owner` | `string` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:270](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L270)

___

### allowance

▸ `Static` **allowance**(`«destructured»`): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `owner` | `string` |
| › `spender` | `string` |

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:252](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L252)

___

### balance

▸ `Static` **balance**(`«destructured»`): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:226](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L226)

___

### downloadLogo

▸ `Static` **downloadLogo**(): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:313](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L313)

___

### marketingInfo

▸ `Static` **marketingInfo**(): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:308](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L308)

___

### minter

▸ `Static` **minter**(): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:247](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L247)

___

### tokenInfo

▸ `Static` **tokenInfo**(): [`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20Types.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:242](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L242)
