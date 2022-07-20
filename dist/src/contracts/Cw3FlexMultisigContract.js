/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { __awaiter } from "tslib";
export class Cw3FlexMultisigQueryClient {
    constructor(client, contractAddress) {
        this.threshold = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                threshold: {}
            });
        });
        this.proposal = ({ proposalId }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                proposal: {
                    proposal_id: proposalId
                }
            });
        });
        this.listProposals = ({ limit, startAfter }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                list_proposals: {
                    limit,
                    start_after: startAfter
                }
            });
        });
        this.reverseProposals = ({ limit, startBefore }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                reverse_proposals: {
                    limit,
                    start_before: startBefore
                }
            });
        });
        this.queryVote = ({ proposalId, voter }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                vote: {
                    proposal_id: proposalId,
                    voter
                }
            });
        });
        this.listVotes = ({ limit, proposalId, startAfter }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                list_votes: {
                    limit,
                    proposal_id: proposalId,
                    start_after: startAfter
                }
            });
        });
        this.voter = ({ address }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                voter: {
                    address
                }
            });
        });
        this.listVoters = ({ limit, startAfter }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                list_voters: {
                    limit,
                    start_after: startAfter
                }
            });
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.threshold = this.threshold.bind(this);
        this.proposal = this.proposal.bind(this);
        this.listProposals = this.listProposals.bind(this);
        this.reverseProposals = this.reverseProposals.bind(this);
        this.queryVote = this.queryVote.bind(this);
        this.listVotes = this.listVotes.bind(this);
        this.voter = this.voter.bind(this);
        this.listVoters = this.listVoters.bind(this);
    }
}
export class Cw3FlexMultisigClient extends Cw3FlexMultisigQueryClient {
    constructor(client, sender, contractAddress) {
        super(client, contractAddress);
        this.propose = ({ description, latest, msgs, title }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                propose: {
                    description,
                    latest,
                    msgs,
                    title
                }
            }, fee, memo, funds);
        });
        this.vote = ({ proposalId, vote }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                vote: {
                    proposal_id: proposalId,
                    vote
                }
            }, fee, memo, funds);
        });
        this.execute = ({ proposalId }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                execute: {
                    proposal_id: proposalId
                }
            }, fee, memo, funds);
        });
        this.close = ({ proposalId }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                close: {
                    proposal_id: proposalId
                }
            }, fee, memo, funds);
        });
        this.memberChangedHook = (fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                member_changed_hook: {}
            }, fee, memo, funds);
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.propose = this.propose.bind(this);
        this.vote = this.vote.bind(this);
        this.execute = this.execute.bind(this);
        this.close = this.close.bind(this);
        this.memberChangedHook = this.memberChangedHook.bind(this);
    }
}
