"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
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
exports.VersionControlClient = exports.VersionControlQueryClient = void 0;
class VersionControlQueryClient {
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
        Object.defineProperty(this, "osCore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osId }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    os_core: {
                        os_id: osId
                    }
                });
            })
        });
        Object.defineProperty(this, "codeId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    code_id: {
                        module
                    }
                });
            })
        });
        Object.defineProperty(this, "apiAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    api_address: {
                        module
                    }
                });
            })
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    config: {}
                });
            })
        });
        Object.defineProperty(this, "codeIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ pageSize, pageToken }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    code_ids: {
                        page_size: pageSize,
                        page_token: pageToken
                    }
                });
            })
        });
        Object.defineProperty(this, "apiAddresses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ pageSize, pageToken }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    api_addresses: {
                        page_size: pageSize,
                        page_token: pageToken
                    }
                });
            })
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.osCore = this.osCore.bind(this);
        this.codeId = this.codeId.bind(this);
        this.apiAddress = this.apiAddress.bind(this);
        this.config = this.config.bind(this);
        this.codeIds = this.codeIds.bind(this);
        this.apiAddresses = this.apiAddresses.bind(this);
    }
}
exports.VersionControlQueryClient = VersionControlQueryClient;
class VersionControlClient extends VersionControlQueryClient {
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
        Object.defineProperty(this, "addCodeId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ codeId, module, version }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    add_code_id: {
                        code_id: codeId,
                        module,
                        version
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "removeCodeId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module, version }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    remove_code_id: {
                        module,
                        version
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "addApi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ address, module, version }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    add_api: {
                        address,
                        module,
                        version
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "removeApi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module, version }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    remove_api: {
                        module,
                        version
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "addOs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ managerAddress, osId, proxyAddress }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    add_os: {
                        manager_address: managerAddress,
                        os_id: osId,
                        proxy_address: proxyAddress
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "setAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ newAdmin }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    set_admin: {
                        new_admin: newAdmin
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "setFactory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ newFactory }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    set_factory: {
                        new_factory: newFactory
                    }
                }, fee, memo, funds);
            })
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.addCodeId = this.addCodeId.bind(this);
        this.removeCodeId = this.removeCodeId.bind(this);
        this.addApi = this.addApi.bind(this);
        this.removeApi = this.removeApi.bind(this);
        this.addOs = this.addOs.bind(this);
        this.setAdmin = this.setAdmin.bind(this);
        this.setFactory = this.setFactory.bind(this);
    }
}
exports.VersionControlClient = VersionControlClient;
//# sourceMappingURL=VersionControl.client.js.map