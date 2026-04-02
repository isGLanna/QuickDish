import { ThemedText, ThemedView, Button, VerticalLine } from '@comp/index'
import { StyleSheet, View } from 'react-native'
import { Image } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'

interface HeaderProps {
  user: { name: string, surname: string, type: string, photo: string }
  onEditPress?: () => void
}

export function Header({ user, onEditPress }: HeaderProps) {
  return (
    <ThemedView style={styles.container}>
      <Button
        style={styles.editButton}
        accessibilityRole='button'
        accessibilityLabel='Editar perfil'
        onPress={onEditPress}
      >
        <Icon name="edit" size={16} color="#fff" />
      </Button>

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
          <ThemedText type='defaultSemiBold'>Avaliações</ThemedText>
          <ThemedText type='defaultRegular'>0 avaliações</ThemedText>
        </Button>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    borderRadius: 16,
    borderWidth: 1,
    borderBottomWidth: 1,
    padding: 8,
  },

  editButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
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
    borderRadius: 16,
    alignSelf: 'center',
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBlock: 4,
  },

  card: {
    flexDirection: 'column',
    width: '45%',
    gap: 4,
  }
})