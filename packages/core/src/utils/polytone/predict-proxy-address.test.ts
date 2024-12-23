import { describe, expect, it } from 'vitest'
import { getInstantiate2Address } from '../module-factory'
import {
  generateSha512Salt,
  predictPolytoneProxyAddress,
} from './predict-proxy-address'

describe('predictPolytoneProxyAddress', () => {
  // https://github.com/DA0-DA0/polytone/blob/f70440a35f12f97a9018849ca7e6d241a53582ce/cw-orch-state.json
  const neutronNoteAddress =
    'neutron1767kfqeglqyctuqsmvyzgjecs60lpqju2f590smxevk9duq5fhaqgk5eca'
  const neutronToOsmosisVoiceAddress =
    'osmo1vw02frqejfw2v2w7dy6ws35jp9743dwkxy0laalwsuvzzvkszz7s8d93yw'
  // https://celatone.osmosis.zone/osmosis-1/codes/127
  const osmosisProxyChecksum =
    '5094551145BCD256538775A0611CE9E88F8D7A182A06F082F901FFED9184BB5A'
  // The sender from the source chain
  const neutronSenderAddress =
    'neutron13vzaav9pdsnuccy9wjzauv205q4e70t8lwtvngsqhyqs3xdjlu0sglylyv'
  // From state of Voice contract
  const connectionIdFromVoice = 'connection-2338'
  // https://celatone.osmosis.zone/osmosis-1/contracts/osmo1fgdp4k54nmhuydwmgfzygm0fjyvaz0thz8rglctpl5lehe57tcyqqfy698
  const expectedAddress =
    'osmo1fgdp4k54nmhuydwmgfzygm0fjyvaz0thz8rglctpl5lehe57tcyqqfy698'

  it('returns the correct address with raw functions', async () => {
    const salt = generateSha512Salt(
      connectionIdFromVoice,
      `wasm.${neutronNoteAddress}`,
      neutronSenderAddress,
    )

    const result = await getInstantiate2Address(
      neutronToOsmosisVoiceAddress,
      osmosisProxyChecksum,
      salt,
    )

    // https://celatone.osmosis.zone/osmosis-1/contracts/osmo1fgdp4k54nmhuydwmgfzygm0fjyvaz0thz8rglctpl5lehe57tcyqqfy698
    expect(result).toBe(expectedAddress)
  })

  it('returns the correct address with full function', async () => {
    const result = await predictPolytoneProxyAddress({
      hostVoiceAddress: neutronToOsmosisVoiceAddress,
      hostProxyChecksum: osmosisProxyChecksum,
      hostVoiceConnectionId: connectionIdFromVoice,
      controllerNoteAddress: neutronNoteAddress,
      controllerSender: neutronSenderAddress,
    })

    expect(result).toBe(expectedAddress)
  })
})
