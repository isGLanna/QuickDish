import { Pressable, Text, StyleSheet } from 'react-native'

interface CategoriesProps {
  id: number
  category: string
  emoji: string 
}

export function CategoryCard ({ item, handleFilter }: { item: CategoriesProps; handleFilter: (query: string) => void }) {
  return (
    <Pressable
      style={styles.ContentCategories}
      onPress={() => handleFilter(item.category)}>
      <Text>{item.category}</Text>
      <Text style={styles.Emoji}>{item.emoji}</Text>
    </Pressable>
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