"use strict";
/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cw4GroupClient = exports.Cw4GroupQueryClient = void 0;
class Cw4GroupQueryClient {
    constructor(client, contractAddress) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "admin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    admin: {}
                });
            })
        });
        Object.defineProperty(this, "totalWeight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    total_weight: {}
                });
            })
        });
        Object.defineProperty(this, "listMembers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ limit, startAfter }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    list_members: {
                        limit,
                        start_after: startAfter
                    }
                });
            })
        });
        Object.defineProperty(this, "member", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ addr, atHeight }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    member: {
                        addr,
                        at_height: atHeight
                    }
                });
            })
        });
        Object.defineProperty(this, "hooks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    hooks: {}
                });
            })
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.admin = this.admin.bind(this);
        this.totalWeight = this.totalWeight.bind(this);
        this.listMembers = this.listMembers.bind(this);
        this.member = this.member.bind(this);
        this.hooks = this.hooks.bind(this);
    }
}
exports.Cw4GroupQueryClient = Cw4GroupQueryClient;
class Cw4GroupClient extends Cw4GroupQueryClient {
    constructor(client, sender, contractAddress) {
        super(client, contractAddress);
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ admin }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    update_admin: {
                        admin
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "updateMembers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ add, remove }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    update_members: {
                        add,
                        remove
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "addHook", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ addr }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    add_hook: {
                        addr
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "removeHook", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ addr }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    remove_hook: {
                        addr
                    }
                }, fee, memo, funds);
            })
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.updateAdmin = this.updateAdmin.bind(this);
        this.updateMembers = this.updateMembers.bind(this);
        this.addHook = this.addHook.bind(this);
        this.removeHook = this.removeHook.bind(this);
    }
}
exports.Cw4GroupClient = Cw4GroupClient;
//# sourceMappingURL=Cw4GroupContract.js.map