import { StyleSheet } from 'react-native'
import { PressableItem, ThemedText } from '@comp/index'

interface CategoriesProps {
  id: number
  category: string
  icon: string
}

export function CategoryCard ({ item, handleFilter }: { item: CategoriesProps; handleFilter: (query: string) => void }) {
  return (
    <PressableItem
      style={styles.ContentCategories}
      onPress={() => handleFilter(item.category)}>
      <ThemedText >{item.category}</ThemedText>
      <ThemedText style={styles.Emoji}>{item.icon}</ThemedText>
    </PressableItem>
  )
}

const styles = StyleSheet.create({
  ContentCategories: {
    width: 110,
    aspectRatio: 3/2,
    borderRadius: 8,
    borderWidth: 1,
    margin: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  Emoji: {
    fontSize: 18,
  },
})