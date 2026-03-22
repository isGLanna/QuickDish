import { View, FlatList, StyleSheet, Dimensions } from 'react-native'

import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { ThemedFlatList } from '@/components/themed-flatlist'

import { SearchBar } from '@/components/molecules/search-bar'
import { CategoryCard, Card } from '@/components/organisms/home/index'
import { categories, popularItems, restaurants, recommendedItems } from '@/api/food'
import { useState, useCallback, useMemo } from 'react'
import { useThemeColor } from '@/hooks/use-theme-color';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filters, setFilters] = useState<string[]>([])
  const columns = Dimensions.get('window').width > 500 ? Math.floor(Dimensions.get('window').width / 175) : 2
  const container = useThemeColor({}, 'container')

  const filteredRecommendedItems = useMemo(
    () => recommendedItems.filter(item => filters.length === 0 || filters.includes(item.category)),
    [filters],
  )

  const lastRowIndex = useMemo(
    () => Math.max(Math.ceil(filteredRecommendedItems.length / columns) - 1, 0),
    [filteredRecommendedItems.length, columns],
  )

  const firstRowLastItemIndex = useMemo(
    () => Math.min(columns, filteredRecommendedItems.length) - 1,
    [columns, filteredRecommendedItems.length],
  )

  const lastItemIndex = filteredRecommendedItems.length - 1
  const lastRowFirstItemIndex = useMemo(
    () => (filteredRecommendedItems.length === 0 ? -1 : lastRowIndex * columns),
    [filteredRecommendedItems.length, lastRowIndex, columns],
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

  const renderHeader = () => (
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
        <ThemedText style={styles.title} darkColor='#222'>
          Mais populares
        </ThemedText>
        <ThemedFlatList
          horizontal
          style={styles.gridItems}
          showsHorizontalScrollIndicator={false}
          data={popularItems.filter(item => filters.length === 0 || filters.includes(item.category))}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.title} darkColor='#222'>
          Restaurantes
        </ThemedText>
        <ThemedFlatList
          horizontal
          style={styles.gridItems}
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>

      <ThemedText style={styles.title} darkColor='#222'>
        Sugestoes de pedidos
      </ThemedText>
    </View>
  )

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={filteredRecommendedItems}
        keyExtractor={item => item.id.toString()}
        numColumns={columns}
        renderItem={({ item, index }) => {
          const isTopLeft = index === 0
          const isTopRight = index === firstRowLastItemIndex
          const isBottomLeft = index === lastRowFirstItemIndex
          const isBottomRight = index === lastItemIndex

          return (
            <View
              style={[
                [styles.gridCell, { backgroundColor: container }],
                isTopLeft && styles.topLeftCorner,
                isTopRight && styles.topRightCorner,
                isBottomLeft && styles.bottomLeftCorner,
                isBottomRight && styles.bottomRightCorner,
              ]}
            >
              <Card item={item} />
            </View>
          )
        }}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.recommendedGridRow}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </ThemedView>
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
  topLeftCorner: { borderTopLeftRadius: 8 },
  topRightCorner: { borderTopRightRadius: 8 },
  bottomLeftCorner: { borderBottomLeftRadius: 8 },
  bottomRightCorner: { borderBottomRightRadius: 8 },

  gridCell: {
    flex: 1,
    overflow: 'hidden',
  },

  title: {
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    alignSelf: 'flex-start',
    fontWeight: '400',
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginBottom: 4,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
})
