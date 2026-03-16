import { Stack } from 'expo-router'
import { useState } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'

export default function Profile() {
  const [user, setUser] = useState<{ name: string, surname: string, age: number, photo: string}> ({ name: 'Giordano', surname: 'Lanna', age: 22, photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.photo }} style={styles.avatar} />
      <Text style={styles.p}>User: {user.name} {user.surname}</Text>
      <Text style={styles.p}>Age: {user.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  p: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})