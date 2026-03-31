import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedView } from '@comp/themed-view'
import { ListItem } from '@comp/list-item'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme-color'
import { Header } from '@comp/organisms/profile/header'
import { Colors } from '@/styles/theme'

export default function Profile() {
  const [user] = useState<{ name: string, surname: string, type: string, photo: string}> ({ name: 'Giordano', surname: 'Lanna', type: 'Cliente', photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  const currentTheme = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = currentTheme.color === 'light' ? 'dark' : 'light'
    currentTheme.setColor(newTheme)
  }

  return (
    <View style={styles.container}>
      <Header user={user} />

      <ThemedView style={styles.ul}>
        <ListItem style={styles.li}>Meus pedidos</ListItem>
        <ListItem style={styles.li}>Favoritos</ListItem>
        <ListItem style={styles.li}>Configurações</ListItem>
        <ListItem style={styles.li} onPress={toggleTheme}>Tema de cor</ListItem>
        <ListItem style={[styles.li, {borderColor: Colors.red._400}]}>Sair</ListItem>
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
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
  }
})