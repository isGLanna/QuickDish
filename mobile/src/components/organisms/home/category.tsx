import { StyleSheet } from 'react-native'
import { ThemedText } from '@/components/themed-text'
import { ThemedPressable } from '@/components/themed-pressable'

interface CategoriesProps {
  id: number
  category: string
  emoji: string 
}

export function CategoryCard ({ item, handleFilter }: { item: CategoriesProps; handleFilter: (query: string) => void }) {
  return (
    <ThemedPressable
      style={styles.ContentCategories}
      onPress={() => handleFilter(item.category)}>
      <ThemedText>{item.category}</ThemedText>
      <ThemedText style={styles.Emoji}>{item.emoji}</ThemedText>
    </ThemedPressable>
  )
}

const styles = StyleSheet.create({
  ContentCategories: {
    backgroundColor: '#f9f9f9',
    width: 100,
    aspectRatio: 3/2,
    borderRadius: 8,
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