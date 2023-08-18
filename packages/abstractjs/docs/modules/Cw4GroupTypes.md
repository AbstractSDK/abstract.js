[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw4GroupTypes

# Namespace: Cw4GroupTypes

## Table of contents

### Interfaces

- [AdminResponse](../interfaces/Cw4GroupTypes.AdminResponse.md)
- [HooksResponse](../interfaces/Cw4GroupTypes.HooksResponse.md)
- [InstantiateMsg](../interfaces/Cw4GroupTypes.InstantiateMsg.md)
- [ListMembersResponse](../interfaces/Cw4GroupTypes.ListMembersResponse.md)
- [Member](../interfaces/Cw4GroupTypes.Member.md)
- [MemberListResponse](../interfaces/Cw4GroupTypes.MemberListResponse.md)
- [MemberResponse](../interfaces/Cw4GroupTypes.MemberResponse.md)
- [TotalWeightResponse](../interfaces/Cw4GroupTypes.TotalWeightResponse.md)

### Type Aliases

- [ExecuteMsg](Cw4GroupTypes.md#executemsg)
- [QueryMsg](Cw4GroupTypes.md#querymsg)

## Type Aliases

### ExecuteMsg

Ƭ **ExecuteMsg**: { `update_admin`: { `admin?`: `string` \| ``null``  }  } \| { `update_members`: { `add`: [`Member`](../interfaces/Cw4GroupTypes.Member.md)[] ; `remove`: `string`[]  }  } \| { `add_hook`: { `addr`: `string`  }  } \| { `remove_hook`: { `addr`: `string`  }  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.types.ts:10](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.types.ts#L10)

___

### QueryMsg

Ƭ **QueryMsg**: { `admin`: {}  } \| { `total_weight`: {}  } \| { `list_members`: { `limit?`: `number` \| ``null`` ; `start_after?`: `string` \| ``null``  }  } \| { `member`: { `addr`: `string` ; `at_height?`: `number` \| ``null``  }  } \| { `hooks`: {}  }

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.types.ts:52](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.types.ts#L52)
