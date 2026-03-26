import { Image, View } from 'react-native'
import { ThemedText } from '@comp/themed-text'
import { SelectableItem } from '@comp/selectable-item'

import { StyleSheet } from 'react-native'

interface CardProps {
  id: number
  name?: string
  price?: number
  image: string
  rating?: number
}

export function Card({ item }: { item: CardProps }) {
  return (
    <SelectableItem style={ styles.ContentItems }>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <ThemedText style={{ fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.name}</ThemedText>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <ThemedText>{item.price ? 'R$' + (item.price / 100).toFixed(2) : ''}</ThemedText>
          <ThemedText>{item.rating ? `${item.rating} ⭐` : ''}</ThemedText>
        </View>
      </View>
    </SelectableItem>
  )
}

const styles = StyleSheet.create({
  ContentItems: {
    flex: 1,
    minWidth: 150,
    margin: 4,
    padding: 2,
    borderWidth: 1,
    borderRadius: 8,
  },

  descriptionItem: {
    flex: 1,
    marginTop: 4,
  }
})