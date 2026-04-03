import { Input } from '@atoms/input'
import { Button, ThemedText, ThemedView } from '@comp/index'
import { StyleSheet, View } from 'react-native'

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.content}>
        <View style={styles.field}>
          <ThemedText type="defaultSemiBold">Nome</ThemedText>
          <Input placeholder="Digite seu nome" />
        </View>

        <View style={styles.field}>
          <ThemedText type="defaultSemiBold">Sobrenome</ThemedText>
          <Input placeholder="Digite seu sobrenome" />
        </View>
        <View style={styles.submitField}>
          <Button text="Cancelar" type='neutral'/>
          <Button text="Salvar" />
        </View>
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  content: {
    borderRadius: 8,
    padding:8,
    gap: 4
  },
  field: {
    marginBottom: 8,
  },

  submitField:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8
  }
})