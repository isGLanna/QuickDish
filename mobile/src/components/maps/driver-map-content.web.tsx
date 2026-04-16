import { StyleSheet, View } from 'react-native'
import { ThemedText } from '../atoms/themed-text'

export default function DriverMapContent() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Mapa indisponivel na web</ThemedText>
      <ThemedText style={styles.description}>Abra esta tela no Android ou iOS para visualizar o mapa.</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    opacity: 0.8,
  },
})
