import { Switch } from '@radix-ui/react-switch'
import { Label } from '../../components/ui/label'
import { useDevMode } from '../_providers/dev-mode'
import { WalletButton } from './wallet-button'

export const Header = () => {
  const { devMode, setDevMode } = useDevMode()

  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left section (empty for now) */}
        <div className="w-32" />

        {/* Center section */}
        <h1 className="text-2xl font-semibold">Wagemos with Graz</h1>

        {/* Right section */}
        <div className="w-32 flex items-center justify-end gap-2">
          <div className="flex items-center space-x-2">
            <Switch
              id="dev-mode"
              checked={devMode}
              onCheckedChange={setDevMode}
            />
            <Label
              htmlFor="dev-mode"
              className="text-sm font-medium leading-none"
            >
              Dev Mode
            </Label>
          </div>
        </div>
        <div className={'flex justify-end'}>
          <WalletButton />
        </div>
      </div>
    </header>
  )
}
