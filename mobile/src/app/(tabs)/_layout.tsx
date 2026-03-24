import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/styles/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: styles.tabBar,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ focused, color }) => (
          <View>
            <IconSymbol size={28} name="house.fill" color={color}/>
            {focused && (<View style={styles.selected} />)}
          </View>
        ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused, color }) => (
            <View>
              <IconSymbol size={28} name="paperplane.fill" color={color} />
              {focused && (<View style={styles.selected} />)}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused, color }) => (
            <View>
              <IconSymbol size={28} name="person.fill" color={color} />
              {focused && (<View style={styles.selected} />)}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#2e1d0abe',
    height: 50,
    maxWidth: 720,
    marginBottom: 9,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#eba947',
    alignSelf: 'center',
    marginInline: 'auto',
    elevation: 0,
    shadowColor: 'transparent',
  },

  selected: {
    position: 'absolute',
    width: 100,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#ffffff20',
    alignSelf: 'center',
    justifyContent: 'center',
  }
})
