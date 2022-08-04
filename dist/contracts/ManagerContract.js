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
exports.ManagerClient = exports.ManagerQueryClient = void 0;
class ManagerQueryClient {
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
        Object.defineProperty(this, "moduleVersions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ names }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    module_versions: {
                        names,
                    },
                });
            })
        });
        Object.defineProperty(this, "moduleAddresses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ names }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    module_addresses: {
                        names,
                    },
                });
            })
        });
        Object.defineProperty(this, "moduleInfos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ iterLimit, lastModuleName, }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    module_infos: {
                        iter_limit: iterLimit,
                        last_module_name: lastModuleName,
                    },
                });
            })
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    config: {},
                });
            })
        });
        Object.defineProperty(this, "info", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    info: {},
                });
            })
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.moduleVersions = this.moduleVersions.bind(this);
        this.moduleAddresses = this.moduleAddresses.bind(this);
        this.moduleInfos = this.moduleInfos.bind(this);
        this.config = this.config.bind(this);
        this.info = this.info.bind(this);
    }
}
exports.ManagerQueryClient = ManagerQueryClient;
class ManagerClient extends ManagerQueryClient {
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
        Object.defineProperty(this, "setAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ admin, governanceType, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    set_admin: {
                        admin,
                        governance_type: governanceType,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "createModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ initMsg, module, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    create_module: {
                        init_msg: initMsg,
                        module,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "registerModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module, moduleAddr, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    register_module: {
                        module,
                        module_addr: moduleAddr,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "removeModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ moduleName, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    remove_module: {
                        module_name: moduleName,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "execOnModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ execMsg, moduleName, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    exec_on_module: {
                        exec_msg: execMsg,
                        module_name: moduleName,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "updateConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ root, vcAddr, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    update_config: {
                        root,
                        vc_addr: vcAddr,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "upgrade", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ migrateMsg, module, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    upgrade: {
                        migrate_msg: migrateMsg,
                        module,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "suspendOs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ newStatus, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    suspend_os: {
                        new_status: newStatus,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "updateInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ description, link, osName, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    update_info: {
                        description,
                        link,
                        os_name: osName,
                    },
                }, fee, memo, funds);
            })
        });
        this.client = client;
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
exports.ManagerClient = ManagerClient;
//# sourceMappingURL=ManagerContract.js.map