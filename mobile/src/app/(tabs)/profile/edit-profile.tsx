import { Input } from '@atoms/input'
import { Button, ThemedText, ThemedView, VerticalLine, Touchable } from '@comp/index'
import { Colors } from '@/styles/theme'
import Icon from 'react-native-vector-icons/Feather'
import { StyleSheet, View } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import { ImagePickerComponent } from '@molecules/image-picker/image-picker'

export default function EditProfile() {
  const [user, setUser] = useState<{ id: string, name: string, surname: string, type: string, photo: string}> ({ id: '6fcfcab1-9220-89e9-a25e-62c8fff01538', name: 'Giordano', surname: 'Lanna', type: 'Cliente', photo: "https://avatars.githubusercontent.com/u/167474669?v=4"})

  return (
    <View style={styles.container}>
      <ThemedView style={styles.content}>
        <View style={styles.field}>
          <ThemedText type="defaultSemiBold">Nome</ThemedText>
          <ThemedView style={styles.inputLine}>
            <Icon name="user" size={20} color={Colors.gray._400} />
            <VerticalLine />
            <Input style={styles.input} value={user.name} onChangeText={(text) => setUser(prev => ({...prev, name: text}))}/>
          </ThemedView>
        </View>

        <View style={styles.field}>
          <ThemedText type="defaultSemiBold">Sobrenome</ThemedText>
          <ThemedView style={styles.inputLine}>
            <Icon name="user" size={20} color={Colors.gray._400} />
            <VerticalLine />
            <Input style={styles.input} value={user.surname} onChangeText={(text) => setUser(prev => ({ ...prev, surname: text }))}/>
          </ThemedView>
        </View>

        <View style={styles.field}>
          <ThemedText type="defaultSemiBold">Upload de imagem</ThemedText>
          <ImagePickerComponent />
        </View>

        <View style={styles.submitField}>
          <Button text="Cancelar" type='neutral' onPress={() => router.back()}/>
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
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    gap: 4,
  },
  
  field: {
    marginBottom: 8,
  },

  submitField:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8
  },

  inputLine: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    paddingInline: 8,
    gap: 2,
  },

  input: {
    flex: 1,
    borderWidth: 0,
  },
})