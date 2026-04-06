import * as ImagePicker from 'expo-image-picker'
import { ThemedText, ThemedView, Touchable } from '@comp/index'
import { View, StyleSheet } from 'react-native'
import { Colors } from '@/styles/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator'

interface MenuOptionProps {
  onClose: () => void
  setImage: (uri: string) => void
}

export function MenuOption({ onClose, setImage }: MenuOptionProps) {
  const processingImage = async (uri: string) => {
    const context = ImageManipulator.manipulate(uri)
    context.resize({ width: 720, height: 720 })

    const image = await context.renderAsync()

    const result = await image.saveAsync({
      compress: 0.6, format: SaveFormat.JPEG
    })

    setImage(result.uri)
    onClose()
  }

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(!permissionResult.granted) {
      alert('Permissão para acessar a galeria é necessária!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.6,
    })

    if (result.canceled) return
    
    processingImage(result.assets[0].uri)
  }

  const pickCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    if(!permissionResult.granted) {
      alert('Permissão para acessar a câmera é necessária!')
      return
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.6,
    })

    if(result.canceled)
      return
    
    processingImage(result.assets[0].uri)
  }

  return (
    <ThemedView style={ styles.modal }>
      <ThemedText type='defaultSemiBold'>Selecione uma opção</ThemedText>

      <View style={ styles.options }>
        <Touchable style={styles.icon} onPress={pickImage}>
          <Icon name="photo-library" size={24} color={Colors.gray._500} />
        </Touchable>
        <Touchable style={styles.icon} onPress={pickCamera}>
          <Icon name="camera-alt" size={24} color={Colors.gray._500} />
        </Touchable>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -125 }, { translateY: -50 }],
    width: 250,
    alignSelf: 'center',
    padding: 8,
    gap: 16,
    borderWidth: 1,
    borderRadius: 12,
  },

  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },

  icon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    backgroundColor: Colors.gray._300,
  }
})