import { StyleSheet, Text, View } from 'react-native'

export default function DriverMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa indisponivel na web</Text>
      <Text style={styles.description}>Abra esta tela no Android ou iOS para visualizar o mapa.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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