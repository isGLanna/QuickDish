import { Image, View } from 'react-native'
import { PressableItem, ThemedText } from '@comp/index'

import { StyleSheet } from 'react-native'
import { ThemedTextSkeleton } from '@/components/atoms/skeleton/themed-text'
import { ImageSkeleton } from '@/components/atoms/skeleton/image'

interface ListCardProps {
  id: number
  name?: string
  description?: string
  rating: number
  image: string
}

export function ListCard({ item }: { item: ListCardProps }) {
  return (
    <PressableItem style={ styles.ContentItems }>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <ThemedText style={{ fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.name}</ThemedText>
        {item.description != undefined && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <ThemedText>Aqui apenas testando para ver como ficará o meu texto neste novo formato de distribuição do comentário, dúvidas ou outras</ThemedText>
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
    minWidth: 160,
    margin: 4,
    padding: 2,
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
  }
})