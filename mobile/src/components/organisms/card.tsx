import { Image, View } from 'react-native'
import { PressableItem, ThemedText } from '@comp/index'

import { StyleSheet } from 'react-native'
import { ThemedTextSkeleton } from '@/components/atoms/skeleton/themed-text'
import { ImageSkeleton } from '@/components/atoms/skeleton/image'

interface CardProps {
  id: number
  name?: string
  price?: number
  image: string
  rating?: number
}

export function Card({ item }: { item: CardProps }) {
  return (
    <PressableItem style={ styles.ContentItems }>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <ThemedText style={{ fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.name}</ThemedText>
        {item.price != undefined && item.rating != undefined && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <ThemedText>{'R$' + (item.price / 100).toFixed(2)}</ThemedText>
          <ThemedText>{`${item.rating} ⭐`}</ThemedText>
        </View>)
        }
      </View>
    </PressableItem>
  )
}

export function CardSkeleton() {
  return (
    <PressableItem style={ styles.ContentItems }>
      <ImageSkeleton style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <ThemedTextSkeleton />
        <View>
          <ThemedTextSkeleton style={{ flex: 1 }}/>
        </View>
      </View>
    </PressableItem>
  )
}

const styles = StyleSheet.create({
  ContentItems: {
    flex: 1,
    minWidth: 160,
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