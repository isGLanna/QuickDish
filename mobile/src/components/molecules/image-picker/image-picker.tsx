import { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ThemedText, Touchable } from '@comp/index'
import { Colors } from '@/styles/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MenuOption } from './menu-option'

export function ImagePickerComponent() {
  const [image, setImage] = useState<string | null>(null)
  const [showMenu, setShowMenu] = useState(false)


  return (
    <View>
      <Touchable style={ styles.upload } onPress={() => setShowMenu(prev => !prev)}>
      {image === null ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="upload" size={20} color={Colors.gray._400} />
          <ThemedText>Selecionar imagem</ThemedText>
        </View>
        ) :
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={{ uri: image }} style={{ flex: 1, height: '100%', aspectRatio: 1 }} />
        </View>
      }
      </Touchable>
      {showMenu && (
        <MenuOption onClose={() => setShowMenu(false)} setImage={setImage} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  upload: {
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    height: 200,
    width: '100%',
  },
})