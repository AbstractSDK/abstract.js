'use client'
import {
  WalletType,
  getAvailableWallets,
  useAccount,
  useConnect,
  useDisconnect,
} from 'graz'
import { useState } from 'react'
import { Button } from '../../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog'
import { useToast } from '../../components/ui/use-toast'

import { useConfig } from '@abstract-money/react'
import {
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from '@burnt-labs/abstraxion'
import { CHAIN_IDS, ROUND_CHAIN_NAME } from '../_lib/constants'
import { useDevMode } from '../_providers/dev-mode'

function DisconnectButton() {
  const { disconnect: grazDisconnect } = useDisconnect()
  const { logout: xionDisconnect } = useAbstraxionSigningClient()
  const config = useConfig()
  const account = config.provider.useSenderAddress({
    chainName: ROUND_CHAIN_NAME,
  })

  const { toast } = useToast()

  const handleCopy = () => {
    if (!account) return
    navigator.clipboard.writeText(account)
    toast({ title: 'Address copied to clipboard' })
  }

  const disconnect = () => {
    grazDisconnect()
    xionDisconnect?.()
  }

  return (
    <div className="flex">
      <Button
        className="rounded-tr-none rounded-br-none"
        variant="outline"
        onClick={handleCopy}
      >
        {account}
      </Button>
      <Button
        className="rounded-tl-none rounded-bl-none"
        onClick={() => disconnect()}
      >
        Disconnect Wallet
      </Button>
    </div>
  )
}

function ConnectButton() {
  const wallets = getAvailableWallets()
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const { devMode } = useDevMode()
  const [modalShown, setShowModal] = useModal()

  const { isConnecting } = useAccount({
    chainId: CHAIN_IDS,
    multiChain: true,
    onConnect: ({ walletType, chains }) => {
      toast({
        title: `Wallet connected! using ${walletType} to ${chains.map(
          (item) => item?.chainId,
        )}`,
      })
    },
    onDisconnect: () => {
      toast({
        title: 'Wallet disconnected!',
      })
    },
  })

  const { connect } = useConnect()

  const handleConnect = (wallet: WalletType) => {
    connect({ walletType: wallet, chainId: CHAIN_IDS })
    setIsOpen(false)
  }
  return (
    <>
      <Button onClick={() => (devMode ? setIsOpen(true) : setShowModal(true))}>
        Connect Wallet
      </Button>
      <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect your wallet</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-2">
            {Object.entries(wallets).map(([key, enabled], i) => {
              if (enabled) {
                return (
                  <Button
                    disabled={isConnecting}
                    key={i}
                    onClick={() => handleConnect(key as WalletType)}
                  >
                    Connect {key}
                  </Button>
                )
              }
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export function WalletButton() {
  const config = useConfig()
  const account = config.provider.useSenderAddress({
    chainName: ROUND_CHAIN_NAME,
  })

  if (account) {
    return <DisconnectButton />
  }
  return <ConnectButton />
}
