"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemoryUpdateContractAddressesMutation = exports.useMemoryUpdateAssetAddressesMutation = exports.useMemorySetAdminMutation = exports.useMemoryAssetsQuery = exports.useMemoryContractsQuery = exports.useMemoryContractListQuery = exports.useMemoryAssetListQuery = exports.memoryQueryKeys = void 0;
const react_query_1 = require("@tanstack/react-query");
exports.memoryQueryKeys = {
    contract: [{
            contract: "memory"
        }],
    address: (contractAddress) => [Object.assign(Object.assign({}, exports.memoryQueryKeys.contract[0]), { address: contractAddress })],
    assets: (contractAddress, args) => [Object.assign(Object.assign({}, exports.memoryQueryKeys.address(contractAddress)[0]), { method: "assets", args })],
    contracts: (contractAddress, args) => [Object.assign(Object.assign({}, exports.memoryQueryKeys.address(contractAddress)[0]), { method: "contracts", args })],
    contractList: (contractAddress, args) => [Object.assign(Object.assign({}, exports.memoryQueryKeys.address(contractAddress)[0]), { method: "contract_list", args })],
    assetList: (contractAddress, args) => [Object.assign(Object.assign({}, exports.memoryQueryKeys.address(contractAddress)[0]), { method: "asset_list", args })]
};
function useMemoryAssetListQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(exports.memoryQueryKeys.assetList(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client ? client.assetList({
        pageSize: args.pageSize,
        pageToken: args.pageToken
    }) : Promise.reject(new Error("Invalid client")), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useMemoryAssetListQuery = useMemoryAssetListQuery;
function useMemoryContractListQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(exports.memoryQueryKeys.contractList(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client ? client.contractList({
        pageSize: args.pageSize,
        pageToken: args.pageToken
    }) : Promise.reject(new Error("Invalid client")), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useMemoryContractListQuery = useMemoryContractListQuery;
function useMemoryContractsQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(exports.memoryQueryKeys.contracts(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client ? client.contracts({
        names: args.names
    }) : Promise.reject(new Error("Invalid client")), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useMemoryContractsQuery = useMemoryContractsQuery;
function useMemoryAssetsQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(exports.memoryQueryKeys.assets(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client ? client.assets({
        names: args.names
    }) : Promise.reject(new Error("Invalid client")), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useMemoryAssetsQuery = useMemoryAssetsQuery;
function useMemorySetAdminMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.setAdmin(msg, fee, memo, funds), options);
}
exports.useMemorySetAdminMutation = useMemorySetAdminMutation;
function useMemoryUpdateAssetAddressesMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateAssetAddresses(msg, fee, memo, funds), options);
}
exports.useMemoryUpdateAssetAddressesMutation = useMemoryUpdateAssetAddressesMutation;
function useMemoryUpdateContractAddressesMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateContractAddresses(msg, fee, memo, funds), options);
}
exports.useMemoryUpdateContractAddressesMutation = useMemoryUpdateContractAddressesMutation;
//# sourceMappingURL=Memory.react-query.js.map