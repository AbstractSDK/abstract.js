"use strict";
/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFactoryConfigQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
function useFactoryConfigQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["factoryConfig", client.contractAddress], () => client.config(), options);
}
exports.useFactoryConfigQuery = useFactoryConfigQuery;
//# sourceMappingURL=FactoryContract.react-query.js.map