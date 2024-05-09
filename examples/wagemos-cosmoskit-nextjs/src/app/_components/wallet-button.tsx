'use client'
import { useChain } from '@cosmos-kit/react'
import { useCallback, useMemo } from 'react'
import { Button } from '../../components/ui/button'
import { useToast } from '../../components/ui/use-toast'

function DisconnectButton() {
  const { disconnect, address } = useChain('neutron')

  const { toast } = useToast()

  const handleCopy = useCallback(() => {
    if (!address) return
    navigator.clipboard.writeText(address)
    toast({ title: 'Address copied to clipboard' })
  }, [])

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

function ConnectButton() {
  const { connect } = useChain('neutron')

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

export function WalletButton() {
  const { isWalletConnected: isConnected } = useChain('neutron')

  return useMemo(() => {
    if (isConnected) {
      return <DisconnectButton />
    }
    return <ConnectButton />
  }, [isConnected])
}
