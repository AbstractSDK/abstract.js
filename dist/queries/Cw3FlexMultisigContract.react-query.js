"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.6.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCw3FlexMultisigProposeMutation = exports.useCw3FlexMultisigVoteMutation = exports.useCw3FlexMultisigExecuteMutation = exports.useCw3FlexMultisigCloseMutation = exports.useCw3FlexMultisigMemberChangedHookMutation = exports.useCw3FlexMultisigThresholdQuery = exports.useCw3FlexMultisigProposalQuery = exports.useCw3FlexMultisigListProposalsQuery = exports.useCw3FlexMultisigReverseProposalsQuery = exports.useCw3FlexMultisigVoteQuery = exports.useCw3FlexMultisigListVotesQuery = exports.useCw3FlexMultisigVoterQuery = exports.useCw3FlexMultisigListVotersQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
function useCw3FlexMultisigListVotersQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigListVoters', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.listVoters({
            limit: args.limit,
            startAfter: args.startAfter,
        })
        : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigListVotersQuery = useCw3FlexMultisigListVotersQuery;
function useCw3FlexMultisigVoterQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigVoter', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.voter({
            address: args.address,
        })
        : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigVoterQuery = useCw3FlexMultisigVoterQuery;
function useCw3FlexMultisigListVotesQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigListVotes', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.listVotes({
            limit: args.limit,
            proposalId: args.proposalId,
            startAfter: args.startAfter,
        })
        : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigListVotesQuery = useCw3FlexMultisigListVotesQuery;
function useCw3FlexMultisigVoteQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigVote', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.queryVote({
            proposalId: args.proposalId,
            voter: args.voter,
        })
        : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigVoteQuery = useCw3FlexMultisigVoteQuery;
function useCw3FlexMultisigReverseProposalsQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigReverseProposals', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.reverseProposals({
            limit: args.limit,
            startBefore: args.startBefore,
        })
        : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigReverseProposalsQuery = useCw3FlexMultisigReverseProposalsQuery;
function useCw3FlexMultisigListProposalsQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigListProposals', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.listProposals({
            limit: args.limit,
            startAfter: args.startAfter,
        })
        : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigListProposalsQuery = useCw3FlexMultisigListProposalsQuery;
function useCw3FlexMultisigProposalQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigProposal', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.proposal({
            proposalId: args.proposalId,
        })
        : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigProposalQuery = useCw3FlexMultisigProposalQuery;
function useCw3FlexMultisigThresholdQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(['cw3FlexMultisigThreshold', client === null || client === void 0 ? void 0 : client.contractAddress], () => (client ? client.threshold() : undefined), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw3FlexMultisigThresholdQuery = useCw3FlexMultisigThresholdQuery;
function useCw3FlexMultisigMemberChangedHookMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.memberChangedHook(msg, fee, memo, funds), options);
}
exports.useCw3FlexMultisigMemberChangedHookMutation = useCw3FlexMultisigMemberChangedHookMutation;
function useCw3FlexMultisigCloseMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.close(msg, fee, memo, funds), options);
}
exports.useCw3FlexMultisigCloseMutation = useCw3FlexMultisigCloseMutation;
function useCw3FlexMultisigExecuteMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.execute(msg, fee, memo, funds), options);
}
exports.useCw3FlexMultisigExecuteMutation = useCw3FlexMultisigExecuteMutation;
function useCw3FlexMultisigVoteMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.vote(msg, fee, memo, funds), options);
}
exports.useCw3FlexMultisigVoteMutation = useCw3FlexMultisigVoteMutation;
function useCw3FlexMultisigProposeMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.propose(msg, fee, memo, funds), options);
}
exports.useCw3FlexMultisigProposeMutation = useCw3FlexMultisigProposeMutation;
//# sourceMappingURL=Cw3FlexMultisigContract.react-query.js.map