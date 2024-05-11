'use client'
import { useChain } from '@cosmos-kit/react'
import { useCallback } from 'react'
import { Button } from '../../components/ui/button'
import { useToast } from '../../components/ui/use-toast'

function DisconnectButton({ chainName = 'neutron' }: { chainName?: string }) {
  const { disconnect, address } = useChain(chainName)

  const { toast } = useToast()

  const handleCopy = () => {
    if (!address) return
    navigator.clipboard.writeText(address)
    toast({ title: 'Address copied to clipboard' })
  }

  const handleDisconnect = useCallback(
    async function handleDisconnect() {
      await disconnect()
      toast({
        title: 'Wallet disconnected!',
      })
    },
    [disconnect],
  )

  return (
    <div className="flex">
      <Button
        className="rounded-tr-none rounded-br-none"
        variant="outline"
        onClick={handleCopy}
      >
        {address}
      </Button>
      <Button
        className="rounded-tl-none rounded-bl-none"
        onClick={handleDisconnect}
      >
        Disconnect Wallet
      </Button>
    </div>
  )
}

function ConnectButton({ chainName = 'neutron' }: { chainName?: string }) {
  const { connect } = useChain(chainName)

  const { toast } = useToast()

  const handleConnect = useCallback(
    async function handleConnect() {
      await connect()
      toast({
        title: 'Wallet connected!',
      })
    },
    [connect],
  )

  return <Button onClick={handleConnect}>Connect Wallet</Button>
}

export function WalletButton({
  chainName = 'neutron',
}: { chainName?: string }) {
  const { isWalletConnected: isConnected } = useChain(chainName)
  if (isConnected) {
    return <DisconnectButton chainName={chainName} />
  }
  return <ConnectButton chainName={chainName} />
}
