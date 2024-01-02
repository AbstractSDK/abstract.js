import {
  type RequestDocument,
  type TypedDocumentNode,
  type Variables,
  type VariablesAndRequestHeadersArgs,
  apiRequest,
} from '@abstract-money/core'
import { type QueryKey } from '@tanstack/query-core'
import { useQuery } from '@tanstack/react-query'
import { type UseQueryOptions } from '@tanstack/react-query/src/types'

/**
 * Query abstract subgraph with options provided for react query.
 * @param gqlQuery
 * @param options
 * @param variablesAndRequestHeaders
 */
export const useSubgraphQuery = <
  TQueryKey extends QueryKey = QueryKey,
  TResult = unknown,
  TData = TResult,
  V extends Variables = Variables,
>(
  options: Omit<UseQueryOptions<TResult, Error, TData, TQueryKey>, 'queryFn'>,
  query: RequestDocument | TypedDocumentNode<TResult, V>,
  ...variablesAndRequestHeaders: VariablesAndRequestHeadersArgs<V>
) => {
  return useQuery({
    queryFn: () => apiRequest<TResult, V>(query, ...variablesAndRequestHeaders),
    ...options,
  })
}
