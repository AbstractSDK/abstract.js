"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVersionControlAddCodeIdMutation = exports.useVersionControlRemoveCodeIdMutation = exports.useVersionControlAddApiMutation = exports.useVersionControlRemoveApiMutation = exports.useVersionControlAddOsMutation = exports.useVersionControlSetAdminMutation = exports.useVersionControlSetFactoryMutation = exports.useVersionControlOsCoreQuery = exports.useVersionControlCodeIdQuery = exports.useVersionControlApiAddressQuery = exports.useVersionControlConfigQuery = exports.useVersionControlCodeIdsQuery = exports.useVersionControlApiAddressesQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
function useVersionControlApiAddressesQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['versionControlApiAddresses', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.apiAddresses({
            iterLimit: args.iterLimit,
            lastApiModule: args.lastApiModule,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlApiAddressesQuery = useVersionControlApiAddressesQuery;
function useVersionControlCodeIdsQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['versionControlCodeIds', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.codeIds({
            iterLimit: args.iterLimit,
            lastModule: args.lastModule,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlCodeIdsQuery = useVersionControlCodeIdsQuery;
function useVersionControlConfigQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(['versionControlConfig', client === null || client === void 0 ? void 0 : client.contractAddress], () => (client ? client.config() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlConfigQuery = useVersionControlConfigQuery;
function useVersionControlApiAddressQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['versionControlApiAddress', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.apiAddress({
            module: args.module,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlApiAddressQuery = useVersionControlApiAddressQuery;
function useVersionControlCodeIdQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['versionControlCodeId', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.codeId({
            module: args.module,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useVersionControlCodeIdQuery = useVersionControlCodeIdQuery;
function useVersionControlOsCoreQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['versionControlOsCore', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
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