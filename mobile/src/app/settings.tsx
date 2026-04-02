import { ScrollView, StyleSheet, View } from 'react-native'
import { ThemedText, ThemedView, ListItem } from '@comp/index'
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

      <ThemedText style={styles.title} type='subtitle'>Conta</ThemedText>
      <ThemedView style={styles.section}>
        <ListItem style={styles.item}>Editar perfil</ListItem>
        <ListItem style={styles.item}>Endereços salvos</ListItem>
        <ListItem style={[styles.item, styles.liLast]}>Métodos de pagamento</ListItem>
      </ThemedView>

      <ThemedText style={styles.title} type='subtitle'>Aplicativo</ThemedText>
      <ThemedView style={styles.section}>
        <ListItem style={styles.item} onPress={toggleTheme}>Alternar tema</ListItem>
        <ListItem style={styles.item}>Idioma</ListItem>
        <ListItem style={[styles.item, styles.liLast]}>Notificações</ListItem>
      </ThemedView>

      <ThemedText style={styles.title} type='subtitle'>Privacidade e Suporte</ThemedText>
      <ThemedView style={styles.section}>
        <ListItem style={styles.item}>Política de privacidade</ListItem>
        <ListItem style={styles.item}>Termos de uso</ListItem>
        <ListItem style={[styles.item, styles.liLast]}>Sair da conta</ListItem>
      </ThemedView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 8,
    gap: 12,
  },

  title: {
    paddingHorizontal: 16,
  },

  section: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },

  item: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  },

  spacer: {
    height: 20,
  },

  liLast: {
    borderBottomWidth: 0,
  },
})
