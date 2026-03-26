import { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import { ThemedView } from '@comp/themed-view'
import { ThemedText } from '@comp/themed-text'
import { ListItem } from '@comp/list-Item'

export default function Profile() {
  const [user, setUser] = useState<{ name: string, surname: string, type: string, photo: string}> ({ name: 'Giordano', surname: 'Lanna', type: 'Cliente', photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  return (
      <ThemedView style={styles.container}>

        <ThemedView style={styles.header}>
          <Image source={{ uri: user.photo }} style={styles.avatar} />
          <ThemedView style={styles.description}>
            <ThemedText type='defaultSemiBold'>{user.name} {user.surname}</ThemedText>
            <ThemedText>Tipo: {user.type}</ThemedText>
          </ThemedView>
        </ThemedView>
        
        <ThemedView style={styles.ul}>
          <ListItem style={styles.li}>Meus pedidos</ListItem>
          <ListItem style={styles.li}>Favoritos</ListItem>
          <ListItem style={styles.li}>Configurações</ListItem>
          <ListItem style={[styles.li, { borderColor: '#ff4444' }]}>Sair</ListItem>
        </ThemedView>

      </ThemedView>
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
    flexDirection: 'column',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  ul: {
    flex: 1,
    marginTop: 16,
    borderRadius: 8,
    padding: 0,
  },

  li: {
    paddingBlock: 8,
    marginInline: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  }
})