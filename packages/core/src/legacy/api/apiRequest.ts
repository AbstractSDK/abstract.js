import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import request, { type RequestDocument, type Variables } from 'graphql-request'

/**
 * A strongly-typed query to the Abstract API
 * @param url - Abstract API URL
 * @param gqlQuery
 * @param variablesAndRequestHeaders
 */
export const graphqlRequest = request

export type { RequestDocument, Variables, TypedDocumentNode }
