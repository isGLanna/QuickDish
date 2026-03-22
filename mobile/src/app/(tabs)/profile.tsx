import { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

export default function Profile() {
  const [user, setUser] = useState<{ name: string, surname: string, age: number, photo: string}> ({ name: 'Giordano', surname: 'Lanna', age: 22, photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: user.photo }} style={styles.avatar} />
      <ThemedText style={styles.p}>User: {user.name} {user.surname}</ThemedText>
      <ThemedText style={styles.p}>Age: {user.age}</ThemedText>
    </ThemedView>
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
    width: 200,
    height: 200,
    borderRadius: '50%',
  },
  p: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})