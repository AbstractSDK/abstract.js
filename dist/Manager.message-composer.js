"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerMessageComposer = exports.RawManagerMessageComposer = void 0;
const tx_1 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const encoding_1 = require("@cosmjs/encoding");
class RawManagerMessageComposer {
    constructor() {
        Object.defineProperty(this, "setAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ admin, governanceType }) => ({
                set_admin: {
                    admin,
                    governance_type: governanceType
                }
            })
        });
        Object.defineProperty(this, "createModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ initMsg, module }) => ({
                create_module: {
                    init_msg: initMsg,
                    module
                }
            })
        });
        this.setAdmin = this.setAdmin.bind(this);
        this.createModule = this.createModule.bind(this);
    }
}
exports.RawManagerMessageComposer = RawManagerMessageComposer;
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
        Object.defineProperty(this, "setAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ admin, governanceType }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            set_admin: {
                                admin,
                                governance_type: governanceType
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "createModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ initMsg, module }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            create_module: {
                                init_msg: initMsg,
                                module
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "registerModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module, moduleAddr }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            register_module: {
                                module,
                                module_addr: moduleAddr
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "removeModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ moduleName }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            remove_module: {
                                module_name: moduleName
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "execOnModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ execMsg, moduleName }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            exec_on_module: {
                                exec_msg: execMsg,
                                module_name: moduleName
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "updateConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ root, vcAddr }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            update_config: {
                                root,
                                vc_addr: vcAddr
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "upgrade", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ migrateMsg, module }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            upgrade: {
                                migrate_msg: migrateMsg,
                                module
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "suspendOs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ newStatus }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            suspend_os: {
                                new_status: newStatus
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "updateInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ description, link, name }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            update_info: {
                                description,
                                link,
                                name
                            }
                        })),
                        funds
                    })
                };
            }
        });
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.setAdmin = this.setAdmin.bind(this);
        this.createModule = this.createModule.bind(this);
        this.registerModule = this.registerModule.bind(this);
        this.removeModule = this.removeModule.bind(this);
        this.execOnModule = this.execOnModule.bind(this);
        this.updateConfig = this.updateConfig.bind(this);
        this.upgrade = this.upgrade.bind(this);
        this.suspendOs = this.suspendOs.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
    }
}
exports.ManagerMessageComposer = ManagerMessageComposer;
//# sourceMappingURL=Manager.message-composer.js.map