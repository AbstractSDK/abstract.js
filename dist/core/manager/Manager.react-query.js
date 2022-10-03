"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useManagerExecOnModuleMutation = exports.useManagerUpdateModuleAddressesMutation = exports.useManagerCreateModuleMutation = exports.useManagerRegisterModuleMutation = exports.useManagerRemoveModuleMutation = exports.useManagerUpgradeMutation = exports.useManagerUpdateInfoMutation = exports.useManagerSetRootMutation = exports.useManagerSuspendOsMutation = exports.useManagerModuleVersionsQuery = exports.useManagerModuleAddressesQuery = exports.useManagerModuleInfosQuery = exports.useManagerConfigQuery = exports.useManagerInfoQuery = exports.managerQueries = exports.managerQueryKeys = void 0;
const react_query_1 = require("@tanstack/react-query");
exports.managerQueryKeys = {
    contract: [
        {
            contract: 'manager',
        },
    ],
    address: (contractAddress) => [Object.assign(Object.assign({}, exports.managerQueryKeys.contract[0]), { address: contractAddress })],
    moduleVersions: (contractAddress, args) => [Object.assign(Object.assign({}, exports.managerQueryKeys.address(contractAddress)[0]), { method: 'module_versions', args })],
    moduleAddresses: (contractAddress, args) => [
        Object.assign(Object.assign({}, exports.managerQueryKeys.address(contractAddress)[0]), { method: 'module_addresses', args }),
    ],
    moduleInfos: (contractAddress, args) => [Object.assign(Object.assign({}, exports.managerQueryKeys.address(contractAddress)[0]), { method: 'module_infos', args })],
    config: (contractAddress, args) => [Object.assign(Object.assign({}, exports.managerQueryKeys.address(contractAddress)[0]), { method: 'config', args })],
    info: (contractAddress, args) => [Object.assign(Object.assign({}, exports.managerQueryKeys.address(contractAddress)[0]), { method: 'info', args })],
};
exports.managerQueries = {
    moduleVersions: ({ client, options, args, }) => (Object.assign(Object.assign({ queryKey: exports.managerQueryKeys.moduleVersions(client === null || client === void 0 ? void 0 : client.contractAddress, args), queryFn: () => client
            ? client.moduleVersions({
                names: args.names,
            })
            : Promise.reject(new Error('Invalid client')) }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) })),
    moduleAddresses: ({ client, options, args, }) => (Object.assign(Object.assign({ queryKey: exports.managerQueryKeys.moduleAddresses(client === null || client === void 0 ? void 0 : client.contractAddress, args), queryFn: () => client
            ? client.moduleAddresses({
                names: args.names,
            })
            : Promise.reject(new Error('Invalid client')) }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) })),
    moduleInfos: ({ client, options, args, }) => (Object.assign(Object.assign({ queryKey: exports.managerQueryKeys.moduleInfos(client === null || client === void 0 ? void 0 : client.contractAddress, args), queryFn: () => client
            ? client.moduleInfos({
                pageSize: args.pageSize,
                pageToken: args.pageToken,
            })
            : Promise.reject(new Error('Invalid client')) }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) })),
    config: ({ client, options, }) => (Object.assign(Object.assign({ queryKey: exports.managerQueryKeys.config(client === null || client === void 0 ? void 0 : client.contractAddress), queryFn: () => (client ? client.config() : Promise.reject(new Error('Invalid client'))) }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) })),
    info: ({ client, options, }) => (Object.assign(Object.assign({ queryKey: exports.managerQueryKeys.info(client === null || client === void 0 ? void 0 : client.contractAddress), queryFn: () => (client ? client.info() : Promise.reject(new Error('Invalid client'))) }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) })),
};
function useManagerInfoQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(exports.managerQueryKeys.info(client === null || client === void 0 ? void 0 : client.contractAddress), () => (client ? client.info() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useManagerInfoQuery = useManagerInfoQuery;
function useManagerConfigQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(exports.managerQueryKeys.config(client === null || client === void 0 ? void 0 : client.contractAddress), () => (client ? client.config() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useManagerConfigQuery = useManagerConfigQuery;
function useManagerModuleInfosQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.managerQueryKeys.moduleInfos(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.moduleInfos({
            pageSize: args.pageSize,
            pageToken: args.pageToken,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useManagerModuleInfosQuery = useManagerModuleInfosQuery;
function useManagerModuleAddressesQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.managerQueryKeys.moduleAddresses(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.moduleAddresses({
            names: args.names,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useManagerModuleAddressesQuery = useManagerModuleAddressesQuery;
function useManagerModuleVersionsQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.managerQueryKeys.moduleVersions(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.moduleVersions({
            names: args.names,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useManagerModuleVersionsQuery = useManagerModuleVersionsQuery;
function useManagerSuspendOsMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.suspendOs(msg, fee, memo, funds), options);
}
exports.useManagerSuspendOsMutation = useManagerSuspendOsMutation;
function useManagerSetRootMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.setRoot(msg, fee, memo, funds), options);
}
exports.useManagerSetRootMutation = useManagerSetRootMutation;
function useManagerUpdateInfoMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateInfo(msg, fee, memo, funds), options);
}
exports.useManagerUpdateInfoMutation = useManagerUpdateInfoMutation;
function useManagerUpgradeMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.upgrade(msg, fee, memo, funds), options);
}
exports.useManagerUpgradeMutation = useManagerUpgradeMutation;
function useManagerRemoveModuleMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.removeModule(msg, fee, memo, funds), options);
}
exports.useManagerRemoveModuleMutation = useManagerRemoveModuleMutation;
function useManagerRegisterModuleMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.registerModule(msg, fee, memo, funds), options);
}
exports.useManagerRegisterModuleMutation = useManagerRegisterModuleMutation;
function useManagerCreateModuleMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.createModule(msg, fee, memo, funds), options);
}
exports.useManagerCreateModuleMutation = useManagerCreateModuleMutation;
function useManagerUpdateModuleAddressesMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateModuleAddresses(msg, fee, memo, funds), options);
}
exports.useManagerUpdateModuleAddressesMutation = useManagerUpdateModuleAddressesMutation;
function useManagerExecOnModuleMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.execOnModule(msg, fee, memo, funds), options);
}
exports.useManagerExecOnModuleMutation = useManagerExecOnModuleMutation;
//# sourceMappingURL=Manager.react-query.js.map