/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { __awaiter } from "tslib";
export class FactoryQueryClient {
    constructor(client, contractAddress) {
        this.config = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                config: {}
            });
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.config = this.config.bind(this);
    }
}
export class FactoryClient extends FactoryQueryClient {
    constructor(client, sender, contractAddress) {
        super(client, contractAddress);
        this.receive = (fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                receive: {}
            }, fee, memo, funds);
        });
        this.updateConfig = ({ admin, memoryContract, moduleFactoryAddress, subscriptionAddress, versionControlContract }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                update_config: {
                    admin,
                    memory_contract: memoryContract,
                    module_factory_address: moduleFactoryAddress,
                    subscription_address: subscriptionAddress,
                    version_control_contract: versionControlContract
                }
            }, fee, memo, funds);
        });
        this.createOs = ({ description, governance, link, osName }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                create_os: {
                    description,
                    governance,
                    link,
                    os_name: osName
                }
            }, fee, memo, funds);
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.receive = this.receive.bind(this);
        this.updateConfig = this.updateConfig.bind(this);
        this.createOs = this.createOs.bind(this);
    }
}