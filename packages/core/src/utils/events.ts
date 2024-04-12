import { type Attribute, type ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { type Event } from '@cosmjs/stargate/build/events'

/**
 * Searches in events for event of the given event type and in that event
 * for the first attribute with the given attribute key.
 *
 * Throws if the attribute was not found.
 * See @cosmjs/stargate/build/logs for original definition.
 */
export function findAttribute(
  events: readonly Event[] | undefined,
  eventType: string,
  attrKey: string,
): Attribute {
  const out = events
    ?.filter(({ type }) => type === eventType)
    ?.flatMap(({ attributes }) => attributes)
    ?.find(({ key }) => key === attrKey)
  if (!out) {
    throw new Error(
      `Could not find attribute '${attrKey}' in first event of type '${eventType}' in first log.`,
    )
  }
  return out
}

/**
 * The marker for abstract events.
 */
export const ABSTRACT_EVENT_MARKER = 'wasm-abstract'

/**
 * Extracts the attribute value with the given key from the abstract event attributes.
 * @param executeResult - The CosmWasm execute result.
 * @param key - The key to search for.
 * @returns The attribute value if found, or undefined if not found.
 */
export function findAbstractAttribute(
  executeResult: ExecuteResult,
  key: string,
): Attribute {
  executeResult.events
  return findAttribute(
    executeResult.logs.length > 0
      ? executeResult.logs[0]?.events
      : executeResult.events,
    ABSTRACT_EVENT_MARKER,
    key,
  )
}
