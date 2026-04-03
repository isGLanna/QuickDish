import { Image, View } from 'react-native'
import { PressableItem, ThemedText } from '@comp/index'
import { ThemedTextSkeleton } from '@/components/atoms/skeleton/themed-text'

import { StyleSheet } from 'react-native'

export function CardSkeleton() {
  return (
    <PressableItem style={ styles.ContentItems }>
      <Image style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <View style={styles.descriptionItem}>
        <ThemedTextSkeleton />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <ThemedTextSkeleton style={{ flex: 1 }}/>
        </View>
      </View>
    </PressableItem>
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
    gap: 4,
  }
})