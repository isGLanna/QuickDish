import { Tabs } from 'expo-router'
import React from 'react'

import { HapticTab } from '@/components/haptic-tab'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { Colors } from '@/styles/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { StyleSheet, useWindowDimensions, View, Text } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { width } = useWindowDimensions()

  const isMobile = width < 720
  const direction = isMobile ? 'column' : 'row'
  const buttonStyle = isMobile ? styles.buttonMobile : styles.button

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={[buttonStyle, { flexDirection: direction }]}>
              <IconSymbol size={24} name="house.fill" color={color} />

              {!isMobile && (
                <Text style={{ color: '#fff', marginLeft: 5 }}>
                  Início
                </Text>
              )}

              {focused && <View style={styles.selected} />}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={[buttonStyle, { flexDirection: direction }]}>
              <IconSymbol size={24} name="person.fill" color={color} />

              {!isMobile && (
                <Text style={{ color: '#fff', marginLeft: 5 }}>
                  Perfil
                </Text>
              )}

              {focused && <View style={styles.selected} />}
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#2e1d0abe',
    height: 50,
    maxWidth: 720,
    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#eba947',
    alignSelf: 'center',
    marginInline: 'auto',
    elevation: 0,
    shadowColor: 'transparent',
  },

  button: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBlock: 'auto',
    borderRadius: 50,
    overflow: 'hidden',
  },

  buttonMobile: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBlock: 'auto',
    borderRadius: 50,
    overflow: 'hidden',
  },

  selected: {
    position: 'absolute',
    left: -5,
    right: -5,
    top: 0,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#ffffff20',
  },
})