const ANS_CHAIN_SEPARATOR = '>'
const ANS_PROTOCOL_SEPARATOR = '/'

/**
 * A class representing an Asset in Abstract Name Service (ANS)
 * Model: [chain]>[symbol]
 * If the asset has passed through multiple chains, the most recent chain is first.
 * So, "dao" that went through osmosis and then IBC-ed to terra would be:
 * osmosis>juno>dao (ON TERRA)
 *
 * This is because on juno, it is juno>dao. On osmosis, it is juno>dao.
 * From osmosis -> terra, it is osmosis>juno>dao
 */
export class AnsAsset {
  private ansName: string
  constructor(ansName: string) {
    this.ansName = ansName
  }

  /**
   * Returns the protocol of the asset.
   * astroport/x,y -> astroport
   */
  get sourceProtocol(): string {
    // TODO: remove this hack
    return this.ansName.split(ANS_PROTOCOL_SEPARATOR)[0] as string
  }

  get hasProtocol(): boolean {
    return this.ansName.includes(ANS_PROTOCOL_SEPARATOR)
  }

  /**
   * Returns the lowercased name of the asset without the protocol.
   * astroport/x,y -> x,y
   */
  get withoutProtocol(): string {
    const split = this.ansName.split(ANS_PROTOCOL_SEPARATOR)
    return split.slice(1).join(ANS_PROTOCOL_SEPARATOR).toLowerCase()
  }

  get sourceChain(): string {
    // TODO: remove this hack
    return this.ansName.split(ANS_CHAIN_SEPARATOR)[0] as string
  }

  /**
   * Returns the lowercased symbol of the asset.
   * osmosis>juno>dao -> juno>dao
   */
  get symbol(): string {
    const split = this.ansName.split(ANS_CHAIN_SEPARATOR)
    return split.slice(1).join(ANS_CHAIN_SEPARATOR).toLowerCase()
  }
}
