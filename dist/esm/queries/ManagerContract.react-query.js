/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useQuery } from "react-query";
export function useManagerInfoQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(["managerInfo", client === null || client === void 0 ? void 0 : client.contractAddress], function () { return client ? client.info() : undefined; }, __assign(__assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}
export function useManagerConfigQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(["managerConfig", client === null || client === void 0 ? void 0 : client.contractAddress], function () { return client ? client.config() : undefined; }, __assign(__assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}
export function useManagerModuleInfosQuery(_a) {
    var client = _a.client, args = _a.args, options = _a.options;
    return useQuery(["managerModuleInfos", client === null || client === void 0 ? void 0 : client.contractAddress], function () { return client ? client.moduleInfos({
        iterLimit: args.iterLimit,
        lastModuleName: args.lastModuleName
    }) : undefined; }, __assign({ enabled: !!client }, options));
}
export function useManagerModuleAddressesQuery(_a) {
    var client = _a.client, args = _a.args, options = _a.options;
    return useQuery(["managerModuleAddresses", client === null || client === void 0 ? void 0 : client.contractAddress], function () { return client ? client.moduleAddresses({
        names: args.names
    }) : undefined; }, __assign(__assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}
export function useManagerModuleVersionsQuery(_a) {
    var client = _a.client, args = _a.args, options = _a.options;
    return useQuery(["managerModuleVersions", client === null || client === void 0 ? void 0 : client.contractAddress], function () { return client ? client.moduleVersions({
        names: args.names
    }) : undefined; }, __assign(__assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}