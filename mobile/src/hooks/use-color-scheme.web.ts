import { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'

export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)
  }, []);

  const colorScheme = useColorScheme()

  if (hasHydrated) {
    return colorScheme
  }

  return 'dark'
}
