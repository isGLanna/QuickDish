import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Header } from '@comp/index'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import 'react-native-reanimated'

import { Colors } from '@/styles/theme'
import { AppThemeProvider, useAppTheme } from '@/contexts/theme-color'

export const unstable_settings = {
  anchor: 'home',
};

function RootNavigationLayout() {
  const { color: theme } = useAppTheme()

  const navigationTheme = theme === 'dark'
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
          <Stack.Screen name='driver-map' options={{ headerShown: false }} />
        </Stack>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <RootNavigationLayout />
    </AppThemeProvider>
  )
}