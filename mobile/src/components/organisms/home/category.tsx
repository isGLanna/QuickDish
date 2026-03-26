import { StyleSheet } from 'react-native'
import { ThemedText } from '@comp/themed-text'
import { SelectableItem } from '@comp/selectable-item'

interface CategoriesProps {
  id: number
  category: string
  icon: string
}

export function CategoryCard ({ item, handleFilter }: { item: CategoriesProps; handleFilter: (query: string) => void }) {
  return (
    <SelectableItem
      style={styles.ContentCategories}
      onPress={() => handleFilter(item.category)}>
      <ThemedText >{item.category}</ThemedText>
      <ThemedText style={styles.Emoji}>{item.icon}</ThemedText>
    </SelectableItem>
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