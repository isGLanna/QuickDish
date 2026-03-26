import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'

type ThemeContextValue = {
  color: 'light' | 'dark'
  setColor: (color: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  color: 'light',
  setColor: () => {}
})

export function AppThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme()
  const [color, setColor] = useState<'light' | 'dark'>(systemScheme === 'dark' ? 'dark' : 'light')

  const value = useMemo(() => ({
    color,
    setColor
  }), [color])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useAppTheme() {
  return useContext(ThemeContext)
}