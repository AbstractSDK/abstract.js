'use client'
import {
  WalletType,
  getAvailableWallets,
  useAccount,
  useConnect,
  useDisconnect,
} from 'graz'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog'
import { useToast } from '~/components/ui/use-toast'

export function ConnectButton() {
  const wallets = getAvailableWallets()
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const { isConnected, isConnecting } = useAccount({
    chainId: 'neutron-1',
    onConnect: ({ walletType, chains }) => {
      toast({
        title: `Wallet connected! using ${walletType} to ${chains.map(
          (item) => item.chainId,
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
  const { disconnect } = useDisconnect()

  const handleConnect = (wallet: WalletType) => {
    connect({ walletType: wallet, chainId: 'neutron-1' })
    setIsOpen(false)
  }
  return (
    <>
      <Button
        onClick={() => {
          if (isConnected) return disconnect()
          setIsOpen(true)
        }}
      >
        {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
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
