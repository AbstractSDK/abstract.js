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

function DisconnectButton() {
  const { disconnect } = useDisconnect()
  const { data: account } = useAccount({
    chainId: 'osmosis-1',
  })

  const { toast } = useToast()

  const handleCopy = () => {
    if (!account) return
    navigator.clipboard.writeText(account?.bech32Address)
    toast({ title: 'Address copied to clipboard' })
  }

  return (
    <div className="flex">
      <Button
        className="rounded-tr-none rounded-br-none"
        variant="outline"
        onClick={handleCopy}
      >
        {account?.bech32Address}
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

  const { isConnecting } = useAccount({
    chainId: 'osmosis-1',
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

  const handleConnect = (wallet: WalletType) => {
    connect({ walletType: wallet, chainId: 'osmosis-1' })
    setIsOpen(false)
  }
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Connect Wallet</Button>
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
  const { isConnected } = useAccount({
    chainId: ['neutron-1', 'osmosis-1'],
  })
  if (isConnected) {
    return <DisconnectButton />
  }
  return <ConnectButton />
}
