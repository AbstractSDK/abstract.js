'use client'

import { grazProvider } from '@abstract-money/provider-graz'
import { xionProvider } from '@abstract-money/provider-xion'
import {
  AbstractProvider as Lib_AbstractProvider,
  createConfig,
} from '@abstract-money/react'
import {
  useAbstraxionAccount,
  useAbstraxionSigningClient,
} from '@burnt-labs/abstraxion'
import { FC, PropsWithChildren, useMemo } from 'react'
import { useDevMode } from './dev-mode'

/**
 * Provides the Abstract context to the application.
 * @param children
 * @constructor
 */
export const AbstractProvider: FC<PropsWithChildren> = ({ children }) => {
  const { devMode } = useDevMode()

  const grazXionProvider = {
    useCosmWasmClient: (args) => {
      return grazProvider.useCosmWasmClient(args)
    },
    useSigningCosmWasmClient: (args) => {
      const grazSigningClient = grazProvider.useSigningCosmWasmClient(args)
      // TODO: why does this not work?
      // const xionSigningClient = xionProvider.useSigningCosmWasmClient(args)
      const { client: xionSigningClient } = useAbstraxionSigningClient()

      return devMode ? grazSigningClient : xionSigningClient
    },
    useSenderAddress: (args) => {
      const grazSenderAddress = grazProvider.useSenderAddress(args)
      // TODO: why does this not work?
      // const xionSenderAddress = xionProvider.useSenderAddress(args)
      const xionSenderAddress = useAbstraxionAccount().data?.bech32Address

      console.log('xionSenderAddress', xionSenderAddress)

      return devMode ? grazSenderAddress : xionSenderAddress
    },
  } satisfies typeof xionProvider

  // Use the graz provider for the normal cosmwasm client retrievals

  const abstractConfig = createConfig({
    provider: grazXionProvider,
    apiUrl: 'https://believathon.api.abstract.money/',
  })

  return (
    <Lib_AbstractProvider config={abstractConfig}>
      {children}
    </Lib_AbstractProvider>
  )
}
