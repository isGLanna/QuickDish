import { ThemedView } from '@comp/themed-view'
import { ThemedText } from '@comp/themed-text'
import { StyleSheet, View } from 'react-native'
import { Image } from 'react-native'
import { Button } from '@comp/button'
import { VerticalLine } from '@comp/vertical-line'

// criar props para o componente, para receber os dados do usuário
interface HeaderProps {
  user: { name: string, surname: string, type: string, photo: string }
}

export function Header({ user }: HeaderProps) {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.photo }} style={styles.avatar} />
        <ThemedView style={styles.description}>
          <ThemedText type='defaultSemiBold'>{user.name} {user.surname}</ThemedText>
          <ThemedText>Tipo: {user.type}</ThemedText>
        </ThemedView>
      </View>

      <View style={styles.stats}>
        <Button style={styles.card}>
          <ThemedText type='defaultSemiBold'>Meus Pedidos</ThemedText>
          <ThemedText type='defaultRegular'>8 pedidos</ThemedText>
        </Button>
        <VerticalLine />
        <Button style={styles.card}>
          <ThemedText type='defaultSemiBold'>Reclamações</ThemedText>
          <ThemedText type='defaultRegular'>0 reclamações</ThemedText>
        </Button>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 50,
    borderWidth: 1,
    borderBottomWidth: 1,
    padding: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 16,

  },

  description: {
    height: 100,
    justifyContent: 'center',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBlock: 16,
  },

  card: {
    flexDirection: 'column',
    gap: 4,
  }
})