"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVersionControlAddCodeIdMutation = exports.useVersionControlRemoveCodeIdMutation = exports.useVersionControlAddApiMutation = exports.useVersionControlRemoveApiMutation = exports.useVersionControlAddOsMutation = exports.useVersionControlSetAdminMutation = exports.useVersionControlSetFactoryMutation = exports.useVersionControlOsCoreQuery = exports.useVersionControlCodeIdQuery = exports.useVersionControlApiAddressQuery = exports.useVersionControlConfigQuery = exports.useVersionControlCodeIdsQuery = exports.useVersionControlApiAddressesQuery = exports.versionControlQueryKeys = void 0;
const react_query_1 = require("@tanstack/react-query");
exports.versionControlQueryKeys = {
    contract: [
        {
            contract: 'versionControl',
        },
    ],
    address: (contractAddress) => [Object.assign(Object.assign({}, exports.versionControlQueryKeys.contract[0]), { address: contractAddress })],
    osCore: (contractAddress, args) => [Object.assign(Object.assign({}, exports.versionControlQueryKeys.address(contractAddress)[0]), { method: 'os_core', args })],
    codeId: (contractAddress, args) => [Object.assign(Object.assign({}, exports.versionControlQueryKeys.address(contractAddress)[0]), { method: 'code_id', args })],
    apiAddress: (contractAddress, args) => [
        Object.assign(Object.assign({}, exports.versionControlQueryKeys.address(contractAddress)[0]), { method: 'api_address', args }),
    ],
    config: (contractAddress, args) => [Object.assign(Object.assign({}, exports.versionControlQueryKeys.address(contractAddress)[0]), { method: 'config', args })],
    codeIds: (contractAddress, args) => [Object.assign(Object.assign({}, exports.versionControlQueryKeys.address(contractAddress)[0]), { method: 'code_ids', args })],
    apiAddresses: (contractAddress, args) => [
        Object.assign(Object.assign({}, exports.versionControlQueryKeys.address(contractAddress)[0]), { method: 'api_addresses', args }),
    ],
};
function useVersionControlApiAddressesQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.versionControlQueryKeys.apiAddresses(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.apiAddresses({
            pageSize: args.pageSize,
            pageToken: args.pageToken,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlApiAddressesQuery = useVersionControlApiAddressesQuery;
function useVersionControlCodeIdsQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.versionControlQueryKeys.codeIds(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.codeIds({
            pageSize: args.pageSize,
            pageToken: args.pageToken,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlCodeIdsQuery = useVersionControlCodeIdsQuery;
function useVersionControlConfigQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(exports.versionControlQueryKeys.config(client === null || client === void 0 ? void 0 : client.contractAddress), () => (client ? client.config() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlConfigQuery = useVersionControlConfigQuery;
function useVersionControlApiAddressQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.versionControlQueryKeys.apiAddress(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.apiAddress({
            module: args.module,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlApiAddressQuery = useVersionControlApiAddressQuery;
function useVersionControlCodeIdQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.versionControlQueryKeys.codeId(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.codeId({
            module: args.module,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlCodeIdQuery = useVersionControlCodeIdQuery;
function useVersionControlOsCoreQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.versionControlQueryKeys.osCore(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.osCore({
            osId: args.osId,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlOsCoreQuery = useVersionControlOsCoreQuery;
function useVersionControlSetFactoryMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.setFactory(msg, fee, memo, funds), options);
}
exports.useVersionControlSetFactoryMutation = useVersionControlSetFactoryMutation;
function useVersionControlSetAdminMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.setAdmin(msg, fee, memo, funds), options);
}
exports.useVersionControlSetAdminMutation = useVersionControlSetAdminMutation;
function useVersionControlAddOsMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.addOs(msg, fee, memo, funds), options);
}
exports.useVersionControlAddOsMutation = useVersionControlAddOsMutation;
function useVersionControlRemoveApiMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.removeApi(msg, fee, memo, funds), options);
}
exports.useVersionControlRemoveApiMutation = useVersionControlRemoveApiMutation;
function useVersionControlAddApiMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.addApi(msg, fee, memo, funds), options);
}
exports.useVersionControlAddApiMutation = useVersionControlAddApiMutation;
function useVersionControlRemoveCodeIdMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.removeCodeId(msg, fee, memo, funds), options);
}
exports.useVersionControlRemoveCodeIdMutation = useVersionControlRemoveCodeIdMutation;
function useVersionControlAddCodeIdMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.addCodeId(msg, fee, memo, funds), options);
}
exports.useVersionControlAddCodeIdMutation = useVersionControlAddCodeIdMutation;
//# sourceMappingURL=VersionControl.react-query.js.map