/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { useQuery } from "react-query";
export function useFactoryConfigQuery({ client, options }) {
    return useQuery(["factoryConfig", client.contractAddress], () => client.config(), options);
}
