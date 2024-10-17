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
 * @deprecated
 */
export class AnsAssetEntry {
  private readonly _ansName: string
  constructor(ansName: string) {
    this._ansName = ansName
  }

  public validate(): AnsAssetEntry {
    const split = this._ansName.split(ANS_CHAIN_SEPARATOR)
    if (split.length < 2) {
      throw new Error(`Invalid ANS name, missing chain: ${this._ansName}`)
    }
    return this
  }

  /**
   * Returns the protocol of the asset.
   * astroport/x,y -> astroport
   */
  get sourceProtocol(): string {
    return this._ansName.split(ANS_PROTOCOL_SEPARATOR)[0]!
  }

  /**
   * Get the ans name.
   */
  get ansName(): string {
    return this._ansName
  }

  get hasProtocol(): boolean {
    return this._ansName.includes(ANS_PROTOCOL_SEPARATOR)
  }

  /**
   * Returns the lowercased name of the asset without the protocol.
   * astroport/x,y -> x,y
   */
  get withoutProtocol(): string {
    const split = this._ansName.split(ANS_PROTOCOL_SEPARATOR)
    return split.slice(1).join(ANS_PROTOCOL_SEPARATOR).toLowerCase()
  }

  /**
   * Returns the source chain of the asset.
   * osmosis>juno>dao -> osmosis
   */
  get sourceChain(): string {
    return this._ansName.split(ANS_CHAIN_SEPARATOR)[0]!
  }

  /**
   * Returns the lowercased symbol of the asset. Keep in mind that this method maintains the
   * chain information. So, if the asset has passed through multiple chains, the most recent
   * chain is first.
   *
   * osmosis>juno>dao -> juno>dao
   * juno>dao -> dao
   * @unstable
   */
  get symbol(): string {
    const split = this._ansName.split(ANS_CHAIN_SEPARATOR)
    return split.slice(1).join(ANS_CHAIN_SEPARATOR).toLowerCase()
  }
}
