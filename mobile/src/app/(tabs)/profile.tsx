import { use, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { ThemedView } from '@comp/themed-view'
import { ThemedText } from '@comp/themed-text'
import { ListItem } from '@comp/list-item'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme-color'

export default function Profile() {
  const [user] = useState<{ name: string, surname: string, type: string, photo: string}> ({ name: 'Giordano', surname: 'Lanna', type: 'Cliente', photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  const currentTheme = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = currentTheme.color === 'light' ? 'dark' : 'light'
    currentTheme.setColor(newTheme)
  }

  return (
    <View style={styles.container}>

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
        <ListItem style={styles.li} onPress={toggleTheme}>Tema de cor</ListItem>
        <ListItem style={styles.li}>Sair</ListItem>
      </ThemedView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    margin: 8,
    borderRadius: 8,
    flexDirection: 'column',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 16,
    borderBottomWidth: 1,
    paddingBlock: 8,
  },

  description: {
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
    paddingBlock: 16,
    marginInline: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  }
})