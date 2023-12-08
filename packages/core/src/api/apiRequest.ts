import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import request, { type RequestDocument, type Variables } from 'graphql-request'
import type { VariablesAndRequestHeadersArgs } from 'graphql-request/build/esm/types'
import { ABSTRACT_API_URL } from '../constants'

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

/**
 * Query the Abstract Graphql API.
 * @param gqlQuery
 * @param variablesAndRequestHeaders
 */
export const apiRequest = <TResult, V extends Variables = Variables>(
  gqlQuery: RequestDocument | TypedDocumentNode<TResult, V>,
  ...variablesAndRequestHeaders: VariablesAndRequestHeadersArgs<V>
) =>
  graphqlRequest<TResult, V>(
    ABSTRACT_API_URL,
    gqlQuery,
    ...variablesAndRequestHeaders,
  )
