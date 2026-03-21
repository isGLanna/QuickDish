import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'

interface CardProps {
  id: number
  name: string
  price: number
  image: string
  rating: number
}

export function Card({ item }: { item: CardProps}) {
  return (
    <Pressable style={styles.ContentItems}>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <Text style={{ fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text>R${(item.price / 100).toFixed(2)}</Text>
          <Text>{item.rating} ⭐</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  ContentItems: {
    margin: 4,
    width: 175,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 4,
  },

  descriptionItem: {
    flex: 1,
    marginTop: 8,
  }
})