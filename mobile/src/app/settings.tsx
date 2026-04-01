import { ScrollView, StyleSheet, View } from 'react-native'
import { ThemedText } from '@comp/themed-text'
import { ThemedView } from '@comp/themed-view'
import { ListItem } from '@comp/list-item'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme-color'

export default function SettingsScreen() {
  const currentTheme = useContext(ThemeContext)

  const toggleTheme = () => {
    const nextTheme = currentTheme.color === 'light' ? 'dark' : 'light'
    currentTheme.setColor(nextTheme)
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <ThemedView style={styles.section}>
        <ThemedText type='title'>Configurações</ThemedText>
        <ThemedText type='defaultRegular'>Gerencie sua conta, preferências e privacidade.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type='defaultSemiBold'>Conta</ThemedText>
        <ListItem style={styles.item}>Editar perfil</ListItem>
        <ListItem style={styles.item}>Endereços salvos</ListItem>
        <ListItem style={styles.item}>Métodos de pagamento</ListItem>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type='defaultSemiBold'>Aplicativo</ThemedText>
        <ListItem style={styles.item} onPress={toggleTheme}>Alternar tema</ListItem>
        <ListItem style={styles.item}>Idioma</ListItem>
        <ListItem style={styles.item}>Notificações</ListItem>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type='defaultSemiBold'>Privacidade e Suporte</ThemedText>
        <ListItem style={styles.item}>Política de privacidade</ListItem>
        <ListItem style={styles.item}>Termos de uso</ListItem>
        <ListItem style={styles.itemDanger}>Sair da conta</ListItem>
      </ThemedView>

      <View style={styles.spacer} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    gap: 12,
  },

  section: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },

  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  },

  itemDanger: {
    paddingVertical: 14,
    justifyContent: 'center',
  },

  spacer: {
    height: 20,
  },
})
