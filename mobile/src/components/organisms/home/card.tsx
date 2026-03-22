import { Image, Pressable, View } from 'react-native'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

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
      <ThemedView style={styles.descriptionItem}>
        <ThemedText style={{ fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.name}</ThemedText>
        <ThemedView style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <ThemedText>R${(item.price / 100).toFixed(2)}</ThemedText>
          <ThemedText>{item.rating} ⭐</ThemedText>
        </ThemedView>
      </ThemedView>
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