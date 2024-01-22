import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import request, { type RequestDocument, type Variables } from 'graphql-request'
import type { VariablesAndRequestHeadersArgs } from 'graphql-request/build/esm/types'

/**
 * A strongly-typed query to the Abstract API
 * @param url - Abstract API URL
 * @param gqlQuery
 * @param variablesAndRequestHeaders
 */
export const graphqlRequest = <TResult, V extends Variables = Variables>(
  url: string,
  gqlQuery: RequestDocument | TypedDocumentNode<TResult, V>,
  ...variablesAndRequestHeaders: VariablesAndRequestHeadersArgs<V>
) => request(url, gqlQuery, ...variablesAndRequestHeaders)

export type {
  VariablesAndRequestHeadersArgs,
  RequestDocument,
  Variables,
  TypedDocumentNode,
}
