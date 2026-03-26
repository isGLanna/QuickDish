import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import 'react-native-reanimated'
import { useContext } from 'react'

import { Colors } from '@/styles/theme'

export const unstable_settings = {
  anchor: 'home',
};

function RootNavigationLayout() {
  const { color: theme } = useContext(ThemeContext).color

  const navigationTheme = theme === 'light'
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: Colors.dark.background,
          card: Colors.dark.background,
        },
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: Colors.light.background,
          card: Colors.light.background,
        },
      };

  const appBackground = Colors[theme].background;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: appBackground }} edges={['top', 'bottom']}>
      <ThemeProvider value={navigationTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
          <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </SafeAreaView>
  )
}
