/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
import { toUtf8 } from '@cosmjs/encoding';
var Cw3FlexMultisigMessageComposer = /** @class */ (function () {
    function Cw3FlexMultisigMessageComposer(sender, contractAddress) {
        var _this = this;
        this.propose = function (_a, funds) {
            var description = _a.description, latest = _a.latest, msgs = _a.msgs, title = _a.title;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        propose: {
                            description: description,
                            latest: latest,
                            msgs: msgs,
                            title: title,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.vote = function (_a, funds) {
            var proposalId = _a.proposalId, vote = _a.vote;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        vote: {
                            proposal_id: proposalId,
                            vote: vote,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.execute = function (_a, funds) {
            var proposalId = _a.proposalId;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        execute: {
                            proposal_id: proposalId,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.close = function (_a, funds) {
            var proposalId = _a.proposalId;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        close: {
                            proposal_id: proposalId,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.memberChangedHook = function (_a, funds) {
            var diffs = _a.diffs;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        member_changed_hook: {
                            diffs: diffs,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.propose = this.propose.bind(this);
        this.vote = this.vote.bind(this);
        this.execute = this.execute.bind(this);
        this.close = this.close.bind(this);
        this.memberChangedHook = this.memberChangedHook.bind(this);
    }
    return Cw3FlexMultisigMessageComposer;
}());
export { Cw3FlexMultisigMessageComposer };
