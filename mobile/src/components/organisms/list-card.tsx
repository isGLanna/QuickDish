import { Image, View } from 'react-native'
import { PressableItem, ThemedText, ThemedView } from '@comp/index'

import { StyleSheet } from 'react-native'
import { ThemedTextSkeleton } from '@atoms/skeleton/themed-text'
import { ImageSkeleton } from '@atoms/skeleton/image'
import type { FoodReview } from '@/types/food-review'

export function ListCard({ item }: { item: FoodReview }) {
  return (
    <PressableItem style={ styles.ContentItems }>
      <Image source={{ uri: item.foodImage }} style={{ width: 100, height: 100, borderRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <ThemedText style={{ fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.foodName}</ThemedText>
          <ThemedText>{`${item.rating} ⭐`}</ThemedText>
        </View>

        {item.comment != undefined && (
        <View style={{ justifyContent: 'space-between', width: '100%' }}>
          <ThemedText>{item.comment}</ThemedText>
        </View>
      )}
      </View>
    </PressableItem>
  )
}

export function ListCardSkeleton() {
  return (
    <ThemedView style={ styles.ContentItems }>
      <ImageSkeleton style={{ width: 100, height: 100, borderRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <ThemedTextSkeleton />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <ThemedTextSkeleton style={{ flex: 1 }} />
          <ThemedTextSkeleton style={{ flex: 1 }} />
        </View>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  ContentItems: {
    flex: 1,
    flexDirection: 'row',
    minWidth: 160,
    margin: 4,
    padding: 2,
    gap: 8,
    borderWidth: 1,
    borderRadius: 8,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  descriptionItem: {
    flex: 1,
    marginTop: 4,
    gap: 4,
  }
})