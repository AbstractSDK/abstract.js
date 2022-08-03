/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { useQuery } from "react-query";
export function useCw4GroupHooksQuery({ client, options }) {
    return useQuery(["cw4GroupHooks", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.hooks() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}
export function useCw4GroupMemberQuery({ client, args, options }) {
    return useQuery(["cw4GroupMember", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.member({
        addr: args.addr,
        atHeight: args.atHeight
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}
export function useCw4GroupListMembersQuery({ client, args, options }) {
    return useQuery(["cw4GroupListMembers", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.listMembers({
        limit: args.limit,
        startAfter: args.startAfter
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}
export function useCw4GroupTotalWeightQuery({ client, options }) {
    return useQuery(["cw4GroupTotalWeight", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.totalWeight() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}
export function useCw4GroupAdminQuery({ client, options }) {
    return useQuery(["cw4GroupAdmin", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.admin() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }));
}