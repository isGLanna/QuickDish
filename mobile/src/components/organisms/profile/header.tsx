import { ThemedView } from '@comp/themed-view'
import { ThemedText } from '@comp/themed-text'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

// criar props para o componente, para receber os dados do usuário
interface HeaderProps {
  user: { name: string, surname: string, type: string, photo: string }
}

export function Header({ user }: HeaderProps) {
  return (
    <ThemedView style={styles.header}>
      <Image source={{ uri: user.photo }} style={styles.avatar} />
      <ThemedView style={styles.description}>
        <ThemedText type='defaultSemiBold'>{user.name} {user.surname}</ThemedText>
        <ThemedText>Tipo: {user.type}</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 16,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 100,
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

})