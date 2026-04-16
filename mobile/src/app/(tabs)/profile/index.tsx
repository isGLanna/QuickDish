import { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedView, ThemedText, ListItem } from '@comp/index'
import { ThemeContext } from '@/contexts/theme-color'
import { Header } from './_component/header'
import { useRouter } from 'expo-router'

export default function Profile() {
  const router = useRouter()
  const [user] = useState<{ id: string, name: string, surname: string, type: string, photo: string}> ({ id: '6fcfcab1-9220-89e9-a25e-62c8fff01538', name: 'Giordano', surname: 'Lanna', type: 'Cliente', photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  const currentTheme = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = currentTheme.color === 'light' ? 'dark' : 'light'
    currentTheme.setColor(newTheme)
  }

  return (
    <View style={styles.container}>
      <Header
        user={user}
        onEditPress={() => router.push('/profile/edit-profile')}
      />

      <View style={styles.sectionTitle}>
        <ThemedText type='defaultSemiBold'>Minha Conta</ThemedText>
      </View>

      <ThemedView style={styles.ul}>
        <ListItem
          style={styles.li}
          onPress={() => router.push('/profile/favorite-foods')}
        >
          Favoritos
        </ListItem>
        <ListItem
          style={styles.li}
          onPress={() => router.push('/driver-map')}
          >
          Ir para mapa de entregas
        </ListItem>
        <ListItem style={styles.li} onPress={toggleTheme}>Tema de cor</ListItem>
        <ListItem
          style={styles.li}
          onPress={() => router.push('/profile/settings')}
        >
          Configurações
        </ListItem>
        <ListItem style={styles.li}>Termos de privacidade</ListItem>
        <ListItem style={[styles.li, styles.liLast]}>Sair da conta</ListItem>
      </ThemedView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 12,
    flexDirection: 'column',
    gap: 10,
  },

  sectionTitle: {
    paddingHorizontal: 8,
    marginTop: 4,
  },

  ul: {
    flex: 1,
    borderWidth: 1,
    marginBottom: 16 + 50,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    overflow: 'hidden',
  },

  li: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  liLast: {
    borderBottomWidth: 0,
  },
})