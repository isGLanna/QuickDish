import { StyleSheet } from 'react-native'
import { ThemedText, ThemedView, PressableItem } from '@comp/index'
import { useThemeColor } from '@/hooks/use-theme-color'
import { useRouter } from 'expo-router'
import Icon from '@expo/vector-icons/Fontisto'

export function Header({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const color  = useThemeColor('background')

  return (
    <ThemedView style={[styles.header, { backgroundColor: color }]}>
      <PressableItem style={{ borderWidth: 0, backgroundColor: 'transparent' }}
        accessibilityRole='button'
        accessibilityLabel='Voltar para a tela anterior'
        onPressOut={() => router.back()}>
        <Icon name="angle-left" size={16} color="#fff" />
      </PressableItem>

      <ThemedText style={styles.subtitle} type="subtitle">
        {children}
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 40,
    paddingInline: 16,
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  subtitle: {
    paddingInline: 16,
  }
})