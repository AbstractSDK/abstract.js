import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DevModeStore {
  devMode: boolean
  setDevMode: (devMode: boolean) => void
}
// Optional: If you want to persist the devMode state across page refreshes

export const useDevMode = create(
  persist<DevModeStore>(
    (set) => ({
      devMode: true,
      setDevMode: (devMode) => set({ devMode }),
    }),
    {
      name: 'dev-mode-storage',
    },
  ),
)
