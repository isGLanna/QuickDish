import { View, Text, StyleSheet } from 'react-native'

interface Categories {
  id: number
  category: string
  emoji: string
}

export function CategoryCard ({ item }: { item: Categories}) {
  return (
    <View style={styles.ContentCategories}>
      <Text>{item.category}</Text>
      <Text style={styles.Emoji}>{item.emoji}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ContentCategories: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    width: 100,
    aspectRatio: 3/2,
    borderRadius: 8,
    margin: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Emoji: {
    fontSize: 18,
  },
})