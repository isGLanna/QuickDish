import { Image, View } from 'react-native'
import { PressableItem, ThemedText } from '@comp/index'

import { StyleSheet } from 'react-native'
import { ThemedTextSkeleton } from '@/components/atoms/skeleton/themed-text'
import { ImageSkeleton } from '@/components/atoms/skeleton/image'
import { foodReviews } from '@/api/food'
import type { FoodReview } from '@/types/food-review'

export function ListCard({ item }: { item: FoodReview }) {
  return (
    <PressableItem style={ styles.ContentItems }>
      <Image source={{ uri: item.foodImage }} style={{ width: 100, height: 100, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <ThemedText style={{ fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.foodName}</ThemedText>
          <ThemedText>{`${item.rating} ⭐`}</ThemedText>
        </View>

        {item.comment != undefined && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <ThemedText>{item.comment}</ThemedText>
        </View>
      )}
      </View>
    </PressableItem>
  )
}

export function ListCardSkeleton() {
  return (
    <PressableItem style={ styles.ContentItems }>
      <ImageSkeleton style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <ThemedTextSkeleton />
        <View>
          <ThemedTextSkeleton style={{ flex: 1 }} />
        </View>
      </View>
    </PressableItem>
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