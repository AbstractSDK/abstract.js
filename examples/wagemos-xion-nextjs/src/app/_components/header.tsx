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
          <button
            onClick={() => setDevMode(!devMode)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors
              ${
                devMode
                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            type={'button'}
          >
            {devMode ? 'Dev Mode On' : 'Dev Mode'}
          </button>
        </div>
      </div>
      <div className={'flex justify-end'}>
        <WalletButton />
      </div>
    </header>
  )
}
