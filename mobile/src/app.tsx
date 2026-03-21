import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profile from './app/(tabs)/profile'
import Login from './app/login'
import Home from './app/(tabs)/index'

export type RootstackParamList = {
  Login: undefined
  Profile: undefined
  Home: undefined
}

const Stack = createNativeStackNavigator<RootstackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
