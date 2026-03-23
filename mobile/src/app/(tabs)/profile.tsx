import { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import { ThemedView } from '@/components/themed-view'
import { ThemedBackground } from '@comp/themed-background'
import { ThemedText } from '@comp/themed-text'

export default function Profile() {
  const [user, setUser] = useState<{ name: string, surname: string, type: string, photo: string}> ({ name: 'Giordano', surname: 'Lanna', type: 'Cliente', photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  return (
    <ThemedBackground style={styles.background}>
      <ThemedView style={styles.container}>

        <ThemedView style={styles.header}>
          <Image source={{ uri: user.photo }} style={styles.avatar} />
          <ThemedView style={styles.description}>
            <ThemedText type='defaultSemiBold'>{user.name} {user.surname}</ThemedText>
            <ThemedText>Tipo: {user.type}</ThemedText>
          </ThemedView>
        </ThemedView>

      </ThemedView>
    </ThemedBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 2,
    borderRadius: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },

  description: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  }
})