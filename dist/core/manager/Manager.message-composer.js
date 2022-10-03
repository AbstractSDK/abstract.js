"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerMessageComposer = void 0;
const tx_1 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const encoding_1 = require("@cosmjs/encoding");
class ManagerMessageComposer {
    constructor(sender, contractAddress) {
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
        Object.defineProperty(this, "execOnModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ execMsg, moduleId, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            exec_on_module: {
                                exec_msg: execMsg,
                                module_id: moduleId,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "updateModuleAddresses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ toAdd, toRemove, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            update_module_addresses: {
                                to_add: toAdd,
                                to_remove: toRemove,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "createModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ initMsg, module, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            create_module: {
                                init_msg: initMsg,
                                module,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "registerModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module, moduleAddr, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            register_module: {
                                module,
                                module_addr: moduleAddr,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "removeModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ moduleId, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            remove_module: {
                                module_id: moduleId,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "upgrade", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ migrateMsg, module, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            upgrade: {
                                migrate_msg: migrateMsg,
                                module,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "updateInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ description, link, name, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            update_info: {
                                description,
                                link,
                                name,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "setRoot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ governanceType, root, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            set_root: {
                                governance_type: governanceType,
                                root,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "suspendOs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ newStatus, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            suspend_os: {
                                new_status: newStatus,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.execOnModule = this.execOnModule.bind(this);
        this.updateModuleAddresses = this.updateModuleAddresses.bind(this);
        this.createModule = this.createModule.bind(this);
        this.registerModule = this.registerModule.bind(this);
        this.removeModule = this.removeModule.bind(this);
        this.upgrade = this.upgrade.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.setRoot = this.setRoot.bind(this);
        this.suspendOs = this.suspendOs.bind(this);
    }
}
exports.ManagerMessageComposer = ManagerMessageComposer;
//# sourceMappingURL=Manager.message-composer.js.map