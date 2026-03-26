import { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { useColorScheme } from 'react-native'

type ThemeContextValue = {
  color: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextValue>({
  color: 'light',
})

export function AppThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme()
  const color: 'light' | 'dark' = systemScheme === 'dark' ? 'dark' : 'light'

  const value = useMemo(() => ({ color }), [color])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useAppTheme() {
  return useContext(ThemeContext)
}