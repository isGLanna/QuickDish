import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { ThemedText, ThemedFlatList, ThemedView } from '@comp/index'
import { SearchBar } from '@/components/molecules/search-bar'
import { CategoryCard, Card } from '@/components/organisms/home/index'
import { categories, popularItems, restaurants, recommendedItems } from '@/api/food'
import { useState, useCallback, useMemo } from 'react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filters, setFilters] = useState<string[]>([])
  const columns = Dimensions.get('window').width > 500 ? Math.floor(Dimensions.get('window').width / 175) : 2

  const filteredRecommendedItems = useMemo(() =>
    recommendedItems.filter(item => filters.length === 0 || filters.includes(item.category)),
    [filters],
  )

  const filteredPopularItems = useMemo(() =>
    popularItems.filter(item => filters.length === 0 || filters.includes(item.category)),
    [filters],
  )

  // TODO: substituir por consulta ao backend.
  const handleFilterItems = useCallback((query: string) => {
    setFilters(prev => {
      if (prev.includes(query)) {
        return prev.filter(filter => filter !== query)
      }
      return [...prev, query]
    })
  }, [])

  const renderHeader = (
    <View>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <View style={styles.section}>
        <ThemedFlatList
          horizontal
          style={{ backgroundColor: 'transparent' }}
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CategoryCard item={item} handleFilter={handleFilterItems} />}
        />
      </View>

      <View style={styles.section}>
        <ThemedView style={styles.title}>
          <ThemedText>
            Mais populares
          </ThemedText>
        </ThemedView>

        <ThemedFlatList
          horizontal
          style={styles.gridItems}
          showsHorizontalScrollIndicator={false}
          data={filteredPopularItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>

      <View style={styles.section}>
        <ThemedView style={styles.title}>
          <ThemedText>
            Restaurantes
          </ThemedText>
        </ThemedView>
        <ThemedFlatList
          horizontal
          style={styles.gridItems}
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>

      <ThemedView style={styles.title}>
        <ThemedText>
          Sugestoes de pedidos
        </ThemedText>
      </ThemedView>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredRecommendedItems}
        keyExtractor={item => item.id.toString()}
        numColumns={columns}
        renderItem={({ item }) =>  <Card item={item} /> }
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.recommendedGridRow}
        contentContainerStyle={{ paddingBottom: 8 + 60 /* espaço para o tab bar */ }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },

  section: {
    marginBottom: 16,
  },

  gridItems: {
    flex: 1,
    borderRadius: 8,
  },

  recommendedGridRow: {
    flex: 1,
  },

  gridCell: {
    flex: 1,
    overflow: 'hidden',
  },

  title: {
    alignSelf: 'flex-start',
    fontWeight: '400',
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginBottom: 4,
    borderRadius: 100,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
})
