import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profile from './app/profile'
import Login from './app/login'
import DeliveryHome from './app/delivery-home'

export type RootstackParamList = {
  Login: undefined
  Profile: undefined
  DeliveryHome: undefined
}

const Stack = createNativeStackNavigator<RootstackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DeliveryHome" component={DeliveryHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
